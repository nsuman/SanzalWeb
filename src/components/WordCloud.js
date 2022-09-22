import React from 'react';
import { useState } from 'react';
import { WordCloud } from '@ant-design/plots';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
const getDataUrl = (username) => {
    return `https://raw.githubusercontent.com/nsuman/twitdata/master/word_cloud/${username}_freq_dict.json`;
}
export default function Wordcloud({ username, label }) {
    const [data, setData] = useState([]);

    React.useEffect(() => {
        fetch(getDataUrl(username))
            .then((response) => response.json())
            .then((json) => {
                const d = Object.keys(json).sort((a, b) => json[b] - json[a]).map((el) => {
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

    if (data.length > 1) {
        return (<div style={{marginRight: '20px', width:'50%'}}> 
        <b><Typography variant="h6" gutterBottom>
        {label}
        </Typography></b>
        <Paper style={{ width: 400, height: 400, marginTop: '10px' }}>
            <div>
                <WordCloud {...config} />
            </div>
        </Paper>
    </div>)
    }
    return null

};
