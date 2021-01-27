import MENU from 'constants/menu';
import Steps from 'containers/Steps';
import Billing from 'pages/Billing';
import Cart from 'pages/Cart';
import Start from 'pages/Start';
import Summary from 'pages/Summary';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from 'store';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Steps />
        <Switch>
          <Route component={Start} exact path={MENU.START.LINK} />
          <Route component={Cart} exact path={MENU.CART.LINK} />
          <Route component={Billing} exact path={MENU.BILLING.LINK} />
          <Route component={Summary} exact path={MENU.SUMMARY.LINK} />
        </Switch>
      </PersistGate>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);
