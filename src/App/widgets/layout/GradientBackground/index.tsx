import {ReactElement} from "react";
import classname from "./index.module.scss"

const GradientBackground = (): ReactElement => {
    return (
        <div className={ classname['gradient_background'] }/>
    )
}

export default GradientBackground