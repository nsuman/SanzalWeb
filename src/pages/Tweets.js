import React from 'react';
import { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Wordcloud from '../components/WordCloud';

export default function Tweets() {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch("https://raw.githubusercontent.com/nsuman/SanzalWeb/main/src/user_data.json")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      })
  };

  return (
    <Container>
      <Wordcloud data={data} key={1}
        wordField="name" weightField="followers_count" />

    </Container>
  )
};
