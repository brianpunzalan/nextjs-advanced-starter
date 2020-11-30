import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import Base from '../containers/Base';

interface Props {
  children: ReactNode;
}

const DefaultLayout: React.FC<Props> = (props) => {
  const { children } = props;

  return (
    <Base>
      <div>{children}</div>
    </Base>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
