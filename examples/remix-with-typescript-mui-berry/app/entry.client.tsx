import * as React from 'react';
import { useState } from 'react';
import ReactDOM, { hydrate, render } from 'react-dom';
import { RemixBrowser } from 'remix';
// import { CacheProvider, ThemeProvider } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

import ClientStyleContext from './src/ClientStyleContext';
import createEmotionCache from './src/createEmotionCache';
import theme from './src/theme';
import App from './src/mui_berry_free/App';
import { store } from './src/mui_berry_free/store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

interface ClientCacheProviderProps {
  children: React.ReactNode;
}
// function ClientCacheProvider({ children }: ClientCacheProviderProps) {
//   const [cache, setCache] = useState(createEmotionCache());

//   function reset() {
//     setCache(createEmotionCache());
//   }

//   return (
//     <ClientStyleContext.Provider value={{ reset }}>
//       <CacheProvider value={cache}>{children}</CacheProvider>
//     </ClientStyleContext.Provider>
//   );
// }

// hydrate(
//   <ClientCacheProvider>
//     <ThemeProvider theme={theme}>
//       {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
//       <CssBaseline />
//       <RemixBrowser />
//     </ThemeProvider>
//   </ClientCacheProvider>,
//   document,
// );

// ReactDOM.render(
//   <Provider store={store}>
//       <BrowserRouter>
//         <App/>
//       </BrowserRouter>
//   </Provider>,
//   document.getElementById('root')
// );

// hydrate(
//   <Provider store={store}>
//       <BrowserRouter>
//         <App/>
//       </BrowserRouter>
//   </Provider>,
//   document.getElementById('root')
// );

const root = document.getElementById("root")
var renderMethod
if (root && root.innerHTML !== "") {
  renderMethod = hydrate
} else {
  renderMethod = render
}
renderMethod(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
)
