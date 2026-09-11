//import React from 'react';

import { use, useState } from "react";
import type { Itechnology } from "../../Type/Technology";
import TechnologyCard from "./TechnologyCard";
import Techselectedmenu from "./Techselectedmenu";

interface TechnologiesProps {
    technologypromise: Promise<Itechnology[]>


}



const Technologies = ({ technologypromise }: TechnologiesProps) => {
    const technologies = use(technologypromise);

    const [Techselected, setTechselected] = useState<Itechnology[]>([]);




    return (
        <div className=" container mx-auto border mt-10 bg-white  border-slate-200/80 rounded-3xl p-6 shadow-xs">


            <div>
                <h1 className="text-5xl">Explore the <span className="text-red-500">Technologies</span></h1>
                <p>Pick one technology per category to build your ideal stack.</p>
            </div>



            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 w-full mt-10">

                <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-2 rounded-xl ">
                    {technologies.map((technology: Itechnology) => {
                        return (
                            <TechnologyCard
                                technology={technology}
                                key={technology.id}
                                Techselected={Techselected}
                                setTechselected={setTechselected}

                            />
                        );
                    })}
                </div>



                <div className="col-span-1 ">
                    
                    <Techselectedmenu
                        Techselected={Techselected}
                        setTechselected={setTechselected}

                    />
                    

                </div>
            </div>


        </div>
    );
};

export default Technologies;