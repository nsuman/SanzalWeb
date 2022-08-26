import * as React from 'react';
import { Column } from '@ant-design/plots';

const data = [
  {
    name: 'Mahabir',
    followers: 50,
  },
  {
    name: 'Kantipur',
    followers: 52,
  },
  {
    name: 'Balen',
    followers: 61,
  },
  {
    name: 'Baburam',
    followers: 145,
  },
  {
    name: 'Gagan',
    followers: 73,
  },
  {
    name: 'Amrit',
    followers: 38,
  },
  {
    name: 'Setopati',
    followers: 49,
  },
  {
    name: 'RONB',
    followers: 85,
  },
];

export default function Chart()  {
  const config = {
    data,
    xField: 'name',
    yField: 'followers',
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
  };
  return <Column {...config} />;
};

