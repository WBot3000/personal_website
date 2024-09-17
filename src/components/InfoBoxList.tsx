import Image from "next/image";
import { InfoBoxData } from "@/definitions/types";
//TODO: Install clsx instead of using dollar-signs

import DEFAULT_PICTURE from "#/WIP.png";
import Statistics from "./Statistics";


export default function InfoBoxList({ infoList }: 
    {infoList: InfoBoxData[] }) {
        return <>
            {infoList.map((value) => <InfoBox key={value.name} info={value}/>)}
        </>
}


function InfoBox({ info }: 
    {info: InfoBoxData}) {

    return <section className="p-4 flex lg:flex-row flex-col w-full">
        <div className="lg:basis-1/3">
            <Image src={info.pictureSrc ?? DEFAULT_PICTURE}
                //If alt text isn't present for picture, then either:
                // 1) picture defaults, so it's WIP, or 
                // 2) there is a picture, alt text is just missing, which is just an implementation error
                alt={info.pictureAlt ?? (!info.pictureSrc ? "No picture yet. Work in progress" : "No alt text where there should be. Please inform the owner of this website")}
                
            />
        </div>
        <div className="lg:basis-2/3 border-2 border-slate-950">
            <h2 className="bg-gradient-to-b from-slate-200 to-stone-300 border-b-2 border-slate-950 text-2xl p-2">{info.name}</h2>
            {info.stats ? <Statistics statistics={info.stats}/> : null}
            <p className="text-2xl p-2">{info.description}</p>
        </div>
    </section>
}