import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";

function Layout() {
    return (
        <>
        <Header />
            <main  className="content container">
                <Outlet />
            </main>
        <Footer />
        </>
    )
}

export {  Layout  }