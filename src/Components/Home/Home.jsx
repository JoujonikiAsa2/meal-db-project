import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
// import './home.css'
import Footer from "../Footer/Footer";
const Home = () => {
    return (
        <div>
            <Header></Header>
            <div className="">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;