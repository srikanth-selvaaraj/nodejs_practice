var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ssssri32546@gmail.com',
    pass: 'JSLV2505'
  }
});

var mailOptions = {
  from: 'ssssri32546@gmail.com',
  to: 'ssssri32546@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});