import React from 'react'
import { XAxis, YAxis, CartesianGrid, Tooltip, Area, ResponsiveContainer, AreaChart, Legend } from 'recharts';
import RechartsStyle from '../BaseVictory/BaseVictory.module.scss';

const data = [
    { name: '1-31 gen 2020', area1: 100, area2: 100 },
    { name: '1-31 feb 2020', area1: 200, area2: 170 },
    { name: '1-31 mar 2020', area1: 110, area2: 110 },
    { name: '1-31 apr 2020', area1: 300, area2: 370 },
    { name: '1-31 mag 2020', area1: 340, area2: 100 },
    { name: '1-31 giu 2020', area1: 500, area2: 130 },
    { name: '1-31 lug 2020', area1: 700, area2: 180 },
    { name: '1-31 ago 2020', area1: 500, area2: 220 },
    { name: '1-31 set 2020', area1: 600, area2: 100 },
    { name: '1-31 ott 2020', area1: 200, area2: 160 },
    { name: '1-31 nov 2020', area1: 350, area2: 120 },
    { name: '1-31 div 2020', area1: 100, area2: 110 }
];

const BaseAdvanceFull = () => {


    const CustomizedLabel = {
        position: 'top'
    }


    return (
        <div className={RechartsStyle.wrapper}>
            <p>Recharts Advance 3</p>
            <ResponsiveContainer width={'100%'} height={350}>
                <AreaChart height={50} width={'100%'} data={data}
                    margin={{ top: 10, right: 30, left: 0, bottom: 40 }}>
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis
                        dataKey="name"
                        height={70}
                        y={0}
                        dy={16}
                        textAnchor="end"
                        color="#000"
                        angle='-40'
                    />
                    <YAxis />
                    <CartesianGrid strokeDasharray="1 5" />
                    <Tooltip />
                    <Legend verticalAlign="top" height={36} />
                    <Area type="monotone" dataKey="area1" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" label={CustomizedLabel} />
                    <Area type="monotone" dataKey="area2" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" label={CustomizedLabel} />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}

export default BaseAdvanceFull