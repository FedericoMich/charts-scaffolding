import React, { useLayoutEffect } from 'react';
import Am5Style from './BaseAm5.module.scss';
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';





const BaseBarAm5 = () => {

    useLayoutEffect(() => {

        let rootBar = am5.Root.new('chartBar');

        // Set themes
        // https://www.amcharts.com/docs/v5/concepts/themes/
        rootBar.setThemes([
            am5themes_Animated.new(rootBar)
        ]);

        let data = [{
            country: 'USA',
            value: 2025
        }, {
            country: 'China',
            value: 1882
        }, {
            country: 'Japan',
            value: 1809
        }, {
            country: 'Germany',
            value: 1322
        }, {
            country: 'UK',
            value: 1122
        }, {
            country: 'France',
            value: 1114
        }, {
            country: 'India',
            value: 984
        }, {
            country: 'Spain',
            value: 711
        }, {
            country: 'Netherlands',
            value: 665
        }, {
            country: 'South Korea',
            value: 443
        }, {
            country: 'Canada',
            value: 441
        }];


        // Create chart
        // https://www.amcharts.com/docs/v5/charts/xy-chart/
        let chart = rootBar.container.children.push(am5xy.XYChart.new(rootBar, {
            panX: true,
            panY: true,
            wheelX: 'panX',
            wheelY: 'zoomX',
            pinchZoomX: true
        }));

        // Add cursor
        // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
        let cursor = chart.set('cursor', am5xy.XYCursor.new(rootBar, { behavior: 'zoomXY' }));
        cursor.lineY.set('visible', false);


        // Create axes
        // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
        let xRenderer = am5xy.AxisRendererX.new(rootBar, { minGridDistance: 30 });
        xRenderer.labels.template.setAll({
            rotation: -90,
            centerY: am5.p50,
            centerX: am5.p100,
            paddingRight: 15
        });

        let xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(rootBar, {
            maxDeviation: 0.1,
            categoryField: 'country',
            renderer: xRenderer,
            tooltip: am5.Tooltip.new(rootBar, {})
        }));

        let yAxis = chart.yAxes.push(am5xy.ValueAxis.new(rootBar, {
            maxDeviation: 0.3,
            renderer: am5xy.AxisRendererY.new(rootBar, {})
        }));


        // Create series
        // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
        let series = chart.series.push(am5xy.ColumnSeries.new(rootBar, {
            name: 'Series 1',
            xAxis: xAxis,
            yAxis: yAxis,
            valueYField: 'value',
            sequencedInterpolation: true,
            categoryXField: 'country',
            tooltip: am5.Tooltip.new(rootBar, {
                labelText: '{valueY}'
            })
        }));


        series.columns.template.setAll({ cornerRadiusTL: 5, cornerRadiusTR: 5 });
        series.columns.template.adapters.add('fill', function (fill, target) {
            return chart.get('colors').getIndex(series.columns.indexOf(target));
        });

        series.columns.template.adapters.add('stroke', function (stroke, target) {
            return chart.get('colors').getIndex(series.columns.indexOf(target));
        });




        // Add legend
        let legend = chart.children.push(am5.Legend.new(rootBar, {
            centerX: am5.percent(0),
            x: am5.percent(0),
            layout: rootBar.horizontalLayout
        }));

        legend.data.setAll(data);

        xAxis.data.setAll(data);
        series.data.setAll(data);


        // Make stuff animate on load
        // https://www.amcharts.com/docs/v5/concepts/animations/
        series.appear(1000);
        chart.appear(1000, 100);

        return () => {
            rootBar.dispose();
        };
    }, []);



    return (
        <div className={Am5Style.wrapper}>
            <p>amCharts 5</p>
            <div id='chartBar' style={{ width: '100%', height: '400px' }}></div>
        </div>
    )
}

export default BaseBarAm5