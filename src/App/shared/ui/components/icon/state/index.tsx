import {
  AddIcon,
  ArrowIcon,
  CheckIcon,
  CrossIcon,
  DeleteIcon,
  DetachIcon,
  EditIcon,
  FilterIcon,
  PadlockCloseIcon,
  PadlockOpenIcon,
  SearchIcon,
  TickIcon
} from '@shared/ui/icons'

const ICONS = {
  edit: EditIcon,
  delete: DeleteIcon,
  filter: FilterIcon,
  search: SearchIcon,
  add: AddIcon,
  tick: TickIcon,
  arrow: ArrowIcon,
  check: CheckIcon,
  cross: CrossIcon,
  detach: DetachIcon,
  'padlock-open': PadlockOpenIcon,
  'padlock-close': PadlockCloseIcon,
} as const

export {
  ICONS,
}
