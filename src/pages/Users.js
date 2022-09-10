import * as React from 'react';
import Container from '@mui/material/Container';
import Card from '../components/Cards';
import Grid from '@mui/material/Grid';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

export default function Users() {
    const [high, setHigh] = React.useState(true); 
    const [param, setParam] = React.useState('followers');

    const rerender = React.useRef(0)
    rerender.current += 1
    console.log(high, param);
    const data = React.useRef([])

    if (high) {
        if (param === 'tweet') {
            data.current = data.current.sort((a,b) => b.tweet_count - a.tweet_count)
        } else if (param === 'followers') {
            data.current = data.current.sort((a,b) => b.followers_count - a.followers_count)
        } else {
            data.current = data.current.sort((a,b) => b.following_count - a.following_count)
        }
    } else {
        if (param === 'tweet') {
            data.current = data.current.sort((a,b) => a.tweet_count - b.tweet_count)
        } else if (param === 'followers') {
            data.current =data.current.sort((a,b) => a.followers_count - b.followers_count)
        } else {
            data.current =data.current.sort((a,b) => a.following_count - b.following_count)
        }
    }
    React.useEffect(() => {
      fetch('https://raw.githubusercontent.com/nsuman/SanzalWeb/demog/src/user_data.json')
      .then((response) => response.json())
      .then((json) => {
        data.current = json.sort((a,b) => b.followers_count - a.followers_count)})
      .catch((error) => {
        console.log('fetch data failed', error);
      });
    }, []);

    const cards = data.current.map((element, i) => {
        return <Card paramCount={element[`${param}_count`]} param={param} img={element.profile_image_url.replace('_normal', '') } index={i} username={element.username}/>
    })
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
 <ButtonGroup
    disableElevation
    variant="contained"
    aria-label="Disabled elevation buttons"
  >
      <Button  onClick={() => setHigh(false)}>Show Low</Button>
    <Button onClick={() => setHigh(true)}>Show High</Button>
  
  </ButtonGroup>

<div style={{width: '10px'}}></div>
  <ButtonGroup
    disableElevation
    variant="contained"
    aria-label="Disabled elevation buttons"
  >
    <Button onClick={() => setParam('followers')}>Followers Count</Button>
    <Button  onClick={() => setParam('following')}>Following Count</Button>
    <Button  onClick={() => setParam('tweet')}>Tweet Count</Button>
  </ButtonGroup>

    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
  {cards.map((element, index) => (
    <Grid item xs={2} sm={4} md={4} key={index}>
      {element}
    </Grid>
  ))}
</Grid>
    </Container>
  )
};
