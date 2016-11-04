require('./lib/whatwg-fetch/fetch.js');
require('./lib/kube-6.0.1/dist/css/kube.css');

import 'react-hot-loader/patch';
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import configureStore  from './configureStore';

const store = configureStore();

// import { fetchData } from './actions';
// import { AppContainer } from 'react-hot-loader';

ReactDOM.render(
  <Root store={ store } />,
  document.getElementById('app')
);

// if (module.hot) {
//   module.hot.accept('./containers/CashmereAppContainer', () => {
//     const NextCashmereAppContainer = require('./containers/CashmereAppContainer').CashmereAppContainer;
//     ReactDOM.render(
//       // <AppContainer>
//         <Provider store={ store }>
//           <NextCashmereAppContainer />
//         </Provider>,
//       // </AppContainer>,
//       rootEl
//     );
//   });
// }
