import * as React from 'react';
import { useState, useEffect } from 'react';
import { Column } from '@ant-design/plots';
import Paper from '@mui/material/Paper';
export default function Chart() {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://raw.githubusercontent.com/nsuman/SanzalWeb/main/src/user_data.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };

  const getConfig = (data, xField, yField) => {
    return {
      data: data.sort((a, b) => b[yField] - a[yField]).slice(0, 30),
      xField: xField,
      yField: yField,
      label: {
        content: null
      },
      xAxis: {
        label: {
          autoHide: false,
          autoRotate: true,
        },
        title: {
          text: `${xField}`
        }
      },
      yAxis: {
        title: {
          text: `account with most  ${yField}`
        }
      }
    };
  }

  return <div>
    <Paper
      sx={{
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        height: 'auto',
        marginBottom: '5px'
      }}
    >    <Column {...getConfig(data, 'username', 'followers_count')} /></Paper>

    <Paper
      sx={{
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        height: 'auto',
      }}
    >    <Column {...getConfig(data, 'username', 'following_count')} /></Paper>
  </div>

};

