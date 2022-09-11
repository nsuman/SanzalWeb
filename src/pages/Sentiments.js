import * as React from 'react';
import Container from '@mui/material/Container';
import ScatterChart from '../components/Scatter'

export default function Sentiments() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
     <ScatterChart />
    </Container>
  )
};
