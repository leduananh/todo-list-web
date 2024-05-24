import { WEB_CONFIG } from "../constants/config.js";

function getAllCategory() {
  const categoryArrayStr = localStorage.getItem(WEB_CONFIG.STORAGE.STORAGE_KEY.CATEGORY);
  let categoryArray = [];

  if (categoryArrayStr) {
    categoryArray = JSON.parse(categoryArrayStr);
  }

  return categoryArray;
}

function getCategoryByName(name) {
  const categoryArrayStr = localStorage.getItem(WEB_CONFIG.STORAGE.STORAGE_KEY.CATEGORY);
  let categoryArray = [];

  if (categoryArrayStr) {
    categoryArray = JSON.parse(categoryArrayStr);
  }

  const matchedCategory = categoryArray.find(item => item.name === name);
  return matchedCategory;
}

function createCategory(newCategoryObject = null) {
  const categoryArrayStr = localStorage.getItem(WEB_CONFIG.STORAGE.STORAGE_KEY.CATEGORY);
  let categoryArray = [];

  if (categoryArrayStr) {
    categoryArray = JSON.parse(categoryArrayStr);
  }

  categoryArray.push(newCategoryObject);

  localStorage.setItem(WEB_CONFIG.STORAGE.STORAGE_KEY.CATEGORY, JSON.stringify(categoryArray));

  return newCategoryObject;
}

function updateCategory(updateCategoryObject) {
  const categoryArrayStr = localStorage.getItem(WEB_CONFIG.STORAGE.STORAGE_KEY.CATEGORY);
  let categoryArray = [];

  if (categoryArrayStr) {
    categoryArray = JSON.parse(categoryArrayStr);
  }

  const existedCategoryObjectIndex = categoryArray.findIndex(category =>
    category.name === updateCategoryObject.name);

  const existedCategoryObject = categoryArray[existedCategoryObjectIndex];

  const updatedObj = { ...existedCategoryObject, ...updateCategoryObject };

  categoryArray[existedCategoryObjectIndex] = updatedObj;

  localStorage.setItem(WEB_CONFIG.STORAGE.STORAGE_KEY.CATEGORY, JSON.stringify(categoryArray));

  return updatedObj;
}

function deleteCategoryByName(name) {
  // Implementation needed
}

function deleteAllCategory() {
  // Implementation needed
}

function isCategoryExistInStorage() {
  // Implementation needed
}

const categoryService = {
  getAllCategory,
  getCategoryByName,
  createCategory,
  updateCategory,
  deleteCategoryByName,
  deleteAllCategory,
};

export { categoryService };

categoryService.is
