import bannerstack from "../assets/banner-stack.png";
const Banner = () => {
    return (
        <div className=" grid grid-cols-1 lg:grid-cols-2 container mx-auto border mt-10 bg-white  border-slate-200/80 rounded-3xl p-6 shadow-xs">
            <div className="mt-20">
                <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-none mb-6">
                    <span className="text-[#0B132A] block mb-1">
                        Build Your Ideal
                    </span>
                    <span className="bg-linear-to-r from-[#FF512F] via-[#DD2476] to-[#8E2DE2] bg-clip-text text-transparent">
                        Development Stack
                    </span>
                </h1>
                <p className="text-[16px] text-slate-500 text-lg md:text-xl font-normal">Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.</p>
                <div className="flex gap-4 mt-15 mb-10">
                    <button className="bg-linear-to-r from-[#FF512F] to-[#DD2476] text-white font-medium px-6 py-3.5 rounded-xl text-base shadow-sm hover:opacity-95 transition-all cursor-pointer">
                        Explore Technologies
                    </button>

                    <button className="bg-white text-slate-700 font-medium px-6 py-3.5 rounded-xl border border-slate-200 hover:bg-slate-50 transition-all cursor-pointer">
                        Learn More
                    </button>
                </div>
            </div>

            <div>
                <img src={bannerstack} alt="" className="w-200 h-130" />
            </div>
        </div>
    );
};

export default Banner;