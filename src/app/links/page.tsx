import type { Metadata } from "next";
import PageDescriptionBox from "@/components/PageDescriptionBox"
import PageTitle from "@/components/PageTitle"
import Links from "@/components/Links";

export const metadata: Metadata = {
    title: "Links",
    description: "Links to various profiles/accounts of WBot3000",
  };

export default function LinksPage() {
    return <>
        <PageTitle>Links Page</PageTitle>
        <PageDescriptionBox>Links to various accounts of mine.</PageDescriptionBox>
        <Links/>
    </>
}