import { UPDATE_FILTER }from '../actions/filter_actions';

const defaultFilters = Object.freeze({bounds: {}, search: " ", checked: []});

const filtersReducer = (state=defaultFilters, action) => {
    Object.freeze(state);
    if (action.type === UPDATE_FILTER){

        const newFilter = {[action.filter]: action.value};
        return Object.assign({}, newFilter);
    } else {
        return state;
    }
};

export default filtersReducer;