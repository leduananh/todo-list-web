import { WEB_CONFIG } from "../constants/config.js"

// READ 
function getAllCategory() {
  const categoryArrayStr = localStorage.getItem(WEB_CONFIG.STORAGE.STORAGE_KEY.CATEGORY);
  return categoryArrayStr ? JSON.parse(categoryArrayStr) : [];
}

function getCategoryByName(name) {
  const categories = getAllCategory();
  return categories.find(item => item.name === name);
}

// CREATE
function createCategory(newCategoryObject = {}) {
  const categories = getAllCategory();
  categories.push(newCategoryObject);
  localStorage.setItem(WEB_CONFIG.STORAGE.STORAGE_KEY.CATEGORY, JSON.stringify(categories));
  return newCategoryObject;
}

// UPDATE
function updateCategory(updateCategoryObject) {
  const categories = getAllCategory();
  const index = categories.findIndex(category => category.name === updateCategoryObject.name);

  if (index !== -1) {
    categories[index] = {...categories[index], ...updateCategoryObject};
    localStorage.setItem(WEB_CONFIG.STORAGE.STORAGE_KEY.CATEGORY, JSON.stringify(categories));
    return categories[index];
  }

  return null; // or handle the case where the category doesn't exist
}

// DELETE
function deleteCategoryByName(name) {
  const categories = getAllCategory();
  const filteredCategories = categories.filter(category => category.name !== name);
  localStorage.setItem(WEB_CONFIG.STORAGE.STORAGE_KEY.CATEGORY, JSON.stringify(filteredCategories));
}

function deleteAllCategory() {
  localStorage.removeItem(WEB_CONFIG.STORAGE.STORAGE_KEY.CATEGORY);
}

const categoryService = {
  getAllCategory,
  getCategoryByName,
  createCategory,
  updateCategory,
  deleteCategoryByName,
  deleteAllCategory,
}

export { categoryService }
