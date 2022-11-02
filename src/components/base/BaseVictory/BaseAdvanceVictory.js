import React from 'react'
import VictoryStyle from './BaseVictory.module.scss';
import { VictoryChart, VictoryArea, VictoryLabel, VictoryLine, VictoryAxis } from 'victory';



const BaseAdvanceVictory = () => {

    const dataArea = [
        { x: 0, y: 4, y0: 0 },
        { x: 20, y: 4, y0: 1 },
        { x: 30, y: 8, y0: 1 },
        { x: 40, y: 4, y0: 2 },
        { x: 70, y: 6, y0: 2 },
        { x: 100, y: 8, y0: 0 }
    ]

    const dataArea2 = [
        { x: 0, y: 2, y0: 0 },
        { x: 35, y: 2, y0: 0 },
        { x: 45, y: 4, y0: 0 },
        { x: 59, y: 4, y0: 0 },
        { x: 69, y: 1, y0: 0 },
        { x: 100, y: 5, y0: 0 }
    ]

    const dataLine = [
        { x: 0, y: 2 },
        { x: 30, y: 3 },
        { x: 50, y: 5 },
        { x: 80, y: 4 },
        { x: 100, y: 6 }
    ]



    return (
        <div className={VictoryStyle.wrapper}>
            <p>Victory Advance 1</p>

            <VictoryChart
                height={200}
                domainPadding={20}
                style={{
                    parent: {
                        border: '5px solid black'
                    },
                    background: {
                        fill: 'pink'
                    },
                    labels: {
                        fill: 'red', fontSize: '1px'
                    }

                }}
                domain={{ x: [0, 110], y: [0, 12] }}
            >
                <VictoryAxis
                    tickValues={[10, 30, 50, 80]}
                    tickFormat={['14-20 feb 2020', '14-20 mar 2020', '14-20 apr 2020', '14-20 mag 2020']}
                />
                <VictoryAxis
                    dependentAxis
                    tickFormat={(x) => (`$${x / 1000}k`)}
                />
                <VictoryArea
                    interpolation="natural"
                    style={{ data: { fill: '#ea3a31' }, labels: { fill: 'orange', fontSize: '12px', fontWeight: 600 } }}
                    data={dataArea}
                    labels={({ data, index }) => index == data.length - 1 ? 'last label' : index}
                    labelComponent={<VictoryLabel dx={0} dy={-5} />}
                />

                <VictoryArea
                    interpolation="natural"
                    style={{
                        data:
                            { fill: 'blue' }, labels: { fill: 'black', fontSize: '12px', fontWeight: 600 }
                    }}
                    data={dataArea2}
                    labels={({ datum }) => datum.y}
                    labelComponent={<VictoryLabel dx={0} dy={-5} />}
                />
                <VictoryLine
                    data={dataLine}
                    labels={({ datum }) => datum.y}
                />
            </VictoryChart>

        </div>
    )
}

export default BaseAdvanceVictory