import { ILogObject, Logger } from 'tslog';
import config from '../../../config.json';
import got from 'got';
export class Log {
    private static log: Logger
    public static getLog(): Logger {
        if(!this.log) {
            this.initialize();
        }
        return this.log;
    }
    static async sendToLog(logObject: ILogObject) {
        const databaseUrl = `${config.database_webserver.url}:${config.database_webserver.port}`;
        const dbLog = {
            timestamp: logObject.date,
            logLevel: logObject.logLevel,
            message: logObject.argumentsArray,
            codeline: `${logObject.fullFilePath} ${logObject.functionName} ${logObject.columnNumber}` 
        };
        const response = await got.post(`${databaseUrl}/log`, { json: dbLog}).json();
    }
    public static initialize() {
        const logToDb = function (logObject: ILogObject) {
            Log.sendToLog(logObject);
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