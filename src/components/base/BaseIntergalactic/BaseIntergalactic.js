import React from 'react'
import IntergalacticStyle from '../BaseRecharts/BaseRecharts.module.scss';
import { Plot, Line, XAxis, YAxis, HoverLine, Tooltip, minMax } from '@semcore/d3-chart';
import { scaleLinear } from 'd3-scale';
import { Flex } from '@semcore/flex-box';
import { Text } from '@semcore/typography';





const BaseIntergalactic = () => {


    const data = Array(20)
        .fill({})
        .map((d, i) => ({
            x: i,
            y: Math.random() * 10,
        }));

    const MARGIN = 40;
    const width = 500;
    const height = 300;
    const xScale = scaleLinear()
        .range([MARGIN, width - MARGIN])
        .domain(minMax(data, 'x'));
    const yScale = scaleLinear()
        .range([height - MARGIN, MARGIN])
        .domain([0, 10]);


    return (
        <div className={IntergalacticStyle.wrapper}>
            <div className="chartContainer">
                <p>Intergalactic 1</p>
                <Plot data={data} scale={[xScale, yScale]} width={width} height={height}>
                    <YAxis>
                        <YAxis.Ticks />
                        <YAxis.Grid />
                    </YAxis>
                    <XAxis>
                        <XAxis.Ticks />
                    </XAxis>
                    <Tooltip tag={HoverLine} x="x" wMin={100}>
                        {({ xIndex }) => {
                            return {
                                children: (
                                    <>
                                        <Tooltip.Title>{data[xIndex].x}</Tooltip.Title>
                                        <Flex justifyContent="space-between">
                                            <Tooltip.Dot mr={4}>Line</Tooltip.Dot>
                                            <Text bold>{data[xIndex].y}</Text>
                                        </Flex>
                                    </>
                                ),
                            };
                        }}
                    </Tooltip>
                    <Line x="x" y="y">
                        <Line.Dots display />
                    </Line>
                </Plot>
            </div>
        </div>
    )
}

export default BaseIntergalactic