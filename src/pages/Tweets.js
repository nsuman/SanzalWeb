import React from 'react';
import Container from '@mui/material/Container';
import Wordcloud from '../components/WordCloud';

export default function Tweets() {
  const [dummyState, setDummyState] = React.useState(0);
  const data = React.useRef([]);

  React.useEffect(() => {
    fetch('https://raw.githubusercontent.com/nsuman/twitdata/master/users_profile/users_profile.json')
      .then((response) => response.json())
      .then((json) => {
        data.current = json.sort((a, b) => b.followers_count - a.followers_count);
        setDummyState(Math.random() * 10000000);
      })
      .catch((error) => {
        data.current = [];
        setDummyState(Math.random() * 10000000);
      });
  }, []);

  const wordClouds = data.current.slice(0, 100).map((element, index) => {
    return  <Wordcloud username={element.username} key={index}/>;
  })
  return (
    <Container>
    {wordClouds}
    </Container>
  )
};
