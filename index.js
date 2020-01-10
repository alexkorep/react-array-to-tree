import React from 'react';

const BuildComponetTree = (providers) => {
  if (providers.length === 1) {
    return providers[0][0];
  }
  const [A, paramsA] = providers.shift();
  const [B, paramsB] = providers.shift();

  return BuildComponetTree([
    [({ children }) => (
      <A {...(paramsA || {})}>
        <B {...(paramsB || {})}>
          {children}
        </B>
      </A>
    )],
    ...providers,
  ]);
};

export default BuildComponetTree;
