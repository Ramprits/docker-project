import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Navigation from "../components/vertical-navs/VerticalNav";

const useStyles = makeStyles((theme) => ({
  halfLg: {
    [theme.breakpoints.up("lg")]: {
      maxWidth: theme.breakpoints.values["lg"] / 2,
    },
  },
  firstBox: {
    [theme.breakpoints.up("lg")]: {
      marginLeft: "auto",
      paddingRight: theme.spacing(6),
    },
  },
  secondBox: {
    [theme.breakpoints.up("lg")]: {
      paddingLeft: theme.spacing(6),
    },
  },
  fullHeightImage: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    objectFit: "cover",
    height: 768,
    width: "100%",
  },
}));

export default function Contact(props) {
  const classes = useStyles();

  const content = {
    header: "Let's talk about the future",
    description:
      "We're here to answer your questions and discuss the decentralized future of the internet.",
    terms: "I agree to the terms of use and privacy policy.",
    "primary-action": "Submit",
    image:
      "https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    ...props.content,
  };

  return (
    <Navigation
      content={{ title: "Contact page" }}
      bucketMain={[
        <Grid container>
          <Grid item xs={12} md={6}>
            <Box pt={10} pb={8} display="flex" className={classes.firstBox}>
              <Container>
                <Box mb={4}>
                  <Typography variant="h4" component="h2" gutterBottom={true}>
                    {content["header"]}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="textSecondary"
                    paragraph={true}
                  >
                    {content["description"]}
                  </Typography>
                </Box>

                <form noValidate>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        autoComplete="fname"
                        name="firstName"
                        id="firstName"
                        label="First name"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name="lastName"
                        id="lastName"
                        label="Last name"
                        autoComplete="lname"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name="email"
                        id="email"
                        label="Email address"
                        autoComplete="email"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name="company"
                        id="company"
                        label="Company"
                        autoComplete="company"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        required
                        multiline
                        rows={5}
                        fullWidth
                        autoComplete="message"
                        name="message"
                        id="message"
                        label="Message"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormControlLabel
                        control={
                          <Checkbox name="terms" value="1" color="primary" />
                        }
                        label={content["terms"]}
                      />
                    </Grid>
                  </Grid>
                  <Box mt={2}>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                    >
                      {content["primary-action"]}
                    </Button>
                  </Box>
                </form>
              </Container>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box position="relative" height={768}>
              <img
                className={classes.fullHeightImage}
                src={content["image"]}
                alt=""
              />
            </Box>
          </Grid>
        </Grid>,
      ]}
    ></Navigation>
  );
}
