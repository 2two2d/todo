import {ReactElement} from "react";
import {Route, Routes} from "react-router";
import BaseLayout from "../../widgets/layout/base";
import { CreateCategoryAndTodoPage, ViewTodosPage } from "./lazy-pages";
import {PageTitle} from "@shared/enum/page-title";

const Router = (): ReactElement => {
    return (
        <Routes>
            <Route path="todos" element={<BaseLayout/>}>
                <Route index element={<ViewTodosPage title={ PageTitle.todos } />} />

                <Route path="create" element={<CreateCategoryAndTodoPage title={ PageTitle.create_todo } />} />
            </Route>
        </Routes>
    )
}

export default Router