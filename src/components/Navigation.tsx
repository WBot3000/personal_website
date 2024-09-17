"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LinkInfo } from '@/definitions/types';


const LINK_DATA: LinkInfo[] = [
    {
        name: "Home",
        href: "/"
    },
    {
        name: "Interests",
        href: "/interests"
    },
    {
        name: "Projects",
        href: "/projects"
    },
    {
        name: "Cats",
        href: "/cats"
    },
    {
        name: "Links",
        href: "/links"
    }
]

export default function Navigation() {
    return <nav className = "flex w-full md:flex-row flex-col">
        {LINK_DATA.map(link => {
            return <NavigationBox key={link.name} name={link.name} href={link.href}/>
        })}
    </nav>
}

function NavigationBox({name, href}: {name: string, href: string}) {
    return <Link href={href} className="transition-all text-xl hover:text-2xl p-8 text-center flex-auto bg-yellow-600 border-x-4 border-b-4 border-yellow-700">
        {name}
    </Link>
}