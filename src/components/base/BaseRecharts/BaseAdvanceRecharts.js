import React from 'react'
import { Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Area, ComposedChart, Bar, LabelList, BarChart, Label, AreaChart } from 'recharts';
import RechartsStyle from '../BaseRecharts/BaseRecharts.module.scss';


const BaseAdvanceRecharts = () => {

    const data = [
        { name: 'A', uv: 400, pv: 2400, amt: 2400 },
        { name: 'B', uv: 200, pv: 2600, amt: 600 },
        { name: 'C', uv: 100, pv: 2400, amt: 2400 },
        { name: 'D', uv: 800, pv: 2400, amt: 2400 },
        { name: 'E', uv: 200, pv: 2600, amt: 600 }

    ];
    const data2 = [
        { name: 'A', uv: 500, pv: 400, amt: 400 },
        { name: 'B', uv: 200, pv: 600, amt: 600 },
        { name: 'C', uv: 100, pv: 400, amt: 400 },
        { name: 'D', uv: 800, pv: 400, amt: 200 },
        { name: 'E', uv: 200, pv: 600, amt: 600 }

    ];

    const dataArea = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];

    return (
        <div className={RechartsStyle.wrapper}>

            <div className="chartContainer">
                <p>Recharts Advance 1</p>
                <BarChart
                    width={420}
                    height={350}
                    data={data}
                    margin={{ top: 15, right: 30, left: 20, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name">
                        <Label value="Pages of my website" offset={0} position="insideBottom" />
                    </XAxis>
                    <YAxis label={{ value: 'pv of page', angle: -90, position: 'insideLeft', textAnchor: 'middle' }} />
                    <Bar dataKey="pv" fill="#8884d8">
                        <LabelList dataKey="name" position="insideTop" angle="45" />
                    </Bar>
                    <Bar dataKey="uv" fill="#82ca9d">
                        <LabelList dataKey="uv" position="top" />
                    </Bar>
                </BarChart>
            </div>

            <div className="chartContainer">
                <p>Recharts Advance 2</p>
                <AreaChart
                    width={420}
                    height={350}
                    data={dataArea}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" />
                    <Area type="monotone" dataKey="pv" stackId="1" stroke="#ea0042" fill="#ea0042" />
                    <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
                </AreaChart>
            </div>

            <div className="chartContainer">
                <p>Recharts Advance 3</p>
                <ComposedChart
                    width={500}
                    height={400}
                    data={data2}
                    margin={{
                        top: 20,
                        right: 80,
                        bottom: 20,
                        left: 20
                    }}>
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis dataKey="name" label={{ value: 'Pages', angle: -50, position: 'insideBottomRight', offset: 5 }} scale="band" />
                    <YAxis label={{ value: 'Index', angle: -70, position: 'insideLeft' }} />
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" dataKey="amt" fill="#ea0042" stroke="#000" />
                    <Bar dataKey="pv" barSize={20} fill="#413ea0" />
                    <Line type="monotone" dataKey="uv" stroke="#000" />
                </ComposedChart>
            </div>

        </div>
    )
}

export default BaseAdvanceRecharts