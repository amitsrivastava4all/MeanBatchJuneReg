var cron = require('node-cron');
const mail = require('./mail');
cron.schedule('*/2 * * * * *', () => {
    mail('amit','amit.shashi.srivastava@gmail.com','Hello',null);
  });