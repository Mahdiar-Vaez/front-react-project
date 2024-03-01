import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import "./style.css";

export default function Blog() {
  return (
    <Box
      my={3}
      sx={{
        padding: "0 10%",
      }}
    >
      <Box display={"flex"} gap={20}>
        {" "}
        <Card
          sx={{
            maxWidth: "50%",
            height: "450px",
            position: "relative",
          }}
        >
          <CardActionArea>
            <CardMedia
              component={"img"}
              sx={{
                width: "100%",
                height: "270px",
              }}
              src="./assets/b1.webp"
            />
            <Button
              variant="contained"
              sx={{
                position: "absolute",
                top: "30%",
                height: "100px",
              }}
              size="large"
              color="success"
            >
              15 JAN
            </Button>
            <CardContent>
              <Typography fontFamily={"Alegreya"} variant="h4" fontWeight={600}>
                Google inks pact for new 35-storey office
              </Typography>
              <Typography fontFamily={"Alegreya"} fontSize={20} variant="body2">
                That dominion stars lights dominion divide years for fourth have
                don't stars is that he earth it first without heaven in place
                seed it second morning saying.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Box
          sx={{
            width: "35%",

            height: 450,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "20px",
          }}
        >
          <Stack
            sx={{
              width: "100%",
              height: "50%",
              alignItems: "center",
              justifyContent: "center",
              gap: "20px",
              backgroundColor: "rgba(191, 234, 124,.4)",
            }}
          >
            <TextField
              variant="outlined"
              color="success"
              label="Search Keyboard"
            />
            <Button
              color="success"
              sx={{
                width: "25%",
              }}
              variant="outlined"
            >
              Search
            </Button>
          </Stack>
          <Stack
            sx={{
              width: "100%",
              height: "230px",
              backgroundColor: "rgba(191, 234, 124,.4)",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              borderBottom={"1px solid green"}
              fontFamily={"Alegreya"}
              fontWeight={800}
            >
              Categories
            </Typography>
            <Button
              size="small"
              color="success"
              sx={{ fontFamily: "Alegreya" }}
            >
              Shoes
            </Button>
            <Button
              size="small"
              color="success"
              sx={{ fontFamily: "Alegreya" }}
            >
              Perfume
            </Button>
            <Button
              size="small"
              color="success"
              sx={{ fontFamily: "Alegreya" }}
            >
              Advices
            </Button>
            <Button
              size="small"
              color="success"
              sx={{ fontFamily: "Alegreya" }}
            >
              Suggestion
            </Button>
            <Button
              size="small"
              color="success"
              sx={{ fontFamily: "Alegreya" }}
            >
              Fitness
            </Button>
          </Stack>
        </Box>
      </Box>
      <Box display={"flex"} gap={20}>
        <Card
          sx={{
            maxWidth: "50%",
            height: "420px",
            marginTop: "20px",
          }}
        >
          <CardActionArea>
            <CardMedia
              component={"img"}
              sx={{
                width: "100%",
                height: "270px",
              }}
              src="./assets/bl2.webp"
            />
            <CardContent>
              <Typography fontFamily={"Alegreya"} variant="h4" fontWeight={600}>
                Google inks pact for new 35-storey office
              </Typography>
              <Typography fontFamily={"Alegreya"} fontSize={20} variant="body2">
                That dominion stars lights dominion divide years for fourth have
                don't stars is that he earth it first without heaven in place
                seed it second morning saying.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Stack
          sx={{
            width: "35%",
            height: "420px",
            marginTop: "20px",
            backgroundColor: "rgba(191, 234, 124,.4)",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <Typography
            borderBottom={"1px solid green"}
            fontFamily={"Alegreya"}
            fontWeight={600}
          >
            Recent Post
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
          >
            {" "}
            <Stack
              sx={{
                cursor: "pointer",
                "&:hover": {
                  color: "green",
                },
              }}
              gap={2}
              direction={"row"}
            >
              <Box component={"img"} src="./assets/post1.jpg.webp" />{" "}
              <Stack>
                {" "}
                <Typography fontSize={20}>From life was your fish</Typography>
                <span>2 hours ago</span>
              </Stack>
            </Stack>
            <Stack
              sx={{
                cursor: "pointer",
                "&:hover": {
                  color: "green",
                },
              }}
              gap={2}
              direction={"row"}
            >
              <Box component={"img"} src="./assets/post2.jpg.webp" />{" "}
              <Stack>
                {" "}
                <Typography fontSize={20}>The amazing hubble</Typography>
                <span>2 hours ago</span>
              </Stack>
            </Stack>
            <Stack
              sx={{
                cursor: "pointer",
                "&:hover": {
                  color: "green",
                },
              }}
              gap={2}
              direction={"row"}
            >
              <Box component={"img"} src="./assets/post3.jpg.webp" />{" "}
              <Stack>
                <Typography fontSize={20}>Astronomy Or Astrology</Typography>
                <span>4 hours ago</span>
              </Stack>
            </Stack>
            <Stack
              sx={{
                cursor: "pointer",
                "&:hover": {
                  color: "green",
                },
              }}
              gap={2}
              direction={"row"}
            >
              <Box component={"img"} src="./assets/post4.jpg.webp" />{" "}
              <Stack>
                <Typography fontSize={20}>Asteroids Telescope</Typography>
                <span>2 days ago</span>
              </Stack>
            </Stack>
          </Box>
          <Box component={"img"} src="" />
        </Stack>
      </Box>
      <Box display={"flex"} gap={20}>
        <Card
          sx={{
            maxWidth: "50%",
            height: "420px",
            marginTop: "20px",
          }}
        >
          <CardActionArea>
            <CardMedia
              component={"img"}
              sx={{
                width: "100%",
                height: "270px",
              }}
              src="./assets/bl3.webp"
            />
            <CardContent>
              <Typography fontFamily={"Alegreya"} variant="h4" fontWeight={600}>
                Google inks pact for new 35-storey office{" "}
              </Typography>
              <Typography fontFamily={"Alegreya"} fontSize={20} variant="body2">
                That dominion stars lights dominion divide years for fourth have
                don't stars is that he earth it first without heaven in place
                seed it second morning saying.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Box
          sx={{
            width: "35%",
            height: "420px",
            display: "flex",
            marginTop: "20px",
            flexDirection: "column",
            backgroundColor: "rgba(191, 234, 124,.4)",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <Typography borderBottom={"1px solid green"}>
            Instagram Feeds
          </Typography>
          <Box
            sx={{
              width: "70%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "20px",
              "&:hover img": {
                cursor: "pointer",
              },
            }}
          >
            <Box component={"img"} src="./assets/w1.webp" />
            <Box component={"img"} src="./assets/w2.webp" />
            <Box component={"img"} src="./assets/w3.webp" />
            <Box component={"img"} src="./assets/w4.webp" />
            <Box component={"img"} src="./assets/w6.webp" />
            <Box component={"img"} src="./assets/w5.webp" />
          </Box>
        </Box>
      </Box>
      <Card
          sx={{
            maxWidth: "50%",
            height: "420px",
            marginTop: "20px",
          }}
        >
          <CardActionArea>
            <CardMedia
              component={"img"}
              sx={{
                width: "100%",
                height: "270px",
              }}
              src="./assets/bl4.webp"
            />
            <CardContent>
              <Typography fontFamily={"Alegreya"} variant="h4" fontWeight={600}>
                Google inks pact for new 35-storey office{" "}
              </Typography>
              <Typography fontFamily={"Alegreya"} fontSize={20} variant="body2">
                That dominion stars lights dominion divide years for fourth have
                don't stars is that he earth it first without heaven in place
                seed it second morning saying.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
    </Box>
  );
}
