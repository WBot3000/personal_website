'use client';

import { useState } from "react";
import Image from "next/image";
import { CatData } from "@/definitions/types";
import Statistics from "./Statistics";

export default function CatInfo({ catInfo }: {catInfo: CatData}) {
    const [pictureIdx, setPictureIdx] = useState(0);

    return <section className="flex flex-col p-8 justify-center">
        <h2 className="text-4xl">{catInfo.name}</h2>
        <Image src={catInfo.pictures[pictureIdx ?? 0]} alt={`Picture of ${catInfo.name}.`} className="h-auto max-w-2xl mx-auto"/>
        <Statistics statistics={[
                {label: "Nickname", value: catInfo.nickname},
                {label: "Friendliness", value: catInfo.friendliness},
                {label: "Energy", value: catInfo.energy},
                {label: "Stomach", value: catInfo.stomach}
            ]}
        />
        <h3 className="text-2xl mt-4">Pictures</h3>
        <div className="flex flex-row border-4 border-black">
            {catInfo.pictures.map((val, idx) => {
                return <Image key={val.toString()} 
                            src={val} alt={`Picture number ${idx+1} of ${catInfo.name}.`}
                            className="h-auto max-w-sm p-2 hover:p-1"
                            onClick={() => {setPictureIdx(idx)}}/>
            })}
        </div>
    </section>
}