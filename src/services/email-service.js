const sender = require('../config/emailConfig');

const senderBasicEmail = async (mailFrom, mailTo, mailSubject, mailBody) =>{
    try {
        const response = await  sender.sendMail({
            from: mailFrom,
            to: mailTo,
            subject: mailSubject,
            text: mailBody
        });
    } catch (error) {
        console.log(error);
    }
   
}

module.exports = {
    senderBasicEmail
}

//although there's no need to use async await because there no sense in halting  the flow of code because of email
