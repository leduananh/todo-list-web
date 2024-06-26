import { WEB_CONFIG } from "../constants/config.js"

const SubCategorySchema = {
  name: '',
  categoryName: ''
}

// READ 
function getAllSubCategory() {
  const subCategoryArrayStr = localStorage.getItem(WEB_CONFIG.STORAGE.STORAGE_KEY.SUB_CATEGORY);
  return subCategoryArrayStr ? JSON.parse(subCategoryArrayStr) : [];
}

function getAllSubCategoryByCategoryName(categoryName) {
  const categories = getAllSubCategory();
  return categories.filter(subCat => subCat.categoryName === categoryName);
}

function getSubCategoryByName(name) {
  const categories = getAllSubCategory();
  return categories.find(item => item.name === name);
}

// CREATE
function createSubCategory(subCategoryName, categoryName) {
  let newSubCategoryObject = {
    ...SubCategorySchema,
    name: subCategoryName,
    categoryName
  }

  const subCategories = getAllSubCategory();
  subCategories.push(newSubCategoryObject);
  localStorage.setItem(WEB_CONFIG.STORAGE.STORAGE_KEY.SUB_CATEGORY, JSON.stringify(subCategories));
  return newSubCategoryObject;
}

// UPDATE
function updateSubCategory(updateSubCategoryObject) {
  const subCategories = getAllSubCategory();
  const index = categories.findIndex(subCategory => category.name === updateCategoryObject.name);
  const errorMsg = ''
  if (index !== -1) {
    subCategories[index] = { ...subCategories[index], ...updateSubCategoryObject };
    localStorage.setItem(WEB_CONFIG.STORAGE.STORAGE_KEY.SUB_CATEGORY, JSON.stringify(subCategories));
    return subCategories[index];
  }

  return errorMsg === '' ? null : errorMsg; // or handle the case where the category doesn't exist
}

// DELETE
function deleteSubCategoryByName(name) {
  const subCategories = getAllSubCategory();
  const filteredSubCategories = subCategories.filter(subcategory => subcategory.name !== name);
  localStorage.setItem(WEB_CONFIG.STORAGE.STORAGE_KEY.SUB_CATEGORY, JSON.stringify(filteredSubCategories));
}

function deleteAllSubCategory() {
  localStorage.removeItem(WEB_CONFIG.STORAGE.STORAGE_KEY.SUB_CATEGORY);
}

function isSubCategoryNameAlreadyExistInSubCategoryList(subCategoryName) {
  const subCategories = getAllSubCategory()
  let isAlreadyExist = false;
  for (let subCategory of subCategories) {    
    if (subCategory.name === subCategoryName) {
      isAlreadyExist = true;
      break;
    }
  }
  return isAlreadyExist
}

//tạo hàm empt của subcategory
function isSubCategoriesEmpty() {
  const subCategories = getAllSubCategory()
  return subCategories.length === 0;
}




const subCategoryService = {
  getSubCategoryByName,
  getAllSubCategoryByCategoryName,
  createSubCategory,
  updateSubCategory,
  deleteSubCategoryByName,
  deleteAllSubCategory,
  isSubCategoryNameAlreadyExistInSubCategoryList,
  getAllSubCategory,
  isSubCategoriesEmpty
}

export { subCategoryService }
