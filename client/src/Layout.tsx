// import Tooltips from "./Components/Tooltips"
import Navbar from "./Components/Header/Navbar"
import {Outlet} from "react-router"
import Footer from "./Components/Footer/Content"

function Layout() {
    return (
        <section id="layout">
            <Navbar />
            <section className="p-5">
                <Outlet/>
            </section>
            <Footer/>
            {/*<Tooltips/>*/}
        </section>
    )
}

export default Layout
