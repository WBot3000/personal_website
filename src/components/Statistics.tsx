import { Statistic } from "@/definitions/types";

export default function Statistics({ statistics }: {statistics: Statistic[]}) {
    return <table>
        <tbody>
            {statistics.map(stat => <StatisticItem key={stat.label + stat.value} label={stat.label} value={stat.value}/>)}
        </tbody>
    </table>
}

function StatisticItem({ label, value }: {label: string, value: string | number}) {
    return <tr>
        <th>{label}</th><td>{value}</td>
    </tr>
}