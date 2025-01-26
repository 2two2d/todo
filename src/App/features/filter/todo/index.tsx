import { ESearchParamsKeys } from '@shared/enum/search-params-keys'
import { ESearchParamsValues } from '@shared/enum/search-params-values'
import Select from '@shared/ui/components/input/select'

import { makeClassname } from '@shared/utils'

import { useSearchParamsSelectPresenter } from '@shared/helpers'

import type { ISelectOption } from '@shared/ui/components/input'

import type { IClassName } from '@shared/interface'

import type { ReactNode } from 'react'

const TodosFilter = ({ className }: IClassName): ReactNode => {
  const options: ISelectOption<ESearchParamsValues>[] = [
    {
      value: ESearchParamsValues.ALL,
      label: 'Все'
    },
    {
      value: ESearchParamsValues.COMPLETED,
      label: 'Выполненные'
    },
    {
      value: ESearchParamsValues.NOT_COMPLETED,
      label: 'Не выполненные'
    },
    {
      value: ESearchParamsValues.DISABLED,
      label: 'Заблокированные'
    },
  ]

  const filterProps = useSearchParamsSelectPresenter({
    options,
    searchParamKey: ESearchParamsKeys.FILTER_BY,
    defaultValue: ESearchParamsValues.ALL,
  })

  return (
    <div className="paper flex gap-2 items-center !py-2">
      <p className="text-text-primary">Фильтр:</p>

      <Select { ...filterProps } className={ makeClassname('text-text-primary text-[14px] text-nowrap', className) } />
    </div>
  )
}

export default TodosFilter
