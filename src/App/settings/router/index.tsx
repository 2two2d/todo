import {ReactElement} from "react";
import {Route, Routes} from "react-router";
import BaseLayout from "../../widgets/layout/base";
import {CreateCategoryAndTodoPage, ViewTodosPage} from "./lazy-pages";
import {PageTitle} from "@shared/enum/page-title";
import {ERoutes} from "@shared/enum/routes"
import {useNavigateDefault} from "@shared/utils/use-navigate-default";

const Router = (): ReactElement => {
    useNavigateDefault([ERoutes.TODOS, ERoutes.LIST])

    return (
        <Routes>
            <Route path={ ERoutes.TODOS } element={<BaseLayout/>}>
                <Route path={ ERoutes.LIST } element={<ViewTodosPage title={ PageTitle.todos } />} />

                <Route path={ ERoutes.CREATE } element={<CreateCategoryAndTodoPage title={ PageTitle.create_todo } />} />
            </Route>
        </Routes>
    )
}

export default Router