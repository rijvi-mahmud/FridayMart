// import winston from "winston";

// const { combine, timestamp, json, prettyPrint, errors, colorize } = winston.format;

// enum LogLevel {
//     Emerg = "emerg",
//     Alert = "alert",
//     Crit = "crit",
//     Error = "error",
//     Warning = "warning",
//     Notice = "notice",
//     Info = "info",
//     Debug = "debug",
//   }

// const createLogger = ({serviceName, logLevel}:{
//     serviceName: string;
//     logLevel: LogLevel;
// }) => {
//     return winston.createLogger({
//         levels: winston.config.syslog.levels,
//         format: combine(
//             errors({ stack: true }),
//             timestamp(),
//             json(),
//             prettyPrint(),
//             colorize()
//         ),
//         transports: [
//             new winston.transports.Console({ level: logLevel }),
//             new winston.transports.File({ filename: `logs/${serviceName}.log` }) // Separate log files per service
//         ],
//         defaultMeta: { service: serviceName }, // Different service name for each logger
//     });
// };

// export default createLogger;



import winston from "winston";

const { combine, timestamp, json, prettyPrint, errors, colorize } = winston.format;

enum LogLevel {
    Emerg = "emerg",
    Alert = "alert",
    Crit = "crit",
    Error = "error",
    Warning = "warning",
    Notice = "notice",
    Info = "info",
    Debug = "debug",
}

class ServiceLogger {
    private logger: winston.Logger;
    
    constructor(serviceName: string, logLevel: LogLevel) {
        this.logger = winston.createLogger({
            levels: winston.config.syslog.levels,
            format: combine(
                errors({ stack: true }),
                timestamp(),
                json(),
                prettyPrint(),
                colorize()
            ),
            transports: [
                new winston.transports.Console({ level: logLevel }),
                new winston.transports.File({ filename: `logs/${serviceName}.log` })
            ],
            defaultMeta: { service: serviceName },
        });
    }

    // Method to log info
    info(message: string) {
        this.logger.info(message);
    }

    // Method to log errors
    error(message: string) {
        this.logger.error(message);
    }

    // Method to log warnings
    warn(message: string) {
        this.logger.warn(message);
    }

    // Additional methods for other log levels
    debug(message: string) {
        this.logger.debug(message);
    }

    // Method to change log level dynamically
    setLogLevel(newLevel: LogLevel) {
        this.logger.level = newLevel;
    }
}

export { LogLevel, ServiceLogger };
