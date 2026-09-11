import type { Dispatch, SetStateAction } from "react";
import type { Itechnology } from "../../Type/Technology";
import { TbTrash } from "react-icons/tb";

interface SelectedProps {
  Techselected: Itechnology[];
  setTechselected: Dispatch<SetStateAction<Itechnology[]>>;
}

const Techselectedmenu = ({ Techselected, setTechselected }: SelectedProps) => {

  const handleRemoveTech = (tech: Itechnology) => {
    const restTechnology = Techselected.filter((selectedTech) => selectedTech.id !== tech.id);
    setTechselected(restTechnology);
  };

  const handleRemoveAll = () => {
    setTechselected([]);
  };



  
  return (
    <div className="bg-white border border-slate-200/80 rounded-3xl p-6 w-full shadow-xs flex flex-col justify-between sm:grid-cols-1">
      <div>
        {/* Header Section */}
        <h2 className="text-2xl font-bold text-slate-900 mb-1">Your Stack</h2>
        <p className="text-slate-400 text-sm mb-6 font-normal">
          {Techselected.length > 0 
            ? `${Techselected.length} Technology Selected` 
            : "No technologies selected yet."}
        </p>

        {/* Content Section */}
        {Techselected.length === 0 ? (
          /* Empty State UI */
          <div className="border-2 border-dashed border-slate-200 rounded-2xl py-12 px-4 flex items-center justify-center text-center">
            <span className="text-slate-400 text-base font-normal">
              Your stack is empty.
            </span>
          </div>
        ) : (
          /* Selected Items List */
          <div className="space-y-3 mb-6">
            {Techselected.map((tech: Itechnology) => (
              <div
                key={tech.id}
                className="flex items-center justify-between border border-slate-200/80 rounded-2xl p-3.5 bg-white hover:border-slate-300 transition-colors"
              >
                <div className="flex items-center gap-3.5">
                  {/* Icon */}
                  <div className="w-8 h-8 flex items-center justify-center shrink-0">
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Name & Category */}
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm leading-tight">
                      {tech.name}
                    </h4>
                    <p className="text-xs text-slate-400 capitalize mt-0.5">
                      {tech.category}
                    </p>
                  </div>
                </div>

                {/* Trash Button */}
                <button
                  onClick={() => handleRemoveTech(tech)}
                  className="text-slate-400 hover:text-red-500 p-1 rounded-lg transition-colors cursor-pointer"
                  aria-label="Remove item"
                >
                  <TbTrash className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Remove All Button */}
      {Techselected.length > 0 && (
        <button
          onClick={handleRemoveAll}
          className="w-full border border-red-200 text-red-500 hover:bg-red-50 hover:border-red-300 font-semibold py-3 rounded-2xl text-sm transition-all duration-200 cursor-pointer active:scale-[0.99]"
        >
          Remove All
        </button>
      )}
    </div>
  );
};

export default Techselectedmenu;