import { Box, Button, Hidden, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import imgNotFound from "../../../assets/images/not-found.png";
import CustomerLayout from "../../../component/customer/CustomerLayout/CustomerLayout";
import { useStyles } from "./styles";

const NotFound = () => {
  const classes = useStyles();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Reno - Not Found</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <CustomerLayout>
        <Box className={classes.notFound}>
          <Hidden mdDown implementation="js">
            <Box className={classes.imgContainer}>
              <img src={imgNotFound} alt="not-found" className={classes.img} />
            </Box>
          </Hidden>
          <Box className={classes.content}>
            <Typography className={classes.heading} component="h2">
              Không tìm thấy trang
            </Typography>
            <Typography component="h2" className={classes.link}>
              Không tìm thấy trang
            </Typography>
            <Typography component="h2" className={classes.link}>
              Không tìm thấy trang
            </Typography>
            <Button component={Link} to="/" className={classes.action}>
              Trở về trang chủ
            </Button>
          </Box>
        </Box>
      </CustomerLayout>
    </>
  );
};

export default NotFound;
