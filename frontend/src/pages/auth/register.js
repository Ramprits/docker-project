import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { useForm } from "react-hook-form";
import { userRegister } from "../../redux/actions/user.actions";
import MetaData from "../../components/MetaData";

export default function RegisterForm(props) {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors, watch } = useForm({
    reValidateMode: "onChange",
    defaultValues: {
      firstName: "ramprit",
      lastName: "sahani",
      email: "rampritsahani@gmail.com",
      password: "Ramprit@1234",
    },
  });
  const password = useRef({});
  password.current = watch("password", "");
  const content = {
    brand: {
      image:
        "https://bootstrapshuffle.com/mui-assets/img/logo-pied-piper-icon.png",
      width: 40,
    },
    header: "Create a new account",
    terms: "I agree to the terms of use and privacy policy.",
    "01_primary-action": "Sign up",
    "01_secondary-action": "Already have an account? Sign in",
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
    dispatch(userRegister(data));
  };

  return (
    <Container maxWidth="xs">
      <MetaData title="Register Page" />
      <Box pt={8} pb={10}>
        <Box mb={3} textAlign="center">
          <Link href="#" variant="h4" color="inherit" underline="none">
            {brand}
          </Link>
          <Typography variant="h5" component="h2">
            {content["header"]}
          </Typography>
        </Box>
        <Box>
          <form noValidate onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  fullWidth
                  inputRef={register({ required: true })}
                  error={!!errors.firstName}
                  helperText={`${
                    !!errors.firstName ? "Please enter your first name" : ""
                  }`}
                  autoComplete="firstName"
                  name="firstName"
                  label="First name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  fullWidth
                  inputRef={register({ required: true })}
                  error={!!errors.lastName}
                  helperText={`${
                    !!errors.lastName ? "Please enter your last name" : ""
                  }`}
                  name="lastName"
                  label="Last name"
                  autoComplete="lname"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  inputRef={register({ required: true })}
                  error={!!errors.email}
                  helperText={`${
                    !!errors.email ? "Please enter your email address" : ""
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
                  helperText={`${
                    !!errors.password ? "Please enter your password" : ""
                  }`}
                  name="password"
                  label="Password"
                  type="password"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  inputRef={register({
                    validate: (value) =>
                      value === password.current ||
                      "The passwords do not match",
                  })}
                  error={!!errors.confirmPassword}
                  helperText={`${
                    !!errors.confirmPassword
                      ? "Please enter your confirm password"
                      : ""
                  }`}
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                />
              </Grid>

              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox name="terms" value="1" color="primary" />}
                  label={content["terms"]}
                />
              </Grid>
            </Grid>
            <Box my={2}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                {content["01_primary-action"]}
              </Button>
            </Box>
            <Box textAlign="right">
              <Link
                onClick={() => props.history.push("/login")}
                variant="body2"
              >
                {content["01_secondary-action"]}
              </Link>
            </Box>
          </form>
        </Box>
      </Box>
    </Container>
  );
}
