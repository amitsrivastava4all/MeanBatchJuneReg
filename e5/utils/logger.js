const {transports, createLogger, format} = require('winston');

    const logger = createLogger({
        format: format.combine(
            format.timestamp(),
            format.json()
        ),
        transports: [
            //new transports.Console(),
            new transports.File({filename: '/Users/amit/Documents/logs/app.log', level: 'debug'}),
           new transports.File({filename: 'logs/activity/activity.log', level:'info'})
        ]
    });
    module.exports = logger;