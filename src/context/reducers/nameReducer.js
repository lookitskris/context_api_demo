import UPDATE_NAME from '../constants';

const nameReducer = (state, action) => {
    const { type, payload } = action;
    switch(type){
      case UPDATE_NAME:
        return {
          name: payload
        };
      default:
        return state;
    }
  };
  
  export default nameReducer;