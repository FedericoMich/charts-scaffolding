import React from 'react'
import VictoryStyle from '../BaseRecharts/BaseRecharts.module.scss';

import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryLegend, VictoryPie, VictoryArea } from 'victory';


const BaseVictory = () => {

    const data = [
        { quarter: 1, earnings: 13000 },
        { quarter: 2, earnings: 16500 },
        { quarter: 3, earnings: 14250 },
        { quarter: 4, earnings: 19000 }
    ];
    const dataPie = [
        { x: 'Cats', y: 35 },
        { x: 'Dogs', y: 40 },
        { x: 'Birds', y: 55 }
    ]

    const dataArea = [
        { x: 1, y: 2, y0: 0 },
        { x: 2, y: 3, y0: 1 },
        { x: 3, y: 5, y0: 1 },
        { x: 4, y: 4, y0: 2 },
        { x: 5, y: 6, y0: 2 }
    ]

    return (
        <div className={VictoryStyle.wrapper}>

            <div className="chartContainer">
                <p>Victory 1</p>
                <VictoryChart
                    domainPadding={20}
                    theme={VictoryTheme.material}
                    width={400}
                    height={300}
                >
                    <VictoryLegend x={50} y={10}
                        title='Legend'
                        centerTitle
                        orientation='horizontal'
                        gutter={50}
                        style={{ border: { stroke: 'black' }, title: { fontSize: 20 } }}
                        data={[
                            { name: 'One', symbol: { fill: 'tomato', type: 'star' } },
                            { name: 'Two', symbol: { fill: 'orange' } },
                            { name: 'Three', symbol: { fill: 'gold' } }
                        ]}
                    />
                    <VictoryAxis
                        tickValues={[1, 2, 3, 4]}
                        tickFormat={['1', '2', '3', '4']}
                    />
                    <VictoryAxis
                        dependentAxis
                        tickFormat={(x) => (`$${x / 1000}k`)}
                    />
                    <VictoryBar
                        data={data}
                        x='quarter'
                        y='earnings'
                    />
                </VictoryChart>
            </div>

            <div className="chartContainer">
                <p>Victory 2</p>
                <VictoryPie
                    theme={VictoryTheme.material}
                    cornerRadius={({ datum }) => datum.y * 0.5}
                    colorScale={['tomato', 'orange', 'blue']}
                    data={dataPie}
                    height={400}
                    labelPosition={({ index }) => index
                        ? 'centroid'
                        : 'startAngle'}
                />

            </div>

            <div className="chartContainer">
                <p>Victory 3</p>
                <VictoryChart
                    theme={VictoryTheme.material}
                    animate={{
                        duration: 2000,
                        onLoad: { duration: 5000 }
                    }}
                >
                    <VictoryArea
                        style={{ data: { fill: '#c43a31' } }}
                        data={dataArea}
                    />
                </VictoryChart>

            </div>

        </div>
    )
}

export default BaseVictory