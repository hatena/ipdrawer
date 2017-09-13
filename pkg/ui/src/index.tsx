import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Switch, Redirect } from 'react-router';
import { createBrowserHistory } from 'history';
import { configureStore } from './store';
import { Layout } from './containers/App/Layout';
import { BackupTable } from './containers/Backups';
import * as injectTapEventPlugin from 'react-tap-event-plugin';

// Work tap event
injectTapEventPlugin();

const store = configureStore();
const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Layout>
        <Switch>
          <Route path="/backups" render={routeProps => <BackupTable {...routeProps} />} />
          <Redirect from="*" to="/backups" />
        </Switch>
      </Layout>
    </Router>
  </Provider>,
  document.getElementById('root')
);
