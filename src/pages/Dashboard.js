import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Divider } from '@mui/material';
import MediaCard from '../components/Cards';
import { WordCloud } from '@ant-design/plots';

export default function Dashboard() {
  const most_follwed = [
    {
      "followers_count": 1666378,
      "following_count": 0,
      "tweet_count": 38547,
      "username": "bbcnepali",
      "name": "BBC News Nepali",
      "profile_image_url": "https://pbs.twimg.com/profile_images/940234138010886145/pFXWgnqn_normal.jpg",
      "category": "media_outlets"
    },
    {
      "followers_count": 1449410,
      "following_count": 964,
      "tweet_count": 13427,
      "username": "brb1954",
      "name": "Baburam Bhattarai",
      "profile_image_url": "https://pbs.twimg.com/profile_images/741978612434227201/UkmkHiYy_normal.jpg",
      "category": "politicians"
    },
    {
      "followers_count": 1214898,
      "following_count": 1249,
      "tweet_count": 3248,
      "username": "thapagk",
      "name": "Gagan Thapa",
      "profile_image_url": "https://pbs.twimg.com/profile_images/1294237288390512640/RktZchMv_normal.jpg",
      "category": "politicians"
    }
  ];

  const most_tweets = [
    {
      "followers_count": 1120847,
      "following_count": 62,
      "tweet_count": 255971,
      "username": "Online_khabar",
      "name": "Onlinekhabar",
      "profile_image_url": "https://pbs.twimg.com/profile_images/1358396653883990016/5aUgRddG_normal.jpg",
      "category": "media_outlets"
    },
    {
      "followers_count": 526803,
      "following_count": 8,
      "tweet_count": 252097,
      "username": "setopati",
      "name": "Setopati",
      "profile_image_url": "https://pbs.twimg.com/profile_images/588936040888438784/RxOOcrCe_normal.jpg",
      "category": "media_outlets"
    },
    {
      "followers_count": 449197,
      "following_count": 1,
      "tweet_count": 237355,
      "username": "Rato_pati",
      "name": "RatoPati",
      "profile_image_url": "https://pbs.twimg.com/profile_images/1535875823869509635/Dd-LGw3k_normal.jpg",
      "category": "media_outlets"
    }
  ]

  const trending = [
    {
      word: "??????????????????????????????",
      count: 90
    },
    {
      word: "?????????????????????",
      count: 66
    },
    {
      word: "?????????????????????",
      count: 150
    },
    {
      word: "????????????????????????",
      count: 140
    },
    {
      word: "??????????????????????????????",
      count: 180
    },
    {
      word: "????????????????????????",
      count: 190
    },
    {
      word: "???????????????????????????",
      count: 70
    },
    {
      word: '??????',
      count: 90
    },
    {
      word: "?????????????????????",
      count: 150
    }
  ]
  return (
    <Container maxWidth="lg" sx={{ mt: 2, mb: 2 }}>

      <Box sx={{ display: 'flex' }}>
        <div style={{ width: '40%', marginRight: '20px' }}>
          <Paper style={{ padding: '15px', marginBottom:'20px' }}>
            <Typography variant="h6">
              Sanzal
            </Typography>

            <Divider></Divider>
            <Typography variant="body1">
              This website is a project by Team Sanzal for Incubate  Nepal 
              2022. We aimed to gain insight about Nepali twitter by analyzing the 
              public data about twitter users in Nepal. The data for the project was obtained from the  
              freely available twitter API.
              </Typography>
              <Typography variant="body1">
              We tracked some of the most popular twitter users that drive the 
              public conversation in the platform and analyzed their tweets and 
              visualized the results in this website. 
              </Typography>
          
          </Paper>

          <b>
            <Typography variant="h6" >
              Trending topics
            </Typography>
          </b>

          <Paper style={{padding: '5px'}}>
            <WordCloud {...{ data: trending, wordField: 'word', weightField: 'count' }} />
            </Paper>
        </div>

        <div style={{ width: '50%', }}>
          <b>
            <Typography variant="h6">
              Accounts with most followers
            </Typography>
          </b>
          {most_follwed.map((element, i) => <Paper style={{ marginBottom: '10px' }}>
            <MediaCard name={element.name} paramCount={element[`followers_count`]} param={'followers'} img={element.profile_image_url.replace('_normal', '_bigger')} index={i + 1} username={element.username} />
          </Paper>)
          }
          <b>
            <Typography variant="h6" >
              Accounts with most tweets
            </Typography>
          </b>

          {most_tweets.map((element, i) => <Paper style={{ marginBottom: '10px' }}>
            <MediaCard name={element.name} paramCount={element[`followers_count`]} param={'followers'} img={element.profile_image_url.replace('_normal', '_bigger')} index={i + 1} username={element.username} />
          </Paper>)
          }

       
   

        </div>
      </Box>
    </Container>
  )
};