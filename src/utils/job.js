const cron = require('node-cron');
const emailService = require('../services/email-service');
const sender = require('../config/emailConfig');

/**
 * cron job at every 5 min
 * check if there's any pending e-mail which is expected to be sent by now and still not sent(status:'PENDING')
 * doing this is more safe and less prone to error but at cost of more computational power 
 */

const setupJobs = () => {
  cron.schedule('*/10 * * * * *', async () => {
    const response = await emailService.fetchPendingEmails();
    console.log(response);
    response.forEach((email) => {
      sender.sendMail(
        {
          to: email.recepientEmail,
          from: "digvijaysinghjr@gmail.com",
          subject: email.subject,
          text: email.content
        },
        async (err, data) => {
          if (err) {
            console.log(err);
          } else {
            console.log(data);
            await emailService.updateTicket(email.id, { status: "SUCCESS" });
          }
        }
      );
    });
    console.log(response); 
  });
}

module.exports = setupJobs;