import React from "react";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useForm } from "react-hook-form";
import {
  loginWithEmailAndPassword,
  loginWithGoogle,
} from "../../redux/actions/user.actions";
import MetaData from "../../components/MetaData";

const useStyles = makeStyles((theme) => ({
  tertiaryAction: {
    [theme.breakpoints.up("sm")]: {
      textAlign: "right",
    },
  },
  actions: {
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(3),
    },
  },
  loginButtons: {
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  btnLoginWithEmail: {
    width: "120px",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      marginTop: theme.spacing(2),
    },
  },
  btnLoginWithGoogle: {
    width: "200px",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      marginTop: theme.spacing(2),
    },
  },
}));

export default function LoginForm(props) {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm({
    reValidateMode: "onSubmit",
    defaultValues: {
      email: "rampritsahani@gmail.com",
      password: "Ramprit@1234",
    },
  });
  const classes = useStyles();
  const content = {
    brand: {
      image:
        "https://bootstrapshuffle.com/mui-assets/img/logo-pied-piper-icon.png",
      width: 40,
    },
    "02_header": "Welcome back!",
    "02_primary-action": "Sign in",
    "02_primary-google": "Sign in with google",
    "02_secondary-action": "Don't have an account?",
    "02_tertiary-action": "Forgot password?",
    ...props.content,
  };

  let brand;

  if (content.brand.image) {
    brand = (
      <img src={content.brand.image} alt="" width={content.brand.width} />
    );
  } else {
    brand = content.brand.text || "";
  }
  const onSubmit = (data) => {
    dispatch(loginWithEmailAndPassword(data));
  };

  return (
    <Container maxWidth="xs">
      <MetaData title="Login Page" />
      <Box pt={8} pb={10}>
        <Box mb={3} textAlign="center">
          <Link href="#" variant="h4" color="inherit" underline="none">
            {brand}
          </Link>
          <Typography variant="h5" component="h2">
            {content["02_header"]}
          </Typography>
        </Box>
        <Box>
          <form noValidate onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  inputRef={register({ required: true })}
                  error={!!errors.email}
                  helperText={`${
                    !!errors.password ? "Please enter your email address" : ""
                  }`}
                  name="email"
                  label="Email address"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  inputRef={register({ required: true })}
                  error={!!errors.password}
                  name="password"
                  label="Password"
                  type="password"
                  helperText={`${
                    !!errors.password ? "Please enter your password" : ""
                  }`}
                  autoComplete="current-password"
                />
              </Grid>
            </Grid>
            <Box my={2} className={classes.loginButtons}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.btnLoginWithEmail}
              >
                {content["02_primary-action"]}
              </Button>
              <Button
                type="button"
                fullWidth
                variant="contained"
                onClick={() => dispatch(loginWithGoogle())}
                className={classes.btnLoginWithGoogle}
                color="primary"
              >
                {content["02_primary-google"]}
              </Button>
            </Box>
            <Grid container spacing={2} className={classes.actions}>
              <Grid item xs={12} sm={6}>
                <Link
                  onClick={() => props.history.push("/register")}
                  variant="body2"
                >
                  {content["02_secondary-action"]}
                </Link>
              </Grid>
              <Grid item xs={12} sm={6} className={classes.tertiaryAction}>
                <Link
                  onClick={() => props.history.push("/forgot-password")}
                  variant="body2"
                >
                  {content["02_tertiary-action"]}
                </Link>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Box>
    </Container>
  );
}
