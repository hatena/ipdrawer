import { handleActions } from 'redux-actions';

const initialState: BackupStoreState = [];

export default handleActions<BackupStoreState, BackupData>({}, initialState);
