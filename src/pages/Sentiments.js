import * as React from 'react';
import Container from '@mui/material/Container';
import GaugeCard from '../components/Gauge'
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';

export default function Sentiments() {
  const [dummyState, setDummyState] = React.useState(0);
  const data = React.useRef()
  const sentiment_url = "https://raw.githubusercontent.com/nsuman/twitdata/master/sentiment_data/sentiments.json";

  React.useEffect(() => {
    fetch(sentiment_url)
      .then((response) => response.json())
      .then((json) => {
        data.current = json.sort((a, b) => b.sentiment_score - a.sentiment_score);
        setDummyState(Math.random())
      })
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  }, []);

  let dom = []

  if (data.current) {
    dom = data.current.map((element) => {
      return (
        <Grid item xs={6}>
          <GaugeCard percent={element.sentiment_score} name={element.username} imagelink={element.profile_image_url.replace('_normal', '_bigger')} hist={element.histogram} />
        </Grid>
      )
    })
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="body" gutterBottom>
        Each user is assigned a score based on the sentiment expressed on
        the replies of their recent tweets.
      </Typography>
      <Divider />
      <div style={{ height: '20px' }}></div>
      <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {dom}
      </Grid>
    </Container>
  )
};
