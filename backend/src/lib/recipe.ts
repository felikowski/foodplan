import got from 'got';
import Log from './Log';
import config from '../../config.json';

const urlPath = `${config.database_webserver.url}:${config.database_webserver.port}`;
const apiPath = 'recipe';
export default class Recipe {
  static async getAllRecipes(): Promise<string> {
    try {
      const response = await got(`${urlPath}/${apiPath}`);
      return response.body;
    } catch (error) {
      Log.getLog().error(error);
    }
    return null;
  }

  static async getSingleRecipe(id: number): Promise<string> {
    try {
      const response = await got.get(`${urlPath}/${apiPath}/${id}`);
      return response.body;
    } catch (error) {
      Log.getLog().error(error);
    }
    return null;
  }

  static async deleteSingleRecipe(id: number): Promise<string> {
    try {
      const response = await got.delete(`${urlPath}/${apiPath}/${id}`);
      return response.body;
    } catch (error) {
      Log.getLog().error(error);
    }
    return null;
  }

  static async insertRecipe(body: string): Promise<string> {
    try {
      const response = await got.post(`${urlPath}/${apiPath}`, { body });
      return response.body;
    } catch (error) {
      Log.getLog().error(error);
    }
    return null;
  }

  static async updateRecipe(id: number, body: string): Promise<string> {
    try {
      const response = await got.post(`${urlPath}/${apiPath}/${id}`, { body });
      return response.body;
    } catch (error) {
      Log.getLog().error(error);
    }
    return null;
  }
}
