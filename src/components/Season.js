import React from "react";
import CanvasJS from "../canvasjs.react";

export default class Season extends React.Component {
  handleClick = () => {
    window.alert("it works");
  };

  render() {
    const options = {
      title: {
        text: "Basic Column Chart in React",
      },
      data: [
        {
          click: this.handleClick,
          type: "column",
          dataPoints: [
            { label: "Apple", y: 10 },
            { label: "Orange", y: 15 },
            { label: "Banana", y: 25 },
            { label: "Mango", y: 30 },
            { label: "Grape", y: 28 },
          ],
        },
      ],
    };

    return (
      <div>
        <CanvasJS.CanvasJSChart
          options={options}
          /* onRef = {ref => this.chart = ref} */
        />
      </div>
    );
  }
}
