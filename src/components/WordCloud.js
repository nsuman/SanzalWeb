import React from 'react';
import { useState } from 'react';
import { WordCloud } from '@ant-design/plots';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
const getDataUrl = (username) => {
    return `https://raw.githubusercontent.com/nsuman/twitdata/master/word_cloud/${username}_freq_dict.json`;
}
export default function Wordcloud({ username }) {
    const [data, setData] = useState([]);

    React.useEffect(() => {
        fetch(getDataUrl(username))
          .then((response) => response.json())
          .then((json) => {
           const d =  Object.keys(json).sort((a,b) => json[b] - json[a]).map((el) => {
                return {
                    word: el,
                    count: json[el]
                }
            })
            console.log(d)
            setData(d.slice(0, Math.min(d.length - 1, 50)));
          })
          .catch((error) => {
            setData([]);
            console.log('fetch data failed', error);
          });
      }, []);
    
    const config = {
        data: data,
        wordField: 'word',
        weightField: 'count',
        color: '#122c6a',
        renderer: 'svg',
        wordStyle: {
            fontFamily: 'Verdana',
            fontSize: [24, 80],
        },
        state: {
            active: {
                style: {
                    lineWidth: 3,
                },
            },
        },
    };

    return data.length > 1 ? (<>
        <Typography variant="h5" gutterBottom>
        Most used words in timeline of {username}
    </Typography>
    <Paper> 
        <div style={{width: 600, height: 400}}>
        <WordCloud {...config} />
            </div>
   
        </Paper></>
    ) : null;
};
