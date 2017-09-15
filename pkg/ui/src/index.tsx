import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Switch, Redirect } from 'react-router';
import { createBrowserHistory } from 'history';
import { configureStore } from './store';
import { Layout } from './containers/Layout';
import * as injectTapEventPlugin from 'react-tap-event-plugin';
import { IPAddrView } from "./containers/ipaddr";
import { NetworkView } from './containers/network';
import { PoolView } from './containers/pool';


// Work tap event
injectTapEventPlugin();

const store = configureStore();
const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Layout>
        <Switch>
          <Route path="/ui/network" component={NetworkView} />
          <Route path="/ui/pool" component={PoolView} />
          <Route path="/ui/ip" component={IPAddrView} />
          <Redirect from="*" to="/ui/network" />
        </Switch>
      </Layout>
    </Router>
  </Provider>,
  document.getElementById('root')
);
