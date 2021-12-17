import { ILogObject, Logger } from 'tslog';
import { dbWrapper } from './dbWrapper';

export class Log {
    static log: Logger

    public static initialize() {
        const logToDb = function (logObject: ILogObject) {
            console.log('transport');
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
if (!Log.log) {
    Log.initialize();
}

