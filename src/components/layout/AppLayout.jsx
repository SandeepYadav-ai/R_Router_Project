import { Outlet, useNavigation } from "react-router"
import { Header } from "./Header"
import { Footer } from "./Footer"
import { Loading } from "./Loading";

export const AppLayout = function() {
    const nagivation = useNavigation();
    console.log(nagivation);

    if(nagivation.state ==="loading") return<Loading />
    
    return(
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}