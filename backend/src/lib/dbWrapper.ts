import got from 'got';
import { ILogObject, Logger } from 'tslog';

const config = require('../../../../config.json');
export class dbWrapper {
    private static databaseUrl = `${config.database_webserver.url}:${config.database_webserver.url}`;
    static async getAllRecipes(): Promise<String> {
        console.log('getAllRecipesViaWebService');
        try {
            const response = await got(`${this.databaseUrl}/recipe`);
            console.log(response.body);
            return response.body;
        } catch (error) {
            console.log(error.response.body);
            return null;
        } finally {
        }
    
    }
    
    static async getSingleRecipe(id: number): Promise<String> {
        try {
            const response = await got.get(`${this.databaseUrl}/recipe/${id}`);
            console.log(response.body);
            return response.body;
        } catch {
            return null;
        } finally {
        }
    }

    static async sendToLog(logObject: ILogObject) {
        const dbLog = {
            timestamp: logObject.date,
            logLevel: logObject.logLevel,
            message: logObject.argumentsArray,
            codeline: `${logObject.fullFilePath} ${logObject.functionName} ${logObject.columnNumber}` 
        };
        const response = await got.post(`${this.databaseUrl}/log`, { json: dbLog}).json();
    }
}


