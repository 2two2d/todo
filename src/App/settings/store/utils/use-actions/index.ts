import { useDispatch } from 'react-redux'
import { useMemo } from 'react'
import { bindActionCreators } from '@reduxjs/toolkit'

import { CategorySlice } from '@entities/category/model/slice'
import { TodoSlice } from '@entities/todo/model/slice'

const rootActions = {
  ...CategorySlice.actions,
  ...TodoSlice.actions
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types,@typescript-eslint/explicit-function-return-type
export const useActions = () => {
  const dispatch = useDispatch()

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}
