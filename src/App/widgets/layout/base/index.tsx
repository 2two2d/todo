import {ReactElement} from "react";
import {Outlet} from "react-router";
import GradientBackground from "../GradientBackground";

const BaseLayout = (): ReactElement => {
    return (
        <div className='w-[960px] pt-[140px] relative flex flex-col items-center gap-10'>
            <GradientBackground/>

            <Outlet/>
        </div>
    )
}

export default BaseLayout