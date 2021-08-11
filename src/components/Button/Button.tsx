import React from 'react';
import PropTypes from 'prop-types';
import MuiButton, { ButtonProps } from '@material-ui/core/Button';
import { makeStyles, createStyles } from '@material-ui/styles';
import { Theme } from '../../theme';

type Props = ButtonProps;

const useMuiStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.primary.main,
    },
  })
);

export const Button: React.FC<Props> = React.forwardRef((props, ref) => {
  const { children, ...otherProps } = props;
  const classes = useMuiStyles();

  return (
    <MuiButton ref={ref} classes={classes} {...otherProps}>
      {children}
    </MuiButton>
  );
});

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;
