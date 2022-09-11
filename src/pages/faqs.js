import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Container from '@mui/material/Container';
import { faqData } from './faq_data';

function Row(props) {
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
        <Typography variant="subtitle2" gutterBottom>
       {props.question}
      </Typography>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="body" component="div">
                {props.answer}
              </Typography>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export function Faqs({sectionName, sectionData}) {
  return (
    <TableContainer component={Paper} sx={{marginBottom: '20px'}}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell width="5%"/>
            <TableCell> <Typography variant="h6">
            {sectionName}
        </Typography></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sectionData.map((row) => (
            <Row key={row.id} question={row.question} answer={row.answer} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default function FAQs() {
  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      {
        faqData.map((section) => {
          return (
            <Faqs sectionName={section.section} sectionData={section.data} />
          )
        })
      }
    </Container>
  )
};
