import React from 'react'
import RechartsStyle from '../BaseRecharts/BaseRecharts.module.scss';
import { Chart } from 'react-google-charts';

export const data = [
    ['Year', 'Sales', 'Expenses', 'Profit'],
    ['2014', 1000, 400, 200],
    ['2015', 1170, 460, 250],
    ['2016', 660, 1120, 300],
    ['2017', 1030, 540, 350],
];

export const options = {
    chart: {
        title: 'Company Performance',
        subtitle: 'Sales, Expenses, and Profit: 2014-2017',
    },
};

export const optionsPie = {
    title: 'My Daily Activities',
    is3D: true,
};

export const dataCombo = [
    [
        'Month',
        'Bolivia',
        'Ecuador',
        'Madagascar',
        'Papua New Guinea',
        'Rwanda',
        'Average',
    ],
    ['2004/05', 165, 938, 522, 998, 450, 614.6],
    ['2005/06', 135, 1120, 599, 1268, 288, 682],
    ['2006/07', 157, 1167, 587, 807, 397, 623],
    ['2007/08', 139, 1110, 615, 968, 215, 609.4],
    ['2008/09', 136, 691, 629, 1026, 366, 569.6],
];

export const optionsCombo = {
    title: 'Monthly Coffee Production by Country',
    vAxis: { title: 'Cups' },
    hAxis: { title: 'Month' },
    seriesType: 'bars',
    series: { 5: { type: 'line' } },
};

const BaseChartjs = () => {


    return (
        <div className={RechartsStyle.wrapper}>

            <div className="chartContainer">
                <p>React Google Charts 1</p>
                <Chart
                    chartType="Bar"
                    width='100%'
                    height='400px'
                    data={data}
                    options={options}
                />
            </div>

            <div className="chartContainer">
                <p>React Google Charts 2</p>
                <Chart
                    chartType="PieChart"
                    data={data}
                    options={optionsPie}
                    width={'100%'}
                    height={'400px'}
                />
            </div>

            <div className="chartContainer">
                <p>React Google Charts 3</p>
                <Chart
                    chartType="ComboChart"
                    width="100%"
                    height="400px"
                    data={dataCombo}
                    options={optionsCombo}
                />
            </div>

        </div>
    )
}
export default BaseChartjs