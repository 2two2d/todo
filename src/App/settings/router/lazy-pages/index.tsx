import {LoadComponent} from "@settings/router/load-component";
import {lazy} from "react";

const CreateCategoryAndTodoPage = LoadComponent(lazy(async () => import('@pages/create-category-and-todo')))
const ViewTodosPage = LoadComponent(lazy(async () => import('@pages/view-todos')))

export {
    CreateCategoryAndTodoPage,
    ViewTodosPage
}