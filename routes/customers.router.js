const express = require('express')
const CustomerService = require('../services/customers.service');
const validatorHandler = require('../middlewares/validatorHandler')
const { createCustomerSchema, getCustomerSchema, updateCustomerSchema } = require('../Schemas/customer.schema')

const router = express.Router();
const services = new CustomerService()

router.get('/', async (req, res, next) => {
  try {
    const customers = await services.find();
    res.json(customers)
  } catch (error) {
    next(error)
  }
})

router.get('/:id', validatorHandler(getCustomerSchema, 'params'), async (req, res, next) => {
  try {
    const { id } = req.params
    const customer = await services.findOne(id);

    if(!customer) {
      res.status(400).json({message: 'Not found!'});
    }
    else{
      res.status(200).json({
        ...customer
      })
    }
  } catch (error) {
    next(error)
  }

})

router.post('/', validatorHandler(createCustomerSchema, 'body'), async (req, res, next) => {
  try {
    const body = req.body;

    const customer = await services.create(body);

    res.status(201).json({
      ...customer
    })
  } catch (error) {
    next(error)
  }
})

router.patch('/:id',
  validatorHandler(getCustomerSchema, 'params'),
  validatorHandler(updateCustomerSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;

      const customerToUpdate = await services.update(id, body);

      res.json(customerToUpdate)
    } catch (error) {
      next(error)
    }
})

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const productoToDelete = await services.delete(id);

    res.json(productoToDelete)
  } catch (error) {
    next(error)
  }
})

module.exports = router