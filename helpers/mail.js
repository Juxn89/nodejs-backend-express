const nodemailer = require("nodemailer");
const { smtpHost, smtpPort, smtpUser, smtpPassword } = require('../config/config')

async function Send(from, recipients, subject, text, html) {
  let testAccount = await nodemailer.createTestAccount();
  const SMPT_USER = smtpUser || testAccount.user;
  const SMPT_PASS = smtpPassword || testAccount.pass;

  let transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: false,
    auth: {
      user: SMPT_USER,
      pass: SMPT_PASS,
    },
  });

  let info = await transporter.sendMail({
    from,
    to: recipients,
    subject,
    text,
    html,
  });

  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

  return {
    message: 'Mail sent'
  }
}

module.exports = {
  SendMail: Send
}