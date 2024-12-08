import {ReactNode} from "react";
import {IPageProps} from "@shared/interface";
import {useSetPageTitle} from "@shared/utils/set-title";

const CreateCategoryAndTodoPage = (props: IPageProps): ReactNode => {
    useSetPageTitle(props.title)

    return (
        <div>
            <p>123</p>
        </div>
    )
}

export default CreateCategoryAndTodoPage