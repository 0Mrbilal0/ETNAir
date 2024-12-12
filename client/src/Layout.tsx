// import Tooltips from "./Components/Tooltips"
import Navbar from "./Components/Header/Navbar"
import {Outlet} from "react-router"
import Footer from "./Components/Footer/Content"

function Layout() {
    return (
        <section id="layout">
            <Navbar />
            <section className="mx-28 mt-14 border border-amber-500">
                <Outlet/>
            </section>
            <Footer/>
            {/*<Tooltips/>*/}
        </section>
    )
}

export default Layout
