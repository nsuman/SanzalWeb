import React from 'react';
import Container from '@mui/material/Container';
import Wordcloud from '../components/WordCloud';
import SelectMultiple from '../components/MultipleSelect';

export default function Tweets() {
  const [dummyState, setDummyState] = React.useState(0);
  const data = React.useRef([]);
  const [selectedValue, setSelectedValue] = React.useState([]);

  React.useEffect(() => {
    fetch('https://raw.githubusercontent.com/nsuman/twitdata/master/users_profile/users_profile.json')
      .then((response) => response.json())
      .then((json) => {
        data.current = json.sort((a, b) => b.followers_count - a.followers_count);
        setSelectedValue([data.current[1]])
      })
      .catch((error) => {
        data.current = [];
        setDummyState(Math.random() * 10000000); 
      });
  }, []);

  console.log('selectedValue', selectedValue);
  const wordClouds = selectedValue.map((element, index) => {
    return  <Wordcloud username={element.username} key={index}/>;
  })
  return (
    <Container>
    <SelectMultiple selectOptions={data.current} onInputChange={(value)=> setSelectedValue(value)}/>
    {wordClouds}
    </Container>
  )
};
