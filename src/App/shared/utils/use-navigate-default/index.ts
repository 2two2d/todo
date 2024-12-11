import {useEffect} from "react";
import {ERoutes} from "@shared/enum/routes";
import {useLocation, useNavigate} from "react-router";
import {createRoute} from "@shared/helpers/create-route";

const useNavigateDefault = (defaultRoute: ERoutes[]): void => {
    const navigate = useNavigate()
    const { pathname } = useLocation()

    useEffect(() => {
        if (pathname === '' || pathname === '/') {
            navigate(createRoute(defaultRoute))
        }
    }, []);
}

export {
    useNavigateDefault
}