import React from 'react';

const BuildProviderTree = (providers) => {
  return function ProviderTree(props) {
    const lastIndex = providers.length - 1;
    let children = props.children;

    for (let i = lastIndex; i >= 0; i--) {
      const element = providers[i];
      children = React.cloneElement(element, undefined, children);
    }

    return children;
  };
};

export default BuildProviderTree;
