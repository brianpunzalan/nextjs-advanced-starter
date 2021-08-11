import React from 'react';
import { AppProps } from 'next/app';
import PropTypes from 'prop-types';

const App: React.FC<AppProps> = (props) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { Component, pageProps } = props;

  return <Component {...pageProps} />;
};

App.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.any.isRequired,
};

export default App;
