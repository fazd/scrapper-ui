import React from 'react';
import { ResponsiveLine } from '@nivo/line'
import './Graph.scss';

const Graph = () => {

  const data = [
    {
      id: "TV 55 pulgadas ",
      data: [
        {
          "x": "10/06/21",
          "y": 2000000
        },
        {
          "x": "11/06/21",
          "y": 2200000
        },
        {
          "x": "12/06/21",
          "y": 2100000
        },
        {
          "x": "13/06/21",
          "y": 2000000
        },
        {
          "x": "14/06/21",
          "y": 2200000
        },
        {
          "x": "15/06/21",
          "y": 2200000
        },
        {
          "x": "16/06/21",
          "y": 1800000
        },
        {
          "x": "17/06/21",
          "y": 2000000
        },
        {
          "x": "18/06/21",
          "y": 1900000
        },
        {
          "x": "19/06/21",
          "y": 1700000
        },
        {
          "x": "20/06/21",
          "y": 2000000
        },
        {
          "x": "21/06/21",
          "y": 2000000
        }
      ]
    },
  ];

  

  return (
    <>
      <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
        yFormat=" >-.2f"
        curve="stepAfter"
        lineWidth="4"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 8,
            tickRotation: 0,
            legend: 'Fechas',
            legendOffset: 40,
            legendPosition: 'middle',
            textColor: 'red',
        }}
        axisLeft={{
            orient: 'right',
            tickSize: 6,
            tickPadding: 5,
            tickRotation: 0,


        }}
        colors={{ scheme: 'paired' }}
        pointSize={10}
        pointColor={{ from: 'color', modifiers: [] }}
        pointBorderWidth={4}
        pointBorderColor={{ from: 'serieColor', modifiers: [] }}
        pointLabelYOffset={-12}
        useMesh={true}
        isInteractive={false}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 90,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                itemTextColor: 'black',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
      />
    </>
  );
};

export default Graph;