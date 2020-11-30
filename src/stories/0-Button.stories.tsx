import React, { ReactElement } from 'react';
import Button from '@material-ui/core/Button';

export default {
  title: 'Button',
  component: Button,
};

export const DefaultContained = (): ReactElement => {
  return <Button variant="contained">Click me</Button>;
};

export const PrimaryContained = (): ReactElement => {
  return (
    <Button variant="contained" color="primary">
      Click me
    </Button>
  );
};

export const SecondaryContained = (): ReactElement => {
  return (
    <Button variant="contained" color="secondary">
      Click me
    </Button>
  );
};
