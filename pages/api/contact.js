const nodemailer = require('nodemailer');

const contactFunction = async (req, res) => {
  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'mail.infomaniak.com',
    auth: {
      // user: process.env.EMAIL_USER,
      // pass: process.env.EMAIL_PASSWORD,
    },
    secure: true,
    tls: {
      rejectUnauthorized: false,
    },
  });
  const mailData = {
    //from: `estetica revolution <contact@fabiencarrichon.ch>`,
    // to: 'moussaabmma@gmail.com',
    subject: `Demande de contact - ${req.body.subject}`,
    replyTo: req.body.email,
    text: req.body.message,
    html: `
      <div>
        <p>name: ${req.body.name}</p>
        <p>email: ${req.body.email}</p>
        <p>message: ${req.body.message}</p>
      </div>`,
  };
  try {
    const mailSendResp = await transporter.sendMail(mailData);
    res.status(200).json(mailSendResp);
  } catch (error) {
    res.status(500).json(error);
  }
};

export default contactFunction;
