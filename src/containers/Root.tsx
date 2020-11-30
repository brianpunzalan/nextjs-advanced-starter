import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';

interface Props {
  children: ReactNode;
}

const Root: React.FC<Props> = (props) => {
  const { children } = props;

  return <div id="root">{children}</div>;
};

Root.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Root;
