const express = require('express');
const { createTransport } = require('nodemailer');
const fs = require("fs")


  // async..await is not allowed in global scope, must use a wrapper
  async function main() {
    const data = fs.readFileSync('./cred.json', 'utf8');
    const cred = JSON.parse(data);
    const transporter = createTransport({
        host: 'smtp-relay.brevo.com',
        port: 587,
        auth: {
            user: 'udhay1co.de@gmail.com',
            pass: cred.EMAIL
        }
    })
    await transporter.sendMail({
      from: "crawlynoreply@gmail.com",
      to: "udhay1co.de@gmail.com",
      subject: "Hello ✔",
      html: "<b>working right? lololol</b>"
      
      
    })


  }


    

// setup express bioilerplat on 3001 port
const app = express();
const port = 3001;

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/send', (req, res) => {
    main()
});

app.listen(port, () => console.log(`Mail app listening on port ${port}!`));