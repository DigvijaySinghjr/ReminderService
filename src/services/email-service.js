const sender = require('../config/emailConfig');
const TicketRepository =require('../repository/ticket-rpository');

const repo = new TicketRepository();

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

const fetchPendingEmails = async(timestamp) => {  //fetching all emails before this timestamp
    try {
        const response = await repo.get({status: "PENDING"});
        return response;   
    } catch (error) {
        console.log(error);
    }
}

const updateTicket = async (ticketId ,data) => {
    try {
        const response = await repo.update(ticketId, data);
        return response;   
    } catch (error) {
        console.log(error);
    }   
}

const createNotification = async (data) => {
    try {
        const response = await repo.create(data);
        return response;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    senderBasicEmail,
    fetchPendingEmails,
    createNotification,
    updateTicket
}

//although there's no need to use async await because there no sense in halting  the flow of code because of email

//we didn't use the class here cause there is so less function in this service 