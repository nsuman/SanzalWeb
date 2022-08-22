import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { BarChart, Bar, XAxis, YAxis, Label, ResponsiveContainer,CartesianGrid,Tooltip } from 'recharts';
import Title from './Title';
import { Column } from '@ant-design/plots';
import { ResetTvRounded } from '@mui/icons-material';
import ColumnChart from '@ant-design/plots/es/components/column';
import ReactDOM from 'react-dom';

function createData(type, Followers) {
  return { type, Followers };
}

const data = [
  {
    type: 'Mahabir',
    Followers: 50,
  },
  {
    type: 'Kantipur',
    Followers: 52,
  },
  {
    type: 'Balen',
    Followers: 61,
  },
  {
    type: 'Baburam',
    Followers: 145,
  },
  {
    type: 'Gagan',
    Followers: 73,
  },
  {
    type: 'Amrit',
    Followers: 38,
  },
  {
    type: 'Setopati',
    Followers: 49,
  },
  {
    type: 'RONB',
    Followers: 85,
  },
];

export default function Chart() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>Today</Title>
      <ResponsiveContainer>
        <BarChart
        
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 16,  
            

          }} 
        >
          <XAxis
            dataKey="type"
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
            Strock="#8884d8" 
          />

          <YAxis
          dataKey="Followers"
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
            
          >
           
      
            <Label 
              angle={270}
              position="left"
              style={{
                textAnchor: 'middle',
                fill: theme.palette.text.primary,
                ...theme.typography.body1,
              }}
              
            >
              Twitter
            </Label>
          </YAxis>
          <Tooltip />
           <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Bar
         
            dataKey="Followers"
            stroke={theme.palette.primary.main}
            fill="#8884d8"  
            barSize={40}
          />
       
       return <Column {...useTheme} />;
        </BarChart>
       
      </ResponsiveContainer>
    </React.Fragment>
  );
}


