const nodemailer=require("nodemailer");
const sendemail=async(to,messagecontent)=>{
    try {
        const transporter=nodemailer.createTransport({
            host:'smtp.gmail.com',
            port:587,
            secure:false,
            auth:{
                user:"abcd18738710@gmail.com",
                pass:"skkeravqkhjbyrpw",
            }
        });
        const message={
            to,
            subject:"OpeninApp",
            html:`
            <h3>Message From OpeninApp</h3>
            <p>${messagecontent}<p>`,
        };
        const info=await transporter.sendMail(message);
        console.log("message sent",info.messageId);
    } catch (error) {
        console.log(error);
        throw new Error("Email not sent");
    }
};
module.exports=sendemail;