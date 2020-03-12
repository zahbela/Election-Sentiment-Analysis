import React, { Component } from 'react'
import Chart from "chart.js";
import classes from "./LineGraph.module.css";
let myLineChart;

//--Chart Style Options--//
Chart.defaults.global.defaultFontFamily = "'PT Sans', sans-serif"
Chart.defaults.global.legend.display = false;
//--Chart Style Options--//

export default class LineGraph extends Component {
    chartRef = React.createRef();

    componentDidMount() {
        this.buildChart();
    }

    componentDidUpdate() {
        this.buildChart();
    }

    buildChart = () => {
        const myChartRef = this.chartRef.current.getContext("2d");
        const { bernie, elizabeth, joe, mike, tulsi, labels } = this.props;

        if (typeof myLineChart !== "undefined") myLineChart.destroy();

        myLineChart = new Chart(myChartRef, {
            type: "line",
            data: {
                //Bring in data
                labels: labels,
                datasets: [
                    {
                        label: "Bernie",
                        data: bernie,
                        fill: false,
                        borderColor: "#28f169"
                    },
                    {
                        label: "Joe",
                        data: joe,
                        fill: false,
                        borderColor: "#553072"
                    },
                    {
                        label: "Elizabeth",
                        data: elizabeth,
                        fill: false,
                        borderColor: "#7d2e26"
                    },
                    {
                        label: "Mike",
                        data: mike,
                        fill: false,
                        borderColor: "#93aef6"
                    },
                    {
                        label: "Tulsi",
                        data: tulsi,
                        fill: false,
                        borderColor: "#847179"
                    }
                ]
            },
            options: {
                //Customize chart options
            }
        });

    }

    render() {

        return (
            <div className={classes.graphContainer}>
                <canvas
                    id="myChart"
                    ref={this.chartRef}
                />
            </div>
        )
    }
}
