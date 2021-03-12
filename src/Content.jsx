import React from "react";
import Services from "./Services";
import { Grid } from "@material-ui/core";
import servicesList from "./constants";

const Content = () => {
  const getServices = servicesObj => {
    return (
      <Grid item xs={12} sm={4}>
        <Services {...servicesObj} />
      </Grid>
    );
  };

  return (
    <Grid container spacing={2}>
      {servicesList.map(servicesObj => getServices(servicesObj))}
    </Grid>
  );
};

export default Content;
