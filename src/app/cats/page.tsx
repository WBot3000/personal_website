import type { Metadata } from "next"
import PageTitle from "@/components/PageTitle"
import PageDescriptionBox from "@/components/PageDescriptionBox"
import { CatData } from "@/definitions/types";

import Mama1 from "#/cats/mama_1_fixed.png";
import Mama2 from "#/cats/mama_1_fixed.png";
import Mama3 from "#/cats/mama_1_fixed.png";
import Mama4 from "#/cats/mama_1_fixed.png";

import Tiggy1 from "#/cats/tiggy_1_fixed.png";
import Tiggy2 from "#/cats/tiggy_1_fixed.png";
import Tiggy3 from "#/cats/tiggy_1_fixed.png";
import Tiggy4 from "#/cats/tiggy_1_fixed.png";

import Delilah1 from "#/cats/delilah_1_fixed.png";
import Delilah2 from "#/cats/delilah_1_fixed.png";
import Delilah3 from "#/cats/delilah_1_fixed.png";
import Delilah4 from "#/cats/delilah_1_fixed.png";

import Mango1 from "#/cats/mango_1_fixed.png";
import Mango2 from "#/cats/mango_2_fixed.png";
import Mango3 from "#/cats/mango_1_fixed.png";
import Mango4 from "#/cats/mango_2_fixed.png";
import CatInfo from "@/components/CatInfo";


export const metadata: Metadata = {
    title: "Cats",
    description: "A page for the awesome cats of WBot3000",
};

const MAMA_DATA: CatData = {
    name: "Mama",
    pictures: [Mama1, Mama2, Mama3, Mama4],
    nickname: "The Queen Diva",
    friendliness: 7,
    energy: 5,
    stomach: 5
}

const TIGGY_DATA: CatData = {
    name: "Tiggy",
    pictures: [Tiggy1, Tiggy2, Tiggy3, Tiggy4],
    nickname: "Chonkerella",
    friendliness: 3,
    energy: 1,
    stomach: 10
}

const DELILAH_DATA: CatData = {
    name: "Delilah",
    pictures: [Delilah1, Delilah2, Delilah3, Delilah4],
    nickname: "Baby Deedee",
    friendliness: 10,
    energy: 7,
    stomach: 1
}

const MANGO_DATA: CatData = {
    name: "Mango",
    pictures: [Mango1, Mango2, Mango3, Mango4],
    nickname: "Count Catcula",
    friendliness: 7,
    energy: 10,
    stomach: 9
}

export default function CatsPage() {
    return <>
        <PageTitle>Cats Page</PageTitle>
        <PageDescriptionBox>Here are all of my cats. They are all very cute and funny in their own ways.</PageDescriptionBox>
        <CatInfo catInfo={MAMA_DATA}/>
        <CatInfo catInfo={TIGGY_DATA}/>
        <CatInfo catInfo={DELILAH_DATA}/>
        <CatInfo catInfo={MANGO_DATA}/>
    </>
}