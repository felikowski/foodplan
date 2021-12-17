import got from 'got';
import { ILogObject, Logger } from 'tslog';
export class dbWrapper {
    static async getAllRecipes(): Promise<String> {
        console.log('getAllRecipesViaWebService');
        try {
            const response = await got('http://localhost:4000/recipe');
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
            const response = await got.get(`http://localhost:4000/recipe/${id}`);
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
        const response = await got.post('http://localhost:4000/log', { json: dbLog}).json();
    }
}


