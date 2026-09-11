import { useState } from "react";
import Logo from "../assets/logo-text.png";

const NavBar = () => {
    const [buttonType, setButtonType] = useState<"signIn" | "signUp">("signIn");
    const handleUpdateBtnType = (type: "signIn" | "signUp") => {

        setButtonType(type);
    };
    return (
        <div className='flex justify-between container mx-auto bg-white border-slate-200/80 rounded-4xl p-4 shadow-xs sticky top-0 z-50'>
            <div className=" flex items-center md:hidden">
                <button >
                    ☰
                </button>
            </div>

            <div>
                <img src={Logo} alt="seu" className=" flex items-center" />
            </div>




            <div className='items-center gap-4 text-[20px] hidden md:block'>
                <ul className="flex gap-4">
                    <li className="text-slate-700 font-medium hover:text-slate-900 transition-colors cursor-pointer">Home</li>
                    <li className="text-slate-700 font-medium hover:text-slate-900 transition-colors cursor-pointer">Technologies</li>
                    <li className="text-slate-700 font-medium hover:text-slate-900 transition-colors cursor-pointer">Projects</li>
                    <li className="text-slate-700 font-medium hover:text-slate-900 transition-colors cursor-pointer">About</li>
                    <li className="text-slate-700 font-medium hover:text-slate-900 transition-colors cursor-pointer">Contact</li>
                </ul>
            </div>

            <div className="flex items-center ">
                {/* Sign In Button */}
                <button
                    onClick={() => handleUpdateBtnType("signIn")}
                    className={`btn border-none shadow-none min-h-0 h-auto py-2.5 cursor-pointer transition-all duration-300 ease-in-out ${buttonType === "signIn"
                        ? "bg-[#E6007A] hover:bg-[#d0006e] text-white px-4 rounded-full"
                        : "bg-transparent hover:bg-transparent text-slate-700 hover:text-slate-900 px-3"
                        }`}
                >
                    Sign In
                </button>

                {/* Sign Up Button */}
                <button
                    onClick={() => handleUpdateBtnType("signUp")}
                    className={`btn border-none shadow-none min-h-0 h-auto py-2.5 cursor-pointer transition-all duration-300 ease-in-out ${buttonType === "signUp"
                        ? "bg-[#E6007A] hover:bg-[#d0006e] text-white px-4 rounded-full"
                        : "bg-transparent hover:bg-transparent text-slate-700 hover:text-slate-900 px-2"
                        }`}
                >
                    Sign Up
                </button>
            </div>
        </div>
    );
};

export default NavBar;