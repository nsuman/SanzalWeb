import * as React from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function MediaCard({ img, username, paramCount, name, index }) {
  return (
    <Card sx={{ height: 110, minWidth: 250 }}>
      <CardContent sx={{ display: 'flex' }}>
        <div style={{ maxWidth: '25%', marginRight: '10px', alignContent: 'center', justifyContent: 'center' }}>
          <Typography variant="h4" color="text.secondary">
            {index.toString()}
          </Typography>
        </div>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent:"space-between" }}>
            <Typography variant="h5">
              {`${paramCount}`}
            </Typography>
            <div height="20px"></div>
          <Typography variant="body2" color="text.secondary">
              {name.toString()}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              @{username.toString()}
            </Typography>
          </div>
          <CardMedia component="img" image={img} sx={{ maxWidth: 75, maxHeight: 75, borderRadius: 2 }} />
        </Grid>
      </CardContent>
    </Card>
  );
}