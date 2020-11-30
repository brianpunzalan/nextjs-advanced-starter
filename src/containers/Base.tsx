import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import Root from './Root';

interface Props {
  children: ReactNode;
}

const Base: React.FC<Props> = (props) => {
  const { children } = props;

  return (
    <Root>
      <div id="base">{children}</div>
    </Root>
  );
};

Base.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Base;
