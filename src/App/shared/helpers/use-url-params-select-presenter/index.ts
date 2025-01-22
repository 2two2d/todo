import { useEffect, useState } from 'react'

import { useSearchParams } from 'react-router'

import { isTruthy } from '@shared/utils'

import type { ESearchParamsKeys } from '@shared/enum/search-params-keys'

import type { ESearchParamsValues } from '@shared/enum/search-params-values'

import type { ISelectProps } from '@shared/ui/components/input'

interface IUseSearchParamsSelectPresenterProps extends Omit<ISelectProps<ESearchParamsValues>, 'value' | 'onChange'> {
  searchParamKey: ESearchParamsKeys
  defaultValue?: ESearchParamsValues
}

const useSearchParamsSelectPresenter =
(props: IUseSearchParamsSelectPresenterProps): ISelectProps<ESearchParamsValues> => {
  const { searchParamKey, defaultValue, ...otherProps } = props

  const [valueState, setValueState] = useState<ESearchParamsValues>()

  const [_, setSearchParams] = useSearchParams()

  const onChange = (newValue: ESearchParamsValues): void => {
    setSearchParams((prev) => ({ ...Object.fromEntries(prev.entries()), [searchParamKey]: newValue }))
    setValueState(newValue)
  }

  useEffect(() => {
    if (isTruthy(defaultValue)) {
      setValueState(defaultValue)
    }
  }, [])

  return {
    ...otherProps,
    onChange,
    value: isTruthy(valueState) ? [valueState] : []
  }
}

export default useSearchParamsSelectPresenter
