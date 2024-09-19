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
        stats: [{
            label: "Favorite Character", value: "Wario"
        },
        {
            label: "Favorite Game (Land)", value: "Wario Land 3"
        },
        {
            label: "Favorite Game (Ware)", value: "Warioware Gold"
        }],
        pictureSrc: WarioPicture,
        pictureAlt: "A picture of Wario, specifically the box art for Wario Land 4."
    },
    {
        name: "Mega Man",
        description: "Mega Man has been a favorite series of mine since I was a young kid. Mostly the classic series, but I enjoy the X series too. I actually made a custom Proto Man costume for Halloween and wore it for like four years. But I still don't know whether it's technically Megaman or Mega Man.",
        stats: [{
            label: "Favorite Character", value: "Proto Man"
        },
        {
            label: "Favorite Game", value: "Mega Man 5"
        },
        {
            label: "Favorite Bosses", value: "Guts Man and Elec Man"
        }],
        pictureSrc: MegamanPicture,
        pictureAlt: "Mega Man and Proto Man alongside the Mega Man 10 Robot Masters."
    },
    {
        name: "It's Always Sunny In Philadelphia",
        description: "The Gang Appears on a Website. Very funny show. Gotta love Danny DeVito. There's a bunch of good episodes, but here's two of them.",
        stats: [{
            label: "Favorite Character", value: "Frank Reynolds"
        },
        {
            label: "Favorite Episode (#1)", value: "The Gang Solves the Gas Crisis"
        },
        {
            label: "Favorite Episode (#2)", value: "The Gang Tries Desperately to Win an Award"
        }],
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