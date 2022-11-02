import React from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, BarChart, Bar, Tooltip, Legend, PieChart, Pie } from 'recharts';
import RechartsStyle from '../BaseRecharts/BaseRecharts.module.scss';


const BaseRecharts = () => {

    const data = [
        { name: 'A', uv: 400, pv: 2400, amt: 2400 },
        { name: 'B', uv: 200, pv: 2600, amt: 600 },
        { name: 'C', uv: 100, pv: 2400, amt: 2400 },
        { name: 'D', uv: 800, pv: 2400, amt: 2400 },
        { name: 'E', uv: 200, pv: 2600, amt: 600 }

    ];



    return (
        <div className={RechartsStyle.wrapper}>

            <div className="chartContainer">
                <p>Recharts 1</p>
                <LineChart width={380} height={300} data={data}>
                    <Line type="monotone" dataKey="uv" stroke="#ea0042" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="name" />
                    <YAxis />
                </LineChart>
            </div>

            <div className="chartContainer">
                <p>Recharts 2</p>
                <PieChart width={400} height={300}>
                    <Pie data={data} dataKey="uv" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                    <Pie data={data} dataKey="uv" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
                </PieChart>
            </div>

            <div className="chartContainer">
                <p>Recharts 3</p>
                <BarChart width={400} height={350} data={data}>
                    <XAxis dataKey="name" stroke="#ea0042" />
                    <YAxis />
                    <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#000' }} />
                    <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <Bar dataKey="uv" fill="#ea0042" barSize={30} />
                </BarChart>

            </div>

        </div>
    )
}

export default BaseRecharts