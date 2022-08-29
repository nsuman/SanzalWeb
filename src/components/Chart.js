import * as React from 'react';
import { useState, useEffect } from 'react';
import { Column } from '@ant-design/plots';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
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
      data: data.sort((a, b) => b[yField] - a[yField]).slice(0, 15),
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
      }
    };
  }

  return <div style={{ 'display': 'flex' }}>
    <Paper
      sx={{
        p: 2,
        height: 'auto',
        width: '50%',
        marginBottom: '5px'
      }}
    >
      <Typography variant="body2">
        Accounts with most followers
      </Typography>

      <Column {...getConfig(data, 'username', 'followers_count')} />
    </Paper>

    <Paper
      sx={{
        p: 2,
        marginLeft: '5px',
        height: 'auto',
        width: '50%',
        marginBottom: '5px'
      }}
    >
      <Typography variant="body2">
        Accounts with most following
      </Typography>
      <Column {...getConfig(data, 'username', 'following_count')} /></Paper>
  </div>

};

