import got from 'got';
import { Log }from './Log';
import config from '../../config.json';
export class Ingredient {
    static async getAllIngredients(): Promise<String> {
        try {
            const response = await got(`${config.database_webserver.url}:${config.database_webserver.port}/ingredient`);
            return response.body;
        } catch (error) {
            Log.getLog().error(error);
        } finally {
        }
    }
    static async getSingleIngredient(id:number): Promise<String> {
        try {
            const response = await got(`${config.database_webserver.url}:${config.database_webserver.port}/ingredient/${id}`);
            return response.body;
        } catch (error) {
            Log.getLog().error(error);
        } finally {
        }
    }
    static async deleteSingleIngredient(id:number): Promise<String> {
        try {
            const response = await got.delete(`${config.database_webserver.url}:${config.database_webserver.port}/ingredient/${id}`);
            return response.body;
        } catch (error) {
            Log.getLog().error(error);
        } finally {
        }
    }
    static async insertIngredient(body: String): Promise<String> {
        try {
            const response = await got.post(`${config.database_webserver.url}:${config.database_webserver.port}/ingredient`, { json: body });
            response.statusCode = 200;
            return response.body;
        } catch (error) {
            Log.getLog().error(error);
        } finally {
        }
    }
    static async updateIngredient(id: number, body: String): Promise<String> {
        try {
            const response = await got.post(`${config.database_webserver.url}:${config.database_webserver.port}/ingredient/${id}`, { json: body });
            return response.body;
        } catch (error) {
            Log.getLog().error(error);
        } finally {
        }        
    }
}