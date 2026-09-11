import Logo from "../assets/logo-text.png";

const Footer = () => {
    return (
        <div className="container mx-auto border mt-20 bg-white  border-slate-200/80 rounded-3xl p-6 shadow-xs">

            <div className=" grid grid-cols-1 justify-center items-center lg:grid-cols-5 gap-5 p-5">

                <div className="col-span-2 md:w-100%">
                    <img src={Logo} alt="" />
                    <p className="mt-5 text-slate-400 text-[16px] font-normal ">Curated tools Technologies and redources for development building modern software</p>
                    <div className="mt-5">
                        <a className="ml-2 text-[18px] " href="">GitHub</a>
                        <a className="ml-2 text-[18px] " href="">Twiter</a>
                        <a className="ml-2 text-[18px]" href="">Linkdin</a>
                    </div>
                </div>
                <div className="col-span-1 hidden md:block">
                    <h4>PRODUCT</h4>
                    <ul>
                        <li className="text-slate-400 text-[16px] font-normal"><a href="">Home</a></li>
                        <li className="text-slate-400 text-[16px] font-normal"><a href="">Technologies</a></li>
                        <li className="text-slate-400 text-[16px] font-normal"><a href="">Projects</a></li>
                    </ul>
                </div>
                <div className="col-span-1 hidden md:block ">
                    <h4>COMPANY</h4>
                    <ul>
                        <li className="text-slate-400 text-[16px] font-normal"><a href="">About</a></li>
                        <li className="text-slate-400 text-[16px] font-normal"><a href="">Contact</a></li>
                        <li className="text-slate-400 text-[16px] font-normal"><a href="">Careers</a></li>
                        
                    </ul>
                </div>
                <div className="col-span-1 hidden md:block ">
                    <h4>LEGAL</h4>
                    <ul>
                        <li className="text-slate-400 text-[16px] font-normal"><a href="">Privacy</a></li>
                        <li className="text-slate-400 text-[16px] font-normal"><a href="">Terms of Service</a></li>

                    </ul>

                </div>
            </div>



            <div className="flex justify-between bg-blue-50  border-slate-200/80 rounded-3xl p-6 shadow-xs">
                <div>
                    <p>@2026 Dev Stack All rights reserved</p>
                </div>
                <div className=" flex gap-4">
                    <span className="">Privcy</span>
                    <span>Terms</span>
                </div>
            </div>

        </div>
    );
};

export default Footer;