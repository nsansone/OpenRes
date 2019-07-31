import { combineReducers } from 'redux';

import entitiesReducer from './entities_reducer';
import session from './session_reducer';
import errorsReducer from './errors_reducer';
import ui from './ui_reducer';

const rootReducer = combineReducers({
    entities: entitiesReducer,
    session,
    errors: errorsReducer,
    ui,
});

export default rootReducer;