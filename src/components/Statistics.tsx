import { Statistic } from "@/definitions/types";

export default function Statistics({ statistics }: {statistics: Statistic[]}) {
    return <table className="table-auto border-collapse border border-black">
        <tbody>
            {statistics.map(stat => <StatisticItem key={stat.label + stat.value} label={stat.label} value={stat.value}/>)}
        </tbody>
    </table>
}

function StatisticItem({ label, value }: {label: string, value: string | number}) {
    return <tr>
        <th scope="row" className="border border-black">{label}</th><td className="border border-black">{value}</td>
    </tr>
}