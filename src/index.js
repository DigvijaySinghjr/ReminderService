const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');

const TicketService = require('./services/email-service');
const TicketRepository = require('./repository/ticket-rpository');
const ticketRepo = new TicketRepository();
const emailService = require('./services/email-service');
//just for Debugging

//const { senderBasicEmail } = require('./services/email-service');
const TicketController = require('./controller/ticket-controller');

const jobs = require('./utils/job');


const setupAndStartServer = () =>{
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true})); 

    app.post('/api/v1/tickets', TicketController.create);

    app.listen(PORT, async ()=>{
        console.log(`server started at ${PORT}`);
        
        jobs();
       // const emails = await ticketRepo.getAll();
        //console.log(emails);
        
      
        //emailService.updateTicket(10, data);
        // const ej = [];
        // emails.forEach(element => {
        //     if(element.status == "PENDING"){
        //         ej.push(element);
        //     }
        // });
        // console.log(ej);
        //ticketRepo.multipleRemove([13]);
        //console.log(emailService.fetchPendingEmails());

        // senderBasicEmail(
        //     'randomSender@gmail.com',
        //     'neymar9838jr@gmail.com',
        //     'this is a testing email',
        //     'Hope you like the support'
        // );
        
    });
}

setupAndStartServer();