import nodemailer from 'nodemailer'
import dotenv from 'dotenv';
dotenv.config();

const transport = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:process.env.Email_User,
        pass:process.env.Email_Pass,
    },

});

const SendOTP =  async(email , otp)=>{
    const mailotp = {
        from:process.env.Email_User,
        to:email,
        subject:"OTP Verification from E-commerce",
        html:`
         <div style="font-family: Arial, sans-serif; color: #333;">
              ${otp} otp valid is next 10 minutes.
              </div>
        `
    }
    await transport.sendMail(mailotp);
}

export default SendOTP;