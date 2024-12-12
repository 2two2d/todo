import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ICategory, ICategoryCreatePort} from "../interface";
import {v4 as uuid} from "uuid";

export interface ICategorySliceState {
    categories: ICategory[]
}

const initialState: ICategorySliceState = {
    categories: []
}

export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        addCategory: (state, {payload}: PayloadAction<ICategoryCreatePort>) => {
            state.categories.push({ ...payload, id: uuid() })
        },

        deleteCategory: (state, {payload}: PayloadAction<string>) => {
            state.categories.filter((item) => item.id !== payload)
        }
    }
})

export const {
    addCategory,
    deleteCategory
} = categorySlice.actions

export default categorySlice.reducer