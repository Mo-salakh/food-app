import { API_URL } from "./config";

async function getMealInfo(mealID) {
    try {
        const response = await fetch(`${API_URL}/lookup.php?i=${mealID}`);
        if (!response.ok) {
            throw new Error(`Ошибка ${response.status}: ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Ошибка при получении информации о блюде:', error);
        throw error;
    }
}

async function getAllCategories() {
    try {
        const response = await fetch(API_URL + '/categories.php');
        if (!response.ok) {
            throw new Error(`Ошибка ${response.status}: ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Ошибка при получении категорий:', error);
        throw error; 
    }
}

async function getCategory(catName) {
    try {
        const response = await fetch(`${API_URL}/filter.php?c=${catName}`);
        if (!response.ok) {
            throw new Error(`Ошибка ${response.status}: ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Ошибка при получении категории:', error);
        throw error; 
    }
}

export { getMealInfo, getAllCategories, getCategory }