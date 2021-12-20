import { ILogObject, Logger } from 'tslog';
import { dbWrapper } from './dbWrapper';

export class Log {
    private static log: Logger
    public static getLog(): Logger {
        if(!this.log) {
            this.initialize();
        }
        return this.log;
    }
    public static initialize() {
        const logToDb = function (logObject: ILogObject) {
            dbWrapper.sendToLog(logObject);
        }
        Log.log = new Logger({ name: "logger" });
        Log.log.attachTransport({
            silly: logToDb,
            debug: logToDb,
            trace: logToDb,
            info: logToDb,
            warn: logToDb,
            error: logToDb,
            fatal: logToDb
        });

    }
}