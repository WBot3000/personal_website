import type { Metadata } from "next"
import PageDescriptionBox from "@/components/PageDescriptionBox"
import PageTitle from "@/components/PageTitle"
import InfoBoxList from "@/components/InfoBoxList"
import { InfoBoxData } from "@/definitions/types"

import TerminalPetPicture from "#/terminalpet.png";

export const metadata: Metadata = {
    title: "Projects",
    description: "A page containing (usually programming) projects that WBot3000 has worked on or is working on",
};

const MY_PROJECTS: InfoBoxData[] = [
    {
        name: "Terminal Pet",
        description: "This is a C project I wrote. I wanted to create both a fun C project and a terminal project. You can create your own pet, take care of it in the terminal, and play some basic games.",
        pictureSrc: TerminalPetPicture,
        pictureAlt: "An ASCII dog I made for Terminal Pet"
    },
    {
        name: "The SRB2Kart Purgatory Server",
        description: "The Sonic Robo-Blast 2 Kart (SRB2Kart for short) Purgatory Server is a joint effort between myself and a friend of mine. They (being the bigger fan of the game) decide on all of the content, while I (with the Linux server experience/comfort) handle all of the technical aspects. I decided to get a domain for the server (srb2kpurgatory.com), which actually directs you to a little website.",
        pictureSrc: null,
        pictureAlt: "An in-game picture of the server."
    }
]

export default function ProjectsPage() {
    return <>
        <PageTitle>Projects Page</PageTitle>
        <PageDescriptionBox>Here are some projects I'm working/have worked on.</PageDescriptionBox>
        <InfoBoxList infoList={MY_PROJECTS}/>

        <p>If you find these projects interesting, feel free to check out my Github and Gitlab accounts. The links to those are in the Links section. You'll find other projects that I haven't written about here, either because they're simple school assignments or they're still WIPs.</p>
    </>
}