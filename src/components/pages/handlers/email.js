import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'yashwanthn241@gmail.com',
    pass: 'Dnivra,2411998'
  }
});
