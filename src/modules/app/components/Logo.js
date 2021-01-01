import React from 'react';
import EcoIcon from '@material-ui/icons/Eco';

const Logo1 = props => {
  return <img alt="Logo" src="/static/logo.png" {...props} />;
};

const Logo = props => {
  return <EcoIcon />;
};

export default Logo;
