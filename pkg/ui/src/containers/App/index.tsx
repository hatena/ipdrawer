import * as React from 'react';
import * as TodoActions from '../../actions/todos';
import * as style from './style.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { AdminUIState } from '../../reducers';
import { Header, MainSection } from '../../components';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export namespace App {
  export interface Props extends RouteComponentProps<void> {
    todos: TodoItemData[];
    actions: typeof TodoActions;
  }

  export interface State {
    /* empty */
  }
}

@connect(mapStateToProps, mapDispatchToProps)
export class App extends React.Component<App.Props, App.State> {

  render() {
    const { todos, actions, children } = this.props;
    return (
      <MuiThemeProvider>
        <div className={style.normal}>
          <Header />
          <MainSection todos={todos} actions={actions} />
          {children}
        </div>
      </MuiThemeProvider>
    );
  }
}

function mapStateToProps(state: AdminUIState) {
  return {
    todos: state.todos
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions as any, dispatch)
  };
}
