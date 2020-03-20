import React from "react";

import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries
} from "react-vis";

export default function Example({ data, className }) {
  return (
    <XYPlot className={className} xType="ordinal" width={200} height={200}>
      <VerticalGridLines />
      <HorizontalGridLines />
      <XAxis tickLabelAngle={-45} />
      <YAxis />
      <VerticalBarSeries data={data} />
    </XYPlot>
  );
}
