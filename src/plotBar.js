import React from "react";

import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries
} from "react-vis";

export default function Example({ data }) {
  return (
    <XYPlot margin={{ bottom: 70 }} xType="ordinal" width={300} height={300}>
      <VerticalGridLines />
      <HorizontalGridLines />
      <XAxis tickLabelAngle={-45} />
      <YAxis />
      <VerticalBarSeries data={data} />
    </XYPlot>
  );
}
