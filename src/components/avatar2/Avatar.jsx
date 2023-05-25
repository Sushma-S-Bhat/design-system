import { Avatar as MuiAvatar } from '@mui/material'
import React from 'react'
import PropTypes from 'prop-types';


export const Avatar2 = ({ variant='circular', size, ...props }) => {
    // const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
    return (
      <MuiAvatar variant={variant} size={size}></MuiAvatar>
    );
  };
  
  Avatar2.propTypes = {
   
    variant: PropTypes.string,
  
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    
  };
  
  Avatar2.defaultProps = {
    variant:'circular',
    size: 'medium',
  };
  