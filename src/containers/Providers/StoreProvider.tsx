/* eslint-disable react/forbid-prop-types */
import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import { Provider as ReduxProvider } from 'react-redux';
import { useStore } from '../../redux/stores';
import Page from '../../types/Page';

interface Props {
  children: ReactNode;
  page: Page;
}

const Provider: React.FC<Props> = (props) => {
  const { children, page } = props;
  const { initialStore } = page;

  const store = useStore(initialStore);

  return <ReduxProvider store={store}>{children}</ReduxProvider>;
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
  page: PropTypes.any.isRequired,
};

export default Provider;
