import { LinkData } from "@/definitions/types";
import Image from "next/image";

import GithubIcon from "#/link_logos/github.svg";
import GitlabIcon from "#/link_logos/gitlab.svg";
import CredlyIcon from "#/link_logos/credly.svg";
import LinkedInIcon from "#/link_logos/linkedin.svg";

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
    },
    {
        label: "Credly",
        link: "https://www.credly.com/users/walker-bove",
        iconSrc: CredlyIcon,
        iconAlt: "Credly Icon"
    },
    {
        label: "LinkedIn®",
        link: "https://www.linkedin.com/in/walker-bove-79a0991b8/",
        iconSrc: LinkedInIcon,
        iconAlt: "LinkedIn Icon"
    }
]

export default function Links() {
    return <section className="lg:w-3/4 w-5/6 mx-auto p-4">
        {LINK_DATA.map(data => {
            return <div key={data.link} className="p-4 rounded-sm border-4 border-gray-500 hover:text-emerald-900 text-2xl bg-gradient-to-b hover:from-lime-200 hover:to-green-400 from-cyan-200 to-sky-300 border-collapse">
                <a href={data.link} key={data.label} className="flex flex-wrap justify-between">
                        <div className="break-all"><h2>{`${data.label}:`}</h2><p>{data.link}</p></div>
                    {data.iconSrc && 
                        <Image className="" src={data.iconSrc} alt={data.iconAlt ?? "No alt provided. Please inform the website's owner."}/>}
                </a>
            </div>
        })}
    </section>
}