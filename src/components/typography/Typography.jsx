import { Typography as MuiTypography } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";

export const Typography = ({ variant, component, ...props }) => {
  return <MuiTypography variant={variant} component={component}></MuiTypography>;
};

Typography.propTypes = {
  variant: PropTypes.string,
  component: PropTypes.string,
};

Typography.defaultProps = {
  variant: "body",
  component: "p",
};
