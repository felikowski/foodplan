import got from 'got';
import { Log }from './Log';
import config from '../../config.json';

const urlPath = `${config.database_webserver.url}:${config.database_webserver.port}`;
const apiPath = `recipe`;
export class Recipe {
    static async getAllRecipes(): Promise<String> {
        try {
            const response = await got(`${urlPath}/${apiPath}`);
            return response.body;
        } catch(error) {
            Log.getLog().error(error);
        } finally {
        }
    
    }
    static async getSingleRecipe(id: number): Promise<String> {
        try {
            const response = await got.get(`${urlPath}/${apiPath}/${id}`);
            return response.body;
        } catch(error) {
            Log.getLog().error(error);
        } finally {
        }
    }
    static async deleteSingleRecipe(id: number): Promise<String> {
        try {
            const response = await got.delete(`${urlPath}/${apiPath}/${id}`);
            return response.body;
        } catch (error) {
            Log.getLog().error(error);
        } finally {
        }
    }
    static async insertRecipe(body: String): Promise<String> {
        try {
            const response = await got.post(`${urlPath}/${apiPath}`, { json: body });
            return response.body;
        } catch (error) {
            Log.getLog().error(error);
        } finally {
        }
    }
    static async updateRecipe(id: number, body: String): Promise<String> {
        try {
            const response = await got.post(`${urlPath}/${apiPath}/${id}`, { json: body });
            return response.body;
        } catch (error) {
            Log.getLog().error(error);
        } finally {
        }        
    }
}