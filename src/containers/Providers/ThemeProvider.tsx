import React, { ReactNode } from 'react';
import { connect, MapStateToPropsParam } from 'react-redux';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/styles';
import PropTypes from 'prop-types';
import { ThemeNames } from '../../redux/slices/theme';
import { RootState } from '../../redux/reducers';
import useTheme from '../../hooks/useTheme';
import { Theme } from '../../theme';

type OwnProps = {
  children: ReactNode;
};

type StateProps = {
  themeName: ThemeNames;
};

type Props = OwnProps & StateProps;

const Provider: React.FunctionComponent<Props> = (props) => {
  const { children, themeName } = props;
  const theme: Theme = useTheme(themeName);

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
  themeName: PropTypes.oneOf([ThemeNames.Default]).isRequired,
};

const mapStateToProps: MapStateToPropsParam<
  StateProps & OwnProps,
  OwnProps,
  RootState
> = (state: RootState, ownProps: OwnProps): StateProps & OwnProps => {
  return {
    ...ownProps,
    themeName: state.theme.name,
  };
};

const connectProps = connect(mapStateToProps);
const ConnectedThemeProvider = connectProps(Provider);

export default ConnectedThemeProvider;
