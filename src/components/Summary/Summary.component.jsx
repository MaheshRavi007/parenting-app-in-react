import React, { useEffect, useState } from "react";
import "./Summary.styles.css";
import { Title } from "../Title/Title.component";
import { Button } from "../Button/Button.component";
import { Doughnut } from "react-chartjs-2";
import Progress from "react-progressbar";

export const Summary = () => {
  const [timedata, setTimeData] = useState([0, 0, 0, 0]);
  const [freeTimeData, setFreeTimeData] = useState([
    { mobile: "0", laptop: "0" },
    { mobile: "0", laptop: "0" },
    { mobile: "0", laptop: "0" },
    { mobile: "0", laptop: "0" },
  ]);
  const [maxTime, setMaxTimeData] = useState();

  useEffect(() => {
    const datalist = [];
    const freeTimeDataList = [];
    fetch("https://api.mocklets.com/mock68182/screentime")
      .then((res) => res.json())
      .then((apiData) => {
        let chartdata = apiData[0].chartData;
        let deviceUsage = apiData[0].deviceUsage;

        for (let key in deviceUsage) {
          freeTimeDataList.push(deviceUsage[key]);
        }

        for (let key in chartdata) {
          datalist.push(chartdata[key].total);
        }
        // freeTimeDataList.push(deviceUsage);
        // freeTimeDataList.push(apiData[0].freeTimeMaxUsage);

        console.log(apiData);
        setTimeData(datalist);
        setFreeTimeData(freeTimeDataList);
        setMaxTimeData(apiData[0].freeTimeMaxUsage);
        console.log(freeTimeDataList);
      });
  }, []);
  const data = {
    maintainAspectRatio: false,
    responsive: false,
    // labels: ["Study", "Class", "Free-time"],
    datasets: [
      {
        data: [timedata[1], timedata[2], timedata[3]],
        backgroundColor: ["#FF9E57", "#2D82FF", "#61F17B"],
        hoverBackgroundColor: "#99ccff",
      },
    ],
  };
  const options = {
    // circumference : Math.PI,
    // rotation: 1.0*Math.PI,
    // perecentageInnerCutout:10,
    cutout: 90,
    legend: {
      display: false,
      // position: "right",
    },
    layout: {
      height: 200,
      width: 200,
      padding: 10,
    },
    elements: {
      arc: {
        borderWidth: 0,
      },
    },
  };
  console.log(freeTimeData, maxTime);
  return (
    <div className="summarycontainer">
      <div className="chartcontainer">
        <span>Total</span>
        <div className="total-time">{`${parseInt(timedata[0] / 60)} h ${
          timedata[0] % 60
        } min`}</div>
        <Title text="All Screen Time" />
        <Doughnut data={data} options={options} />
        <div className="legend">
          <span>
            <i className="study fas fa-circle"></i>Study
          </span>
          <span>
            <i className="class fas fa-circle"></i>Class
          </span>
          <span>
            <i className="free-time fas fa-circle"></i>Free-time
          </span>
        </div>
      </div>
      <div className="freetimeusage">
        <Title text="Free-Time Usage" />
        <div className="labels-container">
          <div className="left">
            Used
            <br />
            <span>{freeTimeData[3].mobile}m</span>
          </div>
          <div className="right">
            Max
            <br />
            <span>{`${parseInt(maxTime / 60)} h`}</span>
          </div>
        </div>
        <Progress
          className="progress-bar"
          completed={(freeTimeData[3].mobile / maxTime) * 100}
        />
        <Button text="Extend Free-Time" style={{alignSelf:'flex-end'}} />
      </div>

      <div className="bydevices">
        <Title text="By Devices" />

        <div className="devicecontainer">
          <div className="deviceimage">
            <img src="/images/mobile.png" alt="" />
          </div>

          <div className="devicedetails">
            <span>Adi's Phone</span>
            <span className="time">40m</span>
          </div>
        </div>
        <div className="devicecontainer">
          <div className="deviceimage">
            <img src="/images/laptop.png" alt="" />
          </div>

          <div className="devicedetails">
            <span>Adi's Laptop</span>
            <span className="time">1h 30m</span>
          </div>
        </div>
        <span className="time">See All Devices</span>
      </div>
    </div>
  );
};
