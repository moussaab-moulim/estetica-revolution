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

  try {
    const mailSendResp = await transporter.sendMail(req.body);
    res.status(200).json(mailSendResp);
  } catch (error) {
    res.status(500).json(error);
  }
};

export default contactFunction;
