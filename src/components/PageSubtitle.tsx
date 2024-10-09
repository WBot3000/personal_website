export default function PageSubtitle({ children }: {children: string}) {
    return <h2 className="md:w-1/3 w-3/4 m-4 p-2 mx-auto rounded-sm border-8 border-gray-500 text-center text-2xl bg-gradient-to-b from-cyan-200 to-sky-300 text-sky-950">
        {children}
    </h2>
}