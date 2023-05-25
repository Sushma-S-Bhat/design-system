import { Avatar as MuiAvatar } from '@mui/material'
import React from 'react'

export const Avatar = ({ variant='contained', color, size, label, ...props }) => {
    // const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
    return (
      <MuiAvatar variant={variant} size={size} color={color} >{label}</MuiAvatar>
    );
  };
  
  Button.propTypes = {
    /**
     * Is this the principal call to action on the page?
     */
    primary: PropTypes.bool,
    /**
     * What background color to use
     */
    backgroundColor: PropTypes.string,
    /**
     * How large should the button be?
     */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    /**
     * Button contents
     */
    label: PropTypes.string.isRequired,
    /**
     * Optional click handler
     */
    onClick: PropTypes.func,
  };
  
  Avatar.defaultProps = {
    backgroundColor: null,
    primary: false,
    size: 'medium',
    onClick: undefined,
  };
  