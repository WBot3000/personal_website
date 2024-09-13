import type { Metadata } from "next"
import PageDescriptionBox from "@/components/PageDescriptionBox"
import PageTitle from "@/components/PageTitle"
import InfoBoxList from "@/components/InfoBoxList"
import { InfoBoxData } from "@/definitions/types"

import WarioPicture from "#/wario.png"
import MegamanPicture from "#/megaman.png"
import SunnyPicture from "#/sunny.png"

export const metadata: Metadata = {
    title: "Interests",
    description: "A page containing the interests of WBot3000",
  };

const MY_INTERESTS: InfoBoxData[] = [
    {
        name: "Wario Land/Ware",
        description: "Out of all the Mario characters, Wario's my personal favorite. So the fact that he got not one, but two series of games was pretty epic. I'm personally a big fan of Wario Land 3. As for Warioware, I'm a big fan of Gold. A little bit of everything, it's quite nice.",
        pictureSrc: WarioPicture,
        pictureAlt: "A picture of Wario, specifically the box art for Wario Land 4."
    },
    {
        name: "Mega Man",
        description: "Mega Man has been a favorite series of mine since I was a young kid. Mostly the classic series, but I enjoy the X series too. I've always liked Proto Man (hence the picture). I actually made a custom Proto Man costume for Halloween and wore it for like four years. My favorite bosses are Guts Man and Elec Man from the first game.",
        pictureSrc: MegamanPicture,
        pictureAlt: "Mega Man and Proto Man alongside the Mega Man 10 Robot Masters."
    },
    {
        name: "It's Always Sunny In Philadelphia",
        description: "The Gang Appears on a Website. Very funny show. My favorite character here is Frank. Gotta love Danny DeVito.",
        pictureSrc: SunnyPicture,
        pictureAlt: "Dennis, Mac, Charlie, Dee, and Frank all sitting together."
    }
]

export default function InterestsPage() {
    return <>
        <PageTitle>Interests Page</PageTitle>
        <PageDescriptionBox>Here are some of the TV shows and video games I'm interested in.</PageDescriptionBox>
        <InfoBoxList infoList={MY_INTERESTS}/>
    </>
}