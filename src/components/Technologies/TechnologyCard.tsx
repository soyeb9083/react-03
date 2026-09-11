import { type Dispatch, type SetStateAction } from 'react';
import type { Itechnology } from '../../Type/Technology';
import { toast } from 'react-toastify';

interface Technologyprops {
    technology: Itechnology;
    Techselected: Itechnology[];
    setTechselected: Dispatch<SetStateAction<Itechnology[]>>;
}

const TechnologyCard = ({ technology, Techselected, setTechselected }: Technologyprops) => {

    const isSelected = Techselected.some(tech => tech.id === technology.id);

    const Handeltechlonogy = () => {
        toast.success(`${technology.name} is added successfully`, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });

        // Selected technology list-এ যোগ করা
        setTechselected([...Techselected, technology]);
    }

    return (
        <div className="card bg-white border border-gray-200/80 rounded-3xl p-6 w-full max-w-sm shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between">
            <div>
                {/* Top Header: Icon & Badge */}
                <div className="flex justify-between items-start mb-5">
                    <div className="w-10 h-10 flex items-center justify-center">
                        <img
                            src={technology.icon}
                            alt={technology.name}
                            className="w-full h-full object-contain"
                        />
                    </div>
                    <span className="badge badge-ghost text-sky-500 bg-sky-50 border-none font-medium text-xs px-3 py-3 rounded-full">
                        {technology.badge}
                    </span>
                </div>

                {/* Title & Description */}
                <h2 className="text-xl font-bold text-slate-900 mb-2">
                    {technology.name}
                </h2>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {technology.description}
                </p>
            </div>

            <div>
                {/* Category, Difficulty & Rating */}
                <div className="flex items-center justify-between text-xs text-slate-500 mb-5">
                    <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-lg font-medium">
                        {technology.category}
                    </span>
                    <span className="font-medium text-slate-500">
                        {technology.difficulty}
                    </span>
                    <div className="flex items-center gap-1 font-bold text-slate-800">
                        <span className="text-amber-400">★</span>
                        <span>{technology.rating.toFixed(1)}</span>
                    </div>
                </div>

                {/* Action Button */}
                <button
                    onClick={()=>Handeltechlonogy()}
                    disabled={isSelected}
                    className="btn btn-block bg-[#090D16] hover:bg-slate-800 text-white font-medium border-none rounded-xl text-sm min-h-0 h-11 transition-all duration-200 disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed"
                >
                    {isSelected ? "Selected" : "Add to Stack"}
                </button>
            </div>
        </div>
    );
};

export default TechnologyCard;