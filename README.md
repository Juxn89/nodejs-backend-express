# Backend with NodeJS: API REST with ExpressJS
## REST | RESTful
- **REST**: **Re**presentational **S**tate **T**ransfer

|**Method**|**/products**|**/products/{id}**
|------|------|------------|
|GET|Get list|Get|
|PUT|Replace|Update/Replace|
|PATH|No Apply|Update|
|POST|Create|No Apply|
|DELETE|Delete|Delete|

## Populars middlewares on Express.js
- [CORS](http://expressjs.com/en/resources/middleware/cors.html): Enable CORS (**Cross-origin resource sharing**)on ours applications.
- [Morgan](http://expressjs.com/en/resources/middleware/morgan.html): Logger for requests HTTP.
- [Helmet](https://github.com/helmetjs/helmet): Protects ours Express applications setting up severals HTTP headers.
- [Express Debug](https://github.com/devoidfury/express-debug): Debugging.
- [Express Slash](https://github.com/ericf/express-slash).
- [Passport](https://github.com/jaredhanson/passport): Setup severals authentications.
- [**Others populars middlewares**](http://expressjs.com/en/resources/middleware.html).

## Considerations before deploy to **Production/Live**
1. CORS
2. Https
3. Build processes
4. Remove logs
5. Security (Helmet)
6. Testing

## Alternative to Heroku
1. [Adiós Heroku! 7 alternativas mucho mejores que Heroku](https://www.youtube.com/watch?v=q--_5p15HnU)
2. [Alternativas Fáciles y Gratuitas a Heroku](https://www.youtube.com/watch?v=BqLVnocxxF0)
3. [Railway](https://railway.app/)
3. [Deploy server NODE con EXPRESS en RAILWAY](https://www.youtube.com/watch?v=ewoIdVjakns)