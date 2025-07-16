const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');

//const { senderBasicEmail } = require('./services/email-service');

const cron = require('node-cron'); 

const app = setupAndStartServer = () =>{
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.listen(PORT, ()=>{
        console.log(`server started at ${PORT}`);

        // senderBasicEmail(
        //     'randomSender@gmail.com',
        //      'neymar9838jr@gmail.com',
        //     'this is a testing email',
        //     'Hope you like the support'
        // );
    

cron.schedule('*/10 * * * * *', () => {
  console.log('running a task at every 10 secoands');
});
    });
}

setupAndStartServer();