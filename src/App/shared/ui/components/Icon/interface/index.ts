import { ICONS } from "../state";

type IIconName = keyof typeof ICONS

interface IIcon {
    source: IIconName
    size?: number
    color?: string
    className?: string
}

type IIconProps = Pick<IIcon, 'color' | 'className'> & {
    width: number
    height: number
}

export type {
    IIconName,
    IIconProps,
    IIcon
}