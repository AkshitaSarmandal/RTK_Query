"use client";

import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { Product } from "@/types";

interface HomePageProps {
  productData: Product[] | undefined;
}

export default function HomePage({ productData }: HomePageProps) {
  return (
    <>
      <div>
        <Grid container spacing={2} sx={{ mt: "3rem" }}>
          {productData?.map((item: any) => (
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={item?.images[0]}
                    alt={item?.category}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item?.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item?.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions sx={{ display: "flex", justifyContent: "center" }}>
                  <Button
                    size="small"
                    sx={{
                      backgroundColor: "black",
                      color: "#ffffff",
                      textTransform: "capitalize",
                      "&:hover": { backgroundColor: "black" },
                    }}
                  >
                    View Blog
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
}
