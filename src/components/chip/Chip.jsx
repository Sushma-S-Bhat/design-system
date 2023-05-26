import { Chip as MuiChip } from "@mui/material";

import React from 'react'

export const Chip = ({ variant='filled', color, size, label,icon, ...props }) => {
    // const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
    return (
      <MuiChip variant={variant} size={size} color={color} >{label}</MuiChip>
    );
  };
  
  Chip.propTypes = {
    variant: PropTypes.oneOf(['filled','outlined']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    color: PropTypes.string,
    onClick: PropTypes.func,
  };
  
  Chip.defaultProps = {
    backgroundColor: null,
    primary: false,
    size: 'medium',
    onClick: undefined,
  };