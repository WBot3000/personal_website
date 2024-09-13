'use client';

import { useState } from "react";
import Image from "next/image";
import { CatData } from "@/definitions/types";
import Statistics from "./Statistics";

export default function CatInfo({ catInfo }: {catInfo: CatData}) {
    const [pictureIdx, setPictureIdx] = useState(0);

    return <section>
        <h2>{catInfo.name}</h2>
        <Image src={catInfo.pictures[pictureIdx ?? 0]} alt={`Picture of ${catInfo.name}.`}/>
        <Statistics statistics={[
                {label: "Nickname", value: catInfo.nickname},
                {label: "Friendliness", value: catInfo.friendliness},
                {label: "Energy", value: catInfo.energy},
                {label: "Stomach", value: catInfo.stomach}
            ]}
        />
        <h3>Pictures</h3>
        <div className="flex flex-row">
            {catInfo.pictures.map((val, idx) => {
                return <Image key={val.toString()} 
                            src={val} alt={`Picture number ${idx+1} of ${catInfo.name}.`}
                            onClick={() => {setPictureIdx(idx)}}/>
            })}
        </div>
    </section>
}