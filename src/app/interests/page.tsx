import type { Metadata } from "next"
import PageDescriptionBox from "@/components/PageDescriptionBox"
import PageTitle from "@/components/PageTitle"
import PageSubtitle from "@/components/PageSubtitle"
import InfoBoxList from "@/components/InfoBoxList"
import { InfoBoxData } from "@/definitions/types"

import WarioPicture from "#/wario.png"
import MegamanPicture from "#/megaman.png"
import DSTPicture from "#/dst.png"
import SunnyPicture from "#/sunny.png"
import FuturamaPicture from "#/futurama.png"


export const metadata: Metadata = {
    title: "Interests",
    description: "A page containing the interests of WBot3000",
  };

const MY_INTERESTS_GAMES: InfoBoxData[] = [
    {
        name: "Wario Land/Ware",
        description: "Out of all the Mario characters, Wario's my personal favorite. So the fact that he got not one, but two series of games was pretty epic.",
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
            label: "Favorite Boss (#1)", value: "Guts Man"
        },
        {
            label: "Favorite Boss (#2)", value: "Elec Man"
        }],
        pictureSrc: MegamanPicture,
        pictureAlt: "Mega Man and Proto Man alongside the Mega Man 10 Robot Masters."
    },
    {
        name: "Don't Starve (Together)",
        description: "I've played this game for over 100 hours, and I'm glad to report that I have yet to starve (in real life anyways, I've starved several times in the game). Has a pretty interesting style.",
        stats: [{
            label: "Favorite Character (#1)", value: "Wolfgang"
        },
        {
            label: "Favorite Character (#2)", value: "WX-78"
        },
        {
            label: "Favorite Season", value: "Winter"
        },
        {
            label: "Favorite Food", value: "Meatballs"
        }],
        pictureSrc: DSTPicture,
        pictureAlt: "Wilson and Willow, two characters from Don't Starve Together."
    }
]

const MY_INTERESTS_TV: InfoBoxData[] = [
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
    },
    {
        name: "Futurama",
        description: "Started watching this show not too long ago. Enjoy the mixture of comedy and sci-fi stuff.",
        stats: [{
            label: "Favorite Character", value: "Bender Bending Rodriguez"
        },
        {
            label: "Favorite Episode (#1)", value: "The Lesser of Two Evils"
        },
        {
            label: "Favorite Episode (#2)", value: "Bender's Big Score"
        }],
        pictureSrc: FuturamaPicture,
        pictureAlt: "Fry, Leela, and Bender in a promotional image."
    }
]

export default function InterestsPage() {
    return <>
        <PageTitle>Interests Page</PageTitle>
        <PageDescriptionBox>Here are some of the TV shows and video games I'm interested in.</PageDescriptionBox>

        <PageSubtitle>Games</PageSubtitle>
        <InfoBoxList infoList={MY_INTERESTS_GAMES}/>

        <PageSubtitle>TV Shows</PageSubtitle>
        <InfoBoxList infoList={MY_INTERESTS_TV}/>
    </>
}