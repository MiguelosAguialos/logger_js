const winston = require('winston')
require('winston-daily-rotate-file');

const commonFormat = winston.format.printf(({ level, message, timestamp }) => {
    return `${timestamp} [${level.toUpperCase()}]: ${message}`
})

var file = new winston.transports.DailyRotateFile({
    level: 'info',
    filename: 'log %DATE%.log',
    datePattern: 'DD-MM-YYYY',
    dirname: './log',
    auditFile: true,
    zippedArchive: true,
    maxFiles: '31d',
});

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        commonFormat
    ),
    transports: [
        new winston.transports.Console(),
        file
    ]
})

module.exports = {
    logger
}