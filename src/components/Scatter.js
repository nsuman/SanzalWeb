import React, { useState, useEffect } from 'react';
import { Scatter } from '@ant-design/plots';

export default function ScatterChart({dataUrl}) {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://raw.githubusercontent.com/nsuman/twitdata/master/users_profile/sentiment_data.json')
      .then((response) =>{ console.log(response); return response.json(); } )
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const config = {
    data,
    xField: 'polarity',
    yField: 'subjectivity',
    shape: 'circle',
    colorField: 'username',
    tooltip:{
      fields: ['polarity', 'subjectivity', 'username', 'tweet']
    },
    yAxis: {
      min: -1, 
      max: 1,
      line: {
        style: {
          stroke: '#aaa',
        },
      },
      title:{
        text: "subjectivity"
      }
    },
    xAxis: {
      title:{
        text: "polarity"
      },
      min: -1, 
      max: 1,
      grid: {
        line: {
          style: {
            stroke: '#eee',
          },
        },
      },
      line: {
        style: {
          stroke: '#aaa',
        },
      },
    },
  };

  return <div style={{width: "600px", height: "600px"}}>
    <Scatter {...config} />
    </div>;
};