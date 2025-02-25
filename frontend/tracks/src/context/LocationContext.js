import CreateDataContext from './createDataContext';

const LocationReducer = (state,action) => {
    switch (action.type){
        default : 
            return state;
    }
};

const startRecording = (dispatch) => {};
const stopRecording = (dispatch) => {};
const addLocation = (dispatch) => {};

export const { Context , Provider } = CreateDataContext(
    LocationReducer,
    { startRecording , stopRecording , addLocation},
    { recording : false , locations : [] , currentLocation : null}
);