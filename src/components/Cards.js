import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
export default function MediaCard({img, username, numOfFollowers, index}) {
  return (
    <Card sx={{ maxWidth: 340 }}>
      <CardMedia component="img" height="190" image={img} alt="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {`${index}. ${numOfFollowers} followers`}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          @{username.toString()}
        </Typography>
      </CardContent>
    </Card>
  );
}