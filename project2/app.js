// console.log("project started.")

// let a = 45;
// let b = 30;

// console.log(a+b);

const mailer = require('nodemailer');

let transport = mailer.createTransport({
    service : 'gmail', 
    auth:{
        user: 'shrutichille1234@gmail.com',
        pass: 'Ganu@&1603'
    }
});

let messageOb = {
    from : 'shrutichille1234@gmail.com',
    to : 'pratikshatapkeer2003@gmail.com',
    subject : 'hello pratiksha, hope you sleep early today!',
    text : 'Good night!!'
}

transport.sendMail(messageOb,(error,info)=>{

    if(error){
        console.log("there is an error" + error);
    }
    else{
        console.log("Email sent");
        console.log(info.response);
    }
});