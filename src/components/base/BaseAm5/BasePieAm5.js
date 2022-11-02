import React, { useLayoutEffect } from 'react';
import Am5Style from '../BaseRecharts/BaseRecharts.module.scss';
import * as am5 from '@amcharts/amcharts5';
import * as am5percent from '@amcharts/amcharts5/percent';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';





const BasePieAm5 = () => {

    useLayoutEffect(() => {

        let root = am5.Root.new('chartPie');

        root.setThemes([
            am5themes_Animated.new(root)
        ]);
        let chart = root.container.children.push(
            am5percent.PieChart.new(root, {
                layout: root.verticalHorizontal
            })
        );

        // Define data
        let data = [{
            country: 'France',
            sales: 100000
        }, {
            country: 'Spain',
            sales: 160000
        }, {
            country: 'United Kingdom',
            sales: 80000
        }];

        // Create series
        let series = chart.series.push(
            am5percent.PieSeries.new(root, {
                name: 'Series',
                valueField: 'sales',
                categoryField: 'country'
            })
        );
        series.data.setAll(data);

        // Add legend
        let legend = chart.children.push(am5.Legend.new(root, {
            centerX: am5.percent(0),
            x: am5.percent(0),
            layout: root.horizontalLayout
        }));

        legend.data.setAll(series.dataItems);

        return () => {
            root.dispose();
        };
    }, []);



    return (
        <div className={Am5Style.wrapper}>

            <div className='chartContainer'>
                <p>amCharts 5</p>
                <div id="chartPie" style={{ width: '100%', height: '200px' }}></div>
            </div>


        </div>
    )
}

export default BasePieAm5