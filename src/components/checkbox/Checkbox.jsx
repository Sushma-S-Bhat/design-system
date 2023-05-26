import { Checkbox as MuiCheckbox, FormControlLabel } from '@mui/material';
import React from 'react';

const Checkbox = ({ label, name, checked, onChange, ...style }) => {
  return (
    <FormControlLabel
      control={
        <MuiCheckbox
          checked={checked}
          onChange={onChange}
          name={name}
          {...style}
        />
      }
      label={label}
    />
  );
};

export default Checkbox;
Checkbox.propTypes = {
   
    checked: PropTypes.bool,
   
    label: PropTypes.string.isRequired,
    
 
    name: PropTypes.string.isRequired,
    
    onChange: PropTypes.func,
  };
  
  Checkbox.defaultProps = {
    label: 'checkbox',
    checked: false,
    name: 'checkbox',
    onChange: undefined,
  };