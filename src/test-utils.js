import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render as rtlRender } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import homeReducer from './redux/home/home';
import detailsReducer from './redux/details/details';

function render(
  ui,
  {
    preloadedState,
    store = configureStore({
      reducer: {
        homeData: homeReducer, detailsData: detailsReducer,
      },
      preloadedState,
    }),
    ...renderOptions
  } = {},
) {
  // eslint-disable-next-line react/prop-types
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }

  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// eslint-disable-next-line import/no-extraneous-dependencies
export * from '@testing-library/react';
export { render };
