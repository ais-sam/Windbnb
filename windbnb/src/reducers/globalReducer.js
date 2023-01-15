
export const initialStates = {
    // isModal:false
    counter:0
}


export const globalReducer = (state,action)=>{
    const {type,payload} = action;
    switch (type) {
      // case "SHOW_MODAL":
      //     return {
      //         ...state,
      //         isModal: true
      //     }
      case "INCREMENT":
        return {
          counter:21
        }
        break;
      default:
            throw new Error(`No case for type ${type} found in globalReducer.`);
    }
}

