
import { Category } from "../Modal/Category";

export class CategoriesState{
    public categories:Category[]=[];
}
export enum CategoriesActionType{
    addCategory="addCategory",
    updateCategory="updateCategory",
    deleteCategory="deleteCategory",
    downloadCategory="downloadCategory",
}

export interface CategoryAction{
    type:CategoriesActionType;
    payload?:any;
}

export const addCategoryAction=(newCategory:Category):CategoryAction=>{
    return{type:CategoriesActionType.addCategory, payload:newCategory};
}
export const updateCategoryAction=(updatedCategory:Category):CategoryAction=>{
    return{type:CategoriesActionType.deleteCategory,payload:updatedCategory};
}
export const deleteCategoryAction=(id:number):CategoryAction=>{
return{type:CategoriesActionType.deleteCategory,payload:id};
}
export const downloadCategoryAction=(category:Category[]):CategoryAction=>{
    return{type:CategoriesActionType.downloadCategory,payload:category};
}

export const CategoriesReducer =(
    currentState:CategoriesState= new CategoriesState(),
    action:CategoryAction
    ): CategoriesState =>{
    const newState = {...currentState};

    switch(action.type){
        case CategoriesActionType.addCategory:
            newState.categories=[...newState.categories,action.payload];
        break;
        case CategoriesActionType.deleteCategory:
        break;
        case CategoriesActionType.downloadCategory:
            newState.categories=action.payload;
        break;
        case CategoriesActionType.updateCategory:
        break;
    }
    return newState
}