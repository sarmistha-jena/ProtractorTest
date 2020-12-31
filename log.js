var winston = require('winston');

winston.configure({ transports: [new winston.transports.File({ filename: 'logfile.log' })] });
// winston.remove(winston.transports.Console);
// winston.add(winston.transports.Console, { timestamp: true });
// winston.add(new winston.transports.File({ filename: 'logfile.log' }));
module.exports = winston;