import { useSelector } from "react-redux";
import { authSelectors } from "redux/AuthSlice/selectors";

export const useAuth = () =>{
    return {
        isLoggedIn:useSelector(authSelectors.getLoggedIn),
        isRefreshing:useSelector(authSelectors.getIsRefreshing),
        user:useSelector(authSelectors.getUser),
        isRegistered: useSelector(authSelectors.getIsRegistered),
    }
}