import {useState} from "react";
import {RiCloseLine, RiMenuLine} from "@remixicon/react";
import {navItems} from "../constants/data.js";

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="w-full py-5">
            <div className="container flex items-center justify-between border-b border-b-white-95 pb-5">
                {/*  Logo  */}
                <a href="#">
                    <img
                        src="/images/logo.png "
                        alt="logo"
                        width={170}
                        height={50}
                    />
                </a>

                {/*  Mobile Menu  */}
                <nav className={`navbar ${isOpen ? "active" : ""}`}>
                    <button className="absolute top-8 right-8" onClick={handleClick}>
                        <RiCloseLine size={30} />
                    </button>

                    <ul className="space-y-5 text-center">
                        {navItems.map((item) => (
                            <li key={item.id}>
                                <a
                                    className="text-lg font-medium hover:text-orange-50 transition-colors "
                                    href={item.href}
                                >{item.label}</a>
                            </li>
                        ))}
                    </ul>

                    <button className="primary-btn mt-12 max-w-40 w-full">Login</button>
                </nav>

                <button className="lg:hidden" onClick={handleClick}>
                    <RiMenuLine />
                </button>

                {/*  Lg Menu  */}
                <div className="max-lg:hidden flex items-center gap-10">
                    <ul className="flex gap-10">
                        {navItems.map((item) => (
                            <li key={item.id}>
                                <a
                                    className="text-lg font-medium hover:text-orange-50 transition-colors"
                                    href={item.href}
                                >{item.label}</a>
                            </li>
                        ))}
                    </ul>

                    <button className="max-lg:hidden primary-btn">Login</button>
                </div>
            </div>
        </header>
    )
}
export default Header
