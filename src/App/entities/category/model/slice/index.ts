import { createSlice } from '@reduxjs/toolkit'

import { v4 as uuid } from 'uuid'

import { truthy } from '@shared/utils'

import type { PayloadAction } from '@reduxjs/toolkit'

import type { ICategory, ICategoryCreatePort } from '../interface'

interface ICategorySliceState {
  categories: ICategory[]
}

const initialState: ICategorySliceState = {
  categories: []
}

const MAX_CATEGORIES = 10

const CategorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    addCategory: (state, { payload }: PayloadAction<ICategoryCreatePort>) => {
      if (state.categories.length < MAX_CATEGORIES)
        state.categories.push({ ...payload, id: uuid() })
    },

    deleteCategory: (state, { payload }: PayloadAction<string>) => {
      state.categories = state.categories.filter((item) => item.id !== payload)
    }
  },
  selectors: {
    doesCategoryExist: (state, { payload }: PayloadAction<ICategoryCreatePort>): boolean => {
      return truthy(state.categories.find((item) => {
        return item.name === payload.name && item.color === payload.color
      }))
    }
  }
})

export {
  CategorySlice,
  MAX_CATEGORIES,
  type ICategorySliceState
}
