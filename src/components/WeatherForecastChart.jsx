import ReactECharts from 'echarts-for-react'
import {useState} from "react";

function WeatherForecastChart({forecast}) {

    const [temperatures] = useState(forecast.map((f) => f.day.avgtemp_c));
    const [rains] = useState(forecast.map((f) => f.day.totalprecip_mm));

    function formatterXAxisLabel(value, index){
        const date = new Date(value);
        return `${date.getUTCDate()}/${date.getUTCMonth() + 1}`
    }

    return (
        <section className="chart">
            <ReactECharts
                option={{
                    legend: {
                        data: ['Temperature', 'Rain'],
                        right: '10%',
                        textStyle: {
                            fontSize: 14,
                        },
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data: forecast.map((f) => f.date),
                            axisLabel: {
                                formatter: formatterXAxisLabel,
                                fontSize: 14,
                            },
                        },
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            max: Math.round(Math.max(...temperatures) * 1.3),
                            axisLabel: {
                                formatter: '{value} ℃',
                                fontSize: 14,
                            },
                            splitLine: {
                                show: false,
                            },
                            splitArea: {
                                show: true,
                                areaStyle: {
                                    color: ['rgba(255,255,255,0.3)', 'rgba(200,200,200,0.1)'],
                                },
                            },
                        },
                        {
                            type: 'value',
                            min: 0,
                            max: Math.round(Math.max(...rains) * 1.3),
                            axisLabel: {
                                formatter: '{value} mm',
                                fontSize: 14,
                            },
                        },
                    ],
                    series: [
                        {
                            name: 'Temperature',
                            data: temperatures,
                            type: 'line',
                            smooth: true,
                            lineStyle: {
                                color: '#1869b7',
                                width: 2,
                            },
                            itemStyle: {
                                color: '#1869b7',
                            },
                        },
                        {
                            name: 'Rain',
                            type: 'bar',
                            data: rains,
                            yAxisIndex: 1,
                            itemStyle: {
                                color: '#A4A4A4',
                            },
                        },
                    ]
                }}
            />
        </section>
    );
}

export default WeatherForecastChart;