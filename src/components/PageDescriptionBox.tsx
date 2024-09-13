export default function PageDescriptionBox({ children }: {children: string | null}) {
    return <div className="md:w-3/4 w-full h-60 m-4 p-4 mx-auto rounded-sm border-8 border-gray-500 text-2xl bg-gradient-to-b from-cyan-200 to-sky-300 text-sky-950">
        <p className="m-2">{children}</p>
    </div>
}