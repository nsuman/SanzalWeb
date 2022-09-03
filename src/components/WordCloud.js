import React, { useState, useEffect } from 'react';
import { WordCloud } from '@ant-design/plots';

export default function SanjaalWordCloud({dataUrl,wordField,weightField}){
    const [data, setData] = useState([]);
  
    useEffect(() => {
      asyncFetch();
    }, []);
  
    const asyncFetch = () => {
      fetch(dataUrl)
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => {
          console.log('fetch data failed', error);
        });
    };
   
    const config = {
      data,
      wordField: wordField,
      weightField: weightField,
      color: '#122c6a',
      wordStyle: {
        fontFamily: 'Verdana',
        fontSize: [24, 80],
      },
      // set interaction type
      interactions: [
        {
          type: 'element-active',
        },
      ],
      state: {
        active: {
          // Here you can set active style
          style: {
            lineWidth: 3,
          },
        },
      },
    };
  
    return <WordCloud {...config} />;
  };
 