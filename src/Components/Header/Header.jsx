import { NavLink } from "react-router-dom";
const Header = () => {
    return (
        <div className="flex flex-wrap gap-4 justify-between px-36 shadow-lg py-10 bg-[#9da5c9]">
            <div className=" text-2xl  font-semibold text-[#233894]">
                <span className="text-[#772b7c]">MEAL</span> DB
            </div>
            <nav className="flex flex-wrap gap-4 text-white font-medium text-xl items-center">
                <div className="join">
                    <div>
                        <div>
                            <input className="input input-bordered join-item" placeholder="Search" />
                        </div>
                    </div>
                    <div className="indicator">
                        <button className="btn join-item">Search</button>
                    </div>
                </div>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/blog">Meal Blog</NavLink>
            </nav>
        </div>
    );
};

export default Header;