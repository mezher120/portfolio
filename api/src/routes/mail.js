const express = require('express');
const router = express.Router();
const axios = require('axios');
const nodemailer = require('nodemailer');





// asignamos los metodos y las url que en este caso seri /mail porque lo exporta a index.js 
// que asigna /mail al archivo mail.js
router.post('/', async (req, res) => {
    
    var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "bluebirdcommerce@gmail.com",
          pass: "qngdepjfqwgtnzgh",
        },
        secure: false, // use SSL
        tls: {
          rejectUnauthorized: false
        }
      });

    const {name, email, message} = req.body;

    const contentHTML = `
    <div>Name: ${name}</div>
    <div>mail: ${email}</div>
    <div>Message: ${message}</div>
        `;

    var mailOptions = {
      from: "bluebirdcommerce@gmail.com",
      to: "javierferrarimezher@gmail.com",
      subject: `Sending Email using Node.js Portfolio from  ${name}`,
      html: contentHTML,
    };

    await transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });

    res.send("mail enviado");

});

module.exports = router;