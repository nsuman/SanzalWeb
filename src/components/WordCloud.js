import React from 'react';
import { WordCloud } from '@ant-design/plots';

export default function Wordcloud({ data, wordField, weightField }) {
    console.log(data);
    const config = {
        data,
        wordField: wordField,
        weightField: weightField,
        colorField: wordField,
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

    return <WordCloud {...config} />;
};
