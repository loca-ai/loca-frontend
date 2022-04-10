import { Map, fromJS, List} from 'immutable';

/* Immutable */
const NEARBY_MONUMENTS = 'NEARBY_MONUMENTS';
const RECENTS = 'RECENTS'
const RECOGNIZED_MONUMENT = 'RECOGNIZED_MONUMENT'

/* Actions */
export const setNearbyMonuments = (monuments) => ({'type': NEARBY_MONUMENTS, 'monuments': monuments})
export const setRecentMonuments = (monuments) => ({'type': RECENTS, 'monuments': monuments})
export const setRecognizedMonument = (monument) => ({'type': RECOGNIZED_MONUMENT, 'monument': monument})

/* Initial State */
const initialState = Map({
    nearbyMonuments: List(),
    recents: List(),
    recognizedMonument: Map()
});

/* Reducer */
const monumentsReducer = (state=initialState, action) => {
    switch (action.type) {
        case NEARBY_MONUMENTS:
            return state.merge({nearbyMonuments: fromJS(action.monuments)})
        case RECENTS:
            return state.merge({recents: fromJS(action.monuments)})
        case RECOGNIZED_MONUMENT:
            return state.merge({recognizedMonument: fromJS(action.monument)})
        default:
            return state;
    }
};

export default monumentsReducer;
