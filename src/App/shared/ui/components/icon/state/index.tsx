import { AddIcon, ArrowIcon, CheckIcon, DeleteIcon, EditIcon, FilterIcon, SearchIcon, TickIcon } from '@shared/ui/icons'

const ICONS = {
  edit: EditIcon,
  delete: DeleteIcon,
  filter: FilterIcon,
  search: SearchIcon,
  add: AddIcon,
  tick: TickIcon,
  arrow: ArrowIcon,
  check: CheckIcon,
} as const

export {
  ICONS,
}
