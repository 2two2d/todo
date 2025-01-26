import { useSelector } from 'react-redux'

import { CategorySlice, type ICategory, type ICategoryCreatePort } from '@entities/category/model'

import type { RootState } from '@settings/store'

const useGetCategories = (): ICategory[] => useSelector((state: RootState) => state.category.categories)

const useGetCategoriesByIds = (): (payload: string[]) => ICategory[] => {
  const categoryState = useSelector((state: RootState) => state.category)

  return (payload: string[]): ICategory[] => CategorySlice.selectors.
    getCategoriesByIds({ category: categoryState }, {
      payload,
      type: 'query'
    })
}

const useDoesCategoryExist = (): (payload: ICategoryCreatePort) => boolean => {
  const categoryState = useSelector((state: RootState) => state.category)

  return (payload: ICategoryCreatePort): boolean => CategorySlice.selectors.
    doesCategoryExist({ category: categoryState }, {
      payload,
      type: 'query'
    })
}

export {
  useGetCategories,
  useGetCategoriesByIds,
  useDoesCategoryExist
}
