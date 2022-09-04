import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Chart from './components/Chart';

import Network from './components/Network';
import Copyright from './components/Copyright';
const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const mdTheme = createTheme();

function DashboardContent() {

}

export default function Dashboard() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
              <Chart />
              <Network />
              <WordCloud data_url={"https://raw.githubusercontent.com/nsuman/SanzalWeb/main/src/user_data.json"}
                wordField="name" weightField="followers_count" />

              <WordCloud data_url={"https://raw.githubusercontent.com/nsuman/SanzalWeb/main/src/user_data.json"}
                wordField="name" weightField="following_count" />


              <Copyright sx={{ pt: 4 }} />
            </Container>
  )
};
