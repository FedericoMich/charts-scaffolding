import React, { useState } from 'react';
import Am5Style from './BaseAm5.module.scss';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';



const BaseAdvanceAm5 = () => {
    const options = [1, 2];

    const [data, setData] = useState(1)

    const handleChange = () => {
        setData(options[1]);
    };


    function dataURI() {
        let urlDY = ''
        if (data === 1) {
            urlDY = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-160/sample_data_serial.json';
        } else {
            urlDY = 'https://mocki.io/v1/d3e151c8-3186-4016-a5a2-bda235987cc1';
        }
        return urlDY
    }


    const Chart = () => {
        am4core.useTheme(am4themes_animated);

        var chart = am4core.create('chartdiv', am4charts.XYChart);

        let title = chart.titles.create();
        title.text = 'RICHIESTE MAIL RICEVUTE (a settimana)';
        title.fontSize = 20;
        title.fontWeight = 600;
        title.marginBottom = 10;
        title.tooltipText = 'Sottotitolo hover amCharts 4';


        // Set up data source
        chart.dataSource.url = dataURI();
        chart.dataSource.load();
        chart.updateCurrentData = true


        // Create axes
        let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = 'year';
        categoryAxis.title.text = 'Date ricezione Mail ';
        categoryAxis.title.fontSize = 11;
        categoryAxis.title.fontWeight = 600;
        categoryAxis.title.marginTop = 10;
        categoryAxis.renderer.minGridDistance = 0;
        categoryAxis.renderer.grid.template.location = 0.1;
        categoryAxis.startLocation = 0.4;
        categoryAxis.endLocation = 0.8;
        categoryAxis.renderer.labels.template.rotation = -70;
        categoryAxis.renderer.labels.template.verticalCenter = 'right';
        categoryAxis.renderer.labels.template.horizontalCenter = 'right';


        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.tooltip.disabled = false;
        valueAxis.renderer.minWidth = 0;
        valueAxis.title.text = 'Richieste';
        valueAxis.title.fontSize = 12;
        valueAxis.title.fontWeight = 600;
        valueAxis.title.marginRight = 10;


        // Create series
        let series = chart.series.push(new am4charts.LineSeries());
        series.name = 'cars';
        series.fill = am4core.color('#6771dc');
        series.stroke = am4core.color('#000');
        series.strokeWidth = 0;
        series.tensionX = 10;
        series.dataFields.valueY = 'cars';
        series.dataFields.categoryX = 'year';
        series.fillOpacity = 1;


        let series2 = chart.series.push(new am4charts.LineSeries());
        series2.name = 'bicycles';
        series2.fill = am4core.color('#dc67ce');
        series2.stroke = am4core.color('#000');
        series2.strokeWidth = 0;
        series2.tensionX = 10;
        series2.dataFields.valueY = 'bicycles';
        series2.dataFields.categoryX = 'year';
        series2.fillOpacity = 1;


        let series3 = chart.series.push(new am4charts.LineSeries());
        series3.name = 'motorcycles';
        series3.fill = am4core.color('#dc8c67');
        series3.stroke = am4core.color('#000');
        series3.strokeWidth = 0;
        series3.tensionX = 10;
        series3.dataFields.valueY = 'motorcycles';
        series3.dataFields.categoryX = 'year';
        series3.fillOpacity = 1;
        // series3.hidden = true;


        let fillModifier = new am4core.LinearGradientModifier();
        fillModifier.opacities = [1, 0];
        fillModifier.offsets = [0, 1];
        fillModifier.gradient.rotation = 90;
        series.segments.template.fillModifier = fillModifier;
        series2.segments.template.fillModifier = fillModifier;
        series3.segments.template.fillModifier = fillModifier;


        // Enable export
        chart.exporting.menu = new am4core.ExportMenu();
        chart.legend = new am4charts.Legend();
        chart.cursor = new am4charts.XYCursor();


        let circleBullet = series.bullets.push(new am4charts.CircleBullet());
        circleBullet.circle.stroke = am4core.color('#fff');
        circleBullet.circle.dy = 0;
        circleBullet.circle.strokeWidth = 2;
        circleBullet.tooltipText = 'Richieste Dirette: [bold]{cars}[/]';


        let labelBullet = series.bullets.push(new am4charts.LabelBullet());
        labelBullet.label.text = '{cars}';
        labelBullet.label.dy = -20;


        let circleBullet2 = series2.bullets.push(new am4charts.CircleBullet());
        circleBullet2.circle.stroke = am4core.color('#fff');
        circleBullet2.circle.dy = 0;
        circleBullet2.circle.strokeWidth = 2;
        circleBullet2.tooltipText = 'Richieste Multipla: [bold]{bicycles}[/]';


        let labelBullet2 = series2.bullets.push(new am4charts.LabelBullet());
        labelBullet2.label.text = '{bicycles}';
        labelBullet2.label.dy = -20;


        let circleBullet3 = series3.bullets.push(new am4charts.CircleBullet());
        circleBullet3.circle.stroke = am4core.color('#fff');
        circleBullet3.circle.dy = 0;
        circleBullet3.circle.strokeWidth = 2;
        circleBullet3.tooltipText = 'Richieste Multipla: [bold]{motorcycles}[/]';


        let labelBullet3 = series3.bullets.push(new am4charts.LabelBullet());
        labelBullet3.label.text = '{motorcycles}';
        labelBullet3.label.dy = -20;


        return () => {
            chart.dispose();
        };
    }

    return (
        <div className={Am5Style.wrapper}>
            <p>amCharts 4</p>
            <div id="chartdiv" style={{ width: '100%', height: '550px' }}></div>
            <Chart />
            <Dropdown options={options}
                onChange={handleChange}
                value={data} placeholder="Select an option" />
        </div>

    );
}

export default BaseAdvanceAm5