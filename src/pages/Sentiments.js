import * as React from 'react';
import Container from '@mui/material/Container';
import GaugeCard from '../components/Gauge'
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';

export default function Sentiments() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="body" gutterBottom>
        Each user is assigment a sentiment score based on the sentiment of 
        their recent tweets.
      </Typography>
      <Divider />
      <div style={{height:'20px'}}></div>

 
     <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid item xs={6}>
  <GaugeCard percent={0.54} name="@brb1954" imagelink={"https://pbs.twimg.com/profile_images/741978612434227201/UkmkHiYy_bigger.jpg"} />
  </Grid>
  <Grid item xs={6}>
  <GaugeCard percent={0.7} name="@thapagk" imagelink={"https://pbs.twimg.com/profile_images/1294237288390512640/RktZchMv_bigger.jpg"} />
  </Grid>
  <Grid item xs={6}>
  <GaugeCard percent={0.83} name="@ShahBalen" imagelink={"https://pbs.twimg.com/profile_images/1471116473594638344/fIwtQ2y-_bigger.jpg"} />
  </Grid>
  <Grid item xs={6}>
  <GaugeCard percent={0.4} name="@RabindraMishra" imagelink={"https://pbs.twimg.com/profile_images/1337772485702402050/QKt3EKcY_bigger.jpg"} />
  </Grid>

  <Grid item xs={6}>
  <GaugeCard percent={0.81} name="@hamrorabi" imagelink={"https://pbs.twimg.com/profile_images/1367813014179569664/SsUy2BT9_bigger.jpg"} />
  </Grid>

  <Grid item xs={6}>
  <GaugeCard percent={0.86} name="@narayanwagle" imagelink={"https://pbs.twimg.com/profile_images/1564275767252361216/ecUmry20_bigger.jpg"} />
  </Grid>
</Grid>


    </Container>
  )
};
