import got from 'got';
import Log from './Log';
import config from '../../config.json';

export class Ingredient {
  static async getAllIngredients(): Promise<string> {
    try {
      const response = await got(`${config.database_webserver.url}:${config.database_webserver.port}/ingredient`);
      return response.body;
    } catch (error) {
      Log.getLog().error(error);
    }
    return null;
  }

  static async getSingleIngredient(id: number): Promise<string> {
    try {
      const response = await got(`${config.database_webserver.url}:${config.database_webserver.port}/ingredient/${id}`);
      return response.body;
    } catch (error) {
      Log.getLog().error(error);
    }
    return null;
  }

  static async deleteSingleIngredient(id: number): Promise<string> {
    try {
      const response = await got.delete(
        `${config.database_webserver.url}:${config.database_webserver.port}/ingredient/${id}`,
      );
      return response.body;
    } catch (error) {
      Log.getLog().error(error);
    }
    return null;
  }

  static async insertIngredient(body: string): Promise<string> {
    try {
      const response = await got.post(`${config.database_webserver.url}:${config.database_webserver.port}/ingredient`, {
        body,
      });
      response.statusCode = 200;
      return response.body;
    } catch (error) {
      Log.getLog().error(error);
    }
    return null;
  }

  static async updateIngredient(id: number, body: string): Promise<string> {
    try {
      const response = await got.post(
        `${config.database_webserver.url}:${config.database_webserver.port}/ingredient/${id}`,
        { body },
      );
      return response.body;
    } catch (error) {
      Log.getLog().error(error);
    }
    return null;
  }
}
