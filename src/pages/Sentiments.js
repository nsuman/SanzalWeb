import * as React from 'react';
import Container from '@mui/material/Container';
import GaugeCard from '../components/Gauge'
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import SelectMultiple from '../components/MultipleSelect';

export default function Sentiments() {
  const data = [
    {
        "username": "cmprachanda",
        "label": "Prachanda",
        "sentiment_score": 0.5718651013641075,
        "histogram": [  2,   0,   9,   9,  10,  41,  16, 131, 100,  96, 123, 121, 118,
        69,  27,  91,  49,   9,  47,  34],
        "profile_image_url": "https://pbs.twimg.com/profile_images/1541030237915340801/YpXU4s8M_normal.jpg"
    },
    {
        "username": "hamrorabi",
        "label": "Rabi Lamichhane",
        "sentiment_score": 0.6140913676175939,
        "histogram":[ 1,  3,  3,  2,  4,  5, 22, 18, 30, 32, 37, 23, 34, 17, 29,  9,  8,
        7,  5, 13],
        "profile_image_url": "https://pbs.twimg.com/profile_images/1367813014179569664/SsUy2BT9_normal.jpg"
    },
    {
        "username": "MilanPandey",
        "label": "Milan Pandey",
        "sentiment_score": 0.6043250367950763,
        "histogram": [ 2,  4,  9,  3, 10, 60, 34, 34, 39, 55, 37, 33, 22, 20, 23, 14, 21,
        50,  5, 23],
        "profile_image_url": "https://pbs.twimg.com/profile_images/1366018568823922693/cnPkcD06_normal.jpg"
    },
    {
        "username": "ShahBalen",
        "label": "Balen Shah",
        "sentiment_score": 0.5562871548881879,
        "histogram": [ 1,  3,  3,  9,  7, 35, 20, 46, 28, 30, 46, 48, 21, 22, 25,  9,  8,
        10,  4,  7],
        "profile_image_url": "https://pbs.twimg.com/profile_images/1471116473594638344/fIwtQ2y-_normal.jpg"
    },
    {
        "username": "ncp_madhavnepal",
        "label": "Madhav Kumar Nepal",
        "sentiment_score": 0.5667636843984105,
        "histogram": [  3,   0,  10,   9,   6,  39,  18, 144,  93,  86, 121, 130, 107,
        65,  29,  72,  53,  12,  47,  30],
        "profile_image_url": "https://pbs.twimg.com/profile_images/628469242187223041/1csoeY96_normal.jpg"
    },
    {
        "username": "SherBDeuba",
        "label": "Sher Bahadur Deuba",
        "sentiment_score": 0.566866962360226,
        "histogram": [ 1,  3,  4,  3,  7,  4, 68, 32, 51, 34, 48, 41, 25, 19, 24,  7, 13,
        32,  7, 15],
        "profile_image_url": "https://pbs.twimg.com/profile_images/1415551406900084736/07DBJXYd_normal.jpg"
    },
    {
        "username": "ranju_darshana",
        "label": "Ranju Darshana",
        "sentiment_score": 0.5345897122672985,
        "histogram":[ 2,  3,  4,  7,  8, 63, 20, 43, 27, 30, 45, 42, 15, 18, 21, 10,  6,
        11,  3,  7],
        "profile_image_url": "https://pbs.twimg.com/profile_images/1533144722813833216/kTQLXAD9_normal.jpg"
    },
    {
        "username": "kpsharmaoli",
        "label": "K P Sharma Oli",
        "sentiment_score": 0.5726612826479999,
        "histogram": [ 1,  6,  8,  3, 19, 15, 73, 48, 71, 55, 91, 80, 63, 50, 64, 22, 22,
        20,  6, 25],
        "profile_image_url": "https://pbs.twimg.com/profile_images/1079795947658457095/rkOUKYAV_normal.jpg"
    },
    {
        "username": "thapagk",
        "label": "Gagan Thapa",
        "sentiment_score": 0.6111600009322106,
        "histogram": [ 12,   2,  14,  26,  22, 113,  90, 264, 229, 287, 456, 464, 341,
        262,  89, 290, 154,  35, 322, 195],
        "profile_image_url": "https://pbs.twimg.com/profile_images/1294237288390512640/RktZchMv_normal.jpg"
    },
    {
        "username": "KTnepal",
        "sentiment_score": 0.6061674477021916,
        "label": "Kamal Thapa",
        "histogram":[ 5,  1,  2,  2,  5, 11, 23, 21, 24, 42, 39, 27, 33,  6, 31, 10,  6,
        5,  5, 11],
        "profile_image_url": "https://pbs.twimg.com/profile_images/1323207422081556481/SwYfSyue_normal.jpg"
    },
    {
        "username": "brb1954",
        "label": "Baburam Bhattarai",
        "sentiment_score": 0.5436962909681385,
        "histogram":[ 3,  3,  5,  7,  8, 67, 26, 55, 33, 39, 53, 55, 27, 22, 23, 14,  8,
        15,  4,  8],
        "profile_image_url": "https://pbs.twimg.com/profile_images/741978612434227201/UkmkHiYy_normal.jpg"
    },
    {
        "username": "PradeepgyawaliK",
        "label": "Pradeep Kumar Gyawali",
        "sentiment_score": 0.5861982810837727,
        "histogram": [ 2,  3,  6,  2,  7, 60, 26, 28, 25, 49, 25, 29, 18, 18, 14, 11, 16,
        28,  4, 16],
        "profile_image_url": "https://pbs.twimg.com/profile_images/1465877026892509184/tocqBBf2_normal.jpg"

    },
    {
        "username": "nksthaprakash",
        "label": "Narayan Kaji Shrestha",
        "sentiment_score": 0.5378726422836501,
        "histogram": [ 3,  2,  2,  3,  6, 40, 11, 25, 17, 22, 38, 33, 12, 15, 10,  7,  4,
        7,  2,  3],
        "profile_image_url": "https://pbs.twimg.com/profile_images/456438160944136193/ePgSMScw_normal.jpeg"
    }
]

  let dom = []

  let [currentData, setCurrentData] = React.useState([data[0], data[8]])
    dom = currentData.map((element) => {
      return (
        <Grid item xs={6}>
          <GaugeCard percent={element.sentiment_score} name={element.label} imagelink={element.profile_image_url.replace('_normal', '_bigger')} hist={element.histogram} />
        </Grid>
      )
    })

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="subtitle" gutterBottom>
        A tweet has a sentiment score between -1 and 1. A sentiment score of -1 implies a very negative sentiment
        towards the user and sentiment score of +1 is very positve sentiment. A sentiment score of 0 is neutral. 
        </Typography>

        <div style={{height: '5px'}}></div>
      <Typography variant="subtitle" gutterBottom>
        The histogram shows the number of tweets in each sentiment score bucket. Red color indicates 
        negative sentiment tweets while green color indicate positive sentiment tweets.
    </Typography>
    <div style={{height: '5px'}}></div>
    <Typography variant="subtitle" gutterBottom>
       We calculate the sentiment score of a user using sentiment score of their tweets. 
      The sentiment score of a user is the percentage of tweets replies having sentiment score of 0.5 or more.
      Choose the user from the drop down to see the user's sentiment score. 
      </Typography>
      <div style={{height: '5px'}}></div>
      <Divider />
      <div style={{ height: '20px' }}></div>
      <SelectMultiple selectOptions={data} onChange={(event, newValue)=> {
      setCurrentData(newValue)}} currentData={currentData}/>

      
      <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {dom}
      </Grid>
    </Container>
  )
};
