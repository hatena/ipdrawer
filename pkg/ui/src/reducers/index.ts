import { combineReducers, Reducer } from 'redux';
import backups from './backups';
import todos from './todos';

export interface AdminUIState {
  backups: BackupStoreState;
  todos: TodoStoreState;
}

export default combineReducers<AdminUIState>({
  backups,
  todos
});
