import React, { useState } from 'react';
import IntergalacticStyle from './BaseIntergalactic.module.scss';
import { Plot, XAxis, YAxis, Area, HoverLine, Tooltip, minMax } from '@semcore/d3-chart';
import { Flex, Box } from '@semcore/flex-box';
import { Text } from '@semcore/typography';
import { scaleLinear } from 'd3-scale';
import { curveCardinal } from 'd3-shape';
import { ResponsiveContainer } from '@semcore/ui/d3-chart';
import Checkbox from '@semcore/checkbox';





const BaseAdvanceIntergalactic = () => {

    const data = [
        { x: 0, y: 0, z: 0 },
        { x: 1, y: 2, z: 0 },
        { x: 2, y: 5, z: 1 },
        { x: 3, y: 2, z: 2 },
        { x: 4, y: 4, z: 3 },
        { x: 5, y: 7, z: 1 },
        { x: 6, y: 5, z: 2 },
        { x: 7, y: 3, z: 0.5 },
        { x: 8, y: 1, z: 0.4 },
        { x: 9, y: 2, z: 0.1 },
        { x: 10, y: 3, z: 0 }
    ]


    const [dataLegend, updateDataLegend] = useState(
        Object.keys(data[0])
            .filter((name) => name !== 'x')
            .map((name) => ({ name, checked: true, opacity: false })),
    );


    const handleChange = (name) => (checked) => {
        const newDataLegend = dataLegend.map((item) => {
            if (item.name === name) {
                return { ...item, checked };
            }
            return { ...item, opacity: checked };
        });
        updateDataLegend(newDataLegend);
    };

    const handleMouseEnter = (name) => () => {
        const activeItem = dataLegend.find((item) => item.name === name);
        if (!activeItem.checked) return;
        updateDataLegend((data) =>
            data.map((item) => {
                if (item.name !== name) return { ...item, opacity: true };
                return item;
            }),
        );
    };
    const handleMouseLeave = () => {
        updateDataLegend(dataLegend.map((item) => ({ ...item, opacity: false })));
    };

    const MAP_THEME = {
        y: 'red',
        y2: 'green',
    };



    const MARGIN = 40;
    const width = 1100;
    const height = 400;


    const xScale = scaleLinear()
        .range([MARGIN, width - MARGIN])
        .domain(minMax(data, 'x'));

    const yScale = scaleLinear()
        .range([height - MARGIN, MARGIN])
        .domain(minMax(data, 'y'));


    return (
        <div className={IntergalacticStyle.wrapper}>
            <p>Intergalactic Advance 1</p>
            <ResponsiveContainer aspect={10}>
                <Box>
                    {dataLegend.map((item) => {
                        return (
                            <Checkbox
                                key={item.name}
                                onMouseEnter={handleMouseEnter(item.name)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <Checkbox.Value
                                    theme={MAP_THEME[item.name]}
                                    checked={item.checked}
                                    onChange={handleChange(item.name)}
                                />
                                <Checkbox.Text pr={3}>{item.name}</Checkbox.Text>
                            </Checkbox>
                        );
                    })}
                </Box>
                <Plot data={data} scale={[xScale, yScale]} width={width} height={height}>

                    <YAxis>
                        <YAxis.Ticks />
                        <YAxis.Grid />
                    </YAxis>
                    <XAxis>
                        <XAxis.Ticks />
                        <XAxis.Grid />
                    </XAxis>
                    <Tooltip tag={HoverLine} x="x" wMin={150}>
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
                    {dataLegend.map(
                        (item) =>
                            item.checked && (
                                <Area
                                    key={item.name}
                                    x="x"
                                    y={item.name}
                                    curve={curveCardinal}
                                    color={MAP_THEME[item.name]}
                                    opacity={item.opacity ? 0.3 : 1}>
                                    <Area.Dots display />
                                </Area>
                            ),
                    )}
                </Plot>

            </ResponsiveContainer>


        </div>
    )
}

export default BaseAdvanceIntergalactic