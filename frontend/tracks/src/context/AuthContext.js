import createDataContext from "./createDataContext";

const authReducer = (state,action) => {
    switch(action.type){
        default:
            return state;
    }
};

// action functions 

export const {Provider , Context} = createDataContext(
    authReducer,
    {},
    { isSignedIn : false }
);