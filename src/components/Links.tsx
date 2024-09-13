import { LinkData } from "@/definitions/types";
import Image from "next/image";

import GithubIcon from "#/github.svg";
import GitlabIcon from "#/gitlab.svg";

const LINK_DATA: LinkData[] = [
    {
        label: "Github",
        link: "https://github.com/WBot3000",
        iconSrc: GithubIcon,
        iconAlt: "Github Icon"
    },
    {
        label: "Gitlab",
        link: "https://gitlab.com/WBot3000",
        iconSrc: GitlabIcon,
        iconAlt: "Gitlab Icon"
    }
]

export default function Links() {
    return <section className="lg:w-1/2 mx-auto p-4">
        {LINK_DATA.map(data => {
            return <div key={data.link} className="p-4 rounded-sm border-4 border-gray-500 hover:text-emerald-900 text-2xl bg-gradient-to-b hover:from-lime-200 hover:to-green-400 from-cyan-200 to-sky-300 border-collapse">
                <a href={data.link} key={data.label}>
                        <h2>{`${data.label}:`}</h2><p>{data.link}</p>
                    {data.iconSrc && 
                        <Image className="w-fit h-fit" src={data.iconSrc} alt={data.iconAlt ?? "No alt provided. Please inform the website's owner."}/>}
                </a>
            </div>
        })}
    </section>
}