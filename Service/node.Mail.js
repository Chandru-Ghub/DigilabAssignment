const nodemailer = require('nodemailer')
const sender = process.env.USER
const key = process.env.PASS
const handleMail = async(req,res,next)=>{
    const {email,message,logo} = req.body
        var transporter =  nodemailer.createTransport({
            service: 'gmail',
            auth:{
    
                user: sender,
                pass: key
            }
    
        });
        var mailOptions = message?{
    
            from: sender,
            to: email,
            subject: 'Start your new beginning with Mode UI',
            text: message,
            html: `<img src='${logo}'/><br/>
            <h1> Thank you for subscribing you will get notified!</h1>             
            <a href='www.google.com'>
            Google</a>
            <p>${message}</p>`
        }:{
    
            from: sender,
            to: email,
            subject: 'Welcome to ModeUI',
            html: `<img src='https://firebasestorage.googleapis.com/v0/b/shopyecommerce-e73af.appspot.com/o/DigilabsLogo%2F04b251f1-f74f-4ff0-b804-ce8ad27fee7f?alt=media&token=d41ccb87-d5f8-4ecf-99c4-49ec5fadcbc5'/><br/>
            <h1> Thank you for subscribing you will get notified!</h1>             
            <a href='www.google.com'>
            Google</a>
            <p>What are you waiting for join us now!</p>`
        };
    
        await transporter.sendMail(mailOptions, (err,info)=>{
    
            if(err){
                console.log(err);
                // return res.send('Mail not send there is a problem check your email or connection')
            }else{
                console.log('message '+ info.response);
                // res.send( 'Success')
            }
        });

}



module.exports = handleMail