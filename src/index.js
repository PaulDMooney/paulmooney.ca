import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
//import configureStore, { history } from './store/configureStore';
import Root from './components/Root.jsx';
// import 'normalize.css'
import './styles/styles.global.scss'; // Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.
require('./favicon.ico'); // Tell webpack to load favicon.ico
//const store = configureStore();

render(
  <AppContainer>
    <Root />
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./components/Root', () => {
    const NewRoot = require('./components/Root').default;
    render(
      <AppContainer>
        <NewRoot />
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
