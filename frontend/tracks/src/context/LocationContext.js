import CreateDataContext from './createDataContext';

const LocationReducer = (state,action) => {
    switch (action.type){
        case 'add-current-location':
            return {...state , currentLocation : action.payload};
        default : 
            return state;
    }
};

const startRecording = (dispatch) => {};
const stopRecording = (dispatch) => {};
const addLocation = (dispatch) => (location) => {
    dispatch({type : 'add-current-location' , payload : location});
};

export const { Context , Provider } = CreateDataContext(
    LocationReducer,
    { startRecording , stopRecording , addLocation},
    { recording : false , locations : [] , currentLocation : null}
);