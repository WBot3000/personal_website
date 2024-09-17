import { StaticImageData } from "next/image"

export type LinkInfo = {
    name: string;
    href: string;
}

export type InfoBoxData = {
    name: string,
    description: string,
    stats?: Statistic[],
    pictureSrc?: StaticImageData | null,
    pictureAlt?: string | null
}

export type LinkData = {
    label: string,
    link: string,
    iconSrc?: StaticImageData | null,
    iconAlt?: string | null
} 

export type Statistic = {
    label: string,
    value: string | number 
}

type CatStatRating = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10

export type CatData = {
    name: string,
    pictures: StaticImageData[],
    nickname: string,
    friendliness: CatStatRating,
    energy: CatStatRating,
    stomach: CatStatRating
}