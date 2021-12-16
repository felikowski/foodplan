import got from 'got';
export class Recipe {
    static async getAllRecipes(): Promise<String> {
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
}