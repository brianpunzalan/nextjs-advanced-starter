import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import StoreProvider from './StoreProvider';
import ThemeProvider from './ThemeProvider';
import Root from '../Root';
import Page from '../../types/Page';

interface Props {
  children: ReactNode;
  page: Page;
}

const Provider: React.FunctionComponent<Props> = (props) => {
  const { children, page } = props;

  return (
    <Root>
      <div id="provider">
        <StoreProvider page={page}>
          <ThemeProvider>{children}</ThemeProvider>
        </StoreProvider>
      </div>
    </Root>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
  page: PropTypes.any.isRequired,
};

export default Provider;
