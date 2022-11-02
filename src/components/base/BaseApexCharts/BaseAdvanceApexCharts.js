import React from 'react'
import ReactApexChart from 'react-apexcharts'
import ApexChartsStyle from './BaseApexCharts.module.scss';



const BaseAdvanceApexCharts = () => {

    const state = {

        series: [{
            name: 'DIRETTA',
            data: [0, 2, 40, 28, 51, 42, 90, 100, 20, 40, 20, 70, 20, 20, 10, 30, 5, 0]
        }, {
            name: 'MULTIPLA',
            data: [0, 2, 5, 12, 24, 12, 41, 50, 10, 20, 20, 10, 10, 5, 0, 5, 0, 0]
        }],
        options: {
            chart: {
                height: 400,
                type: 'area'
            },


            colors: ['#000', '#E91E63'],


            legend: {
                position: 'top'
            },
            title: {
                text: 'RICHIESTE MAIL RICEVUTE (a settimana)',
                align: 'left',
                style: {
                    fontSize: '16px',
                    color: '#000'
                }
            },
            dataLabels: {
                enabled: true,

                offsetY: 0,
                style: {
                    fontSize: '11px',
                },
                background: {
                    enabled: true,
                    foreColor: '#fff',
                    padding: 3,
                    borderRadius: 2,
                    borderWidth: 1,
                    borderColor: 'none',
                    opacity: 0.9,
                    dropShadow: {
                        enabled: true,
                        top: 1,
                        left: 1,
                        blur: 1,
                        color: '#000',
                        opacity: 0.15
                    }
                },
            },
            stroke: {
                show: true,
                curve: 'smooth',
                width: 2,
            },
            xaxis: {
                type: 'datetime',
                categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000', '7/11/2000', '8/11/2000', '9/11/2000', '10/11/2000', '11/11/2000', '12/11/2000', '1/11/2001', '2/11/2001', '3/11/2001', '4/11/2001', '5/11/2001', '6/11/2001'],
                tickAmount: 18,
                labels: {
                    formatter: function (value, timestamp, opts) {
                        return opts.dateFormatter(new Date(timestamp), 'dd/MM/yy HH:mm')
                    }
                },
                title: {
                    text: 'DATE RICEZIONE MAIL',
                    offsetX: 0,
                    offsetY: 0,
                    style: {
                        color: '#000',
                        fontSize: '12px',
                        fontFamily: 'Helvetica, Arial, sans-serif',
                        fontWeight: 600,
                        cssClass: 'apexcharts-yaxis-title',
                    },
                }
            },
            yaxis: {
                title: {
                    text: 'RICHIESTE',
                    rotate: -90,
                    offsetX: 0,
                    offsetY: 0,
                    style: {
                        color: '#000',
                        fontSize: '12px',
                        fontFamily: 'Helvetica, Arial, sans-serif',
                        fontWeight: 600,
                        cssClass: 'apexcharts-yaxis-title',
                    },
                }
            },
            tooltip: {
                x: {
                    format: 'dd/MM/yy HH:mm'
                },
            },
        },


    };

    return (
        <div className={ApexChartsStyle.wrapper}>
            <p>AdvanceApexCharts</p>
            <div id="chart">
                <ReactApexChart options={state.options} series={state.series} type="area" height={400} />
            </div>
        </div>

    )
}

export default BaseAdvanceApexCharts