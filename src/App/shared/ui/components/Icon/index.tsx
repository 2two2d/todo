import {ICONS} from "@shared/ui/components/Icon/state";
import { IIcon } from "./interface";

const DEFAULT_SIZE_PX = 16

const Icon = ({ source, ...props }: IIcon) => {
    const IconComponent = ICONS[source]

    const size =  DEFAULT_SIZE_PX * (props.size ?? 1)

    return (
        <IconComponent width={ size } height={ size } {...props}/>
    )
}

export default  Icon