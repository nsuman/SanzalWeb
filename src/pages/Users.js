import * as React from 'react';
import Container from '@mui/material/Container';
import MediaCard from '../components/Cards';
import Grid from '@mui/material/Grid';
import ControlledOpenSelect from '../components/Select';

export default function Users() {
  const [isDecending, setDecending] = React.useState('descending');
  const [param, setParam] = React.useState('followers');

  const rerender = React.useRef(0)
  rerender.current += 1
  const data = React.useRef([])

  if (isDecending === 'descending') {
    if (param === 'tweet') {
      data.current = data.current.sort((a, b) => b.tweet_count - a.tweet_count)
    } else if (param === 'followers') {
      data.current = data.current.sort((a, b) => b.followers_count - a.followers_count)
    } else {
      data.current = data.current.sort((a, b) => b.following_count - a.following_count)
    }
  } else {
    if (param === 'tweet') {
      data.current = data.current.sort((a, b) => a.tweet_count - b.tweet_count)
    } else if (param === 'followers') {
      data.current = data.current.sort((a, b) => a.followers_count - b.followers_count)
    } else {
      data.current = data.current.sort((a, b) => a.following_count - b.following_count)
    }
  }

  React.useEffect(() => {
    fetch('https://raw.githubusercontent.com/nsuman/SanzalWeb/demog/src/user_data.json')
      .then((response) => response.json())
      .then((json) => {
        data.current = json.sort((a, b) => b.followers_count - a.followers_count)
      })
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  }, []);

  const cards = data.current.map((element, i) => {
    return <MediaCard name={element.name} paramCount={element[`${param}_count`]} param={param} img={element.profile_image_url.replace('_normal', '_bigger')} index={i + 1} username={element.username} />
  })
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <div style={{display: 'flex'}}>
      <ControlledOpenSelect 
        id="sortorder"
        selectedValue={isDecending} 
        setSelectedValue={setDecending} 
        menuItems={[{ id: 'ascending', label: 'Low To High'}, {id: 'descending', label: 'High to Low'}]}
        label="Order"
      />

      <ControlledOpenSelect 
        id="sortby"
        selectedValue={param} 
        setSelectedValue={setParam} 
        menuItems={[{id: 'followers', label: 'followers'} , { id: 'following', label: 'following'}, {id: 'tweet', label: 'tweet'}]}
        label="By"
      />
      </div>

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
