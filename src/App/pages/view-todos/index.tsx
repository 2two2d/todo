import {ReactNode} from "react";
import {IPageProps} from "@shared/interface";
import {useSetPageTitle} from "@shared/utils/set-title";

const ViewTodosPage = (props: IPageProps): ReactNode => {
    useSetPageTitle(props.title)

    return (
        <div>

        </div>
    )
}

export default ViewTodosPage