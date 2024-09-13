export default function PageTitle({ children }: {children: string}) {
    return <h1 className="md:w-1/2 w-3/4 m-4 p-4 mx-auto rounded-sm border-8 border-gray-500 text-center text-4xl bg-gradient-to-b from-cyan-200 to-sky-300 text-sky-950">
        {children}
    </h1>
}