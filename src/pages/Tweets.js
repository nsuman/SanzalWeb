import React from 'react';
import Container from '@mui/material/Container';
import Wordcloud from '../components/WordCloud';

export default function Tweets() {
  const data = [
    {"name": "सुधार", count: 200},
    {"name": "पालना", count: 10},
    {"name": "महानगर", count: 2000},
    {"name": "फोहोर", count: 450},
    {"name": "लौरो", count: 4000},
    {"name": "छानविन", count: 1500},
    {"name": "काठमाडौँ", count: 1000},
    {"name": "बैंक", count: 4000},
    {"name": "सार्वजनिक", count: 200},
    {"name": "स्वतन्त्र", count: 1300},
    {"name": "घरदैलो", count: 100},
    {"name": "प्राकृतिक", count: 150},
    {"name": "छानविन", count: 1500},
    {"name": "दरबार स्क्वायर", count: 1600},
    {"name": "साथीभाइ", count: 200},
    {"name": "व्यवस्थित", count: 2500},
    {"name": "निरन्तर", count: 300},
    {"name": "बजारीकरण", count: 100},
    {"name": "समाज", count: 150}
  ]

  return (
    <Container>
      <Wordcloud data={data} key={1}
        wordField="name" weightField="count" />

    </Container>
  )
};
