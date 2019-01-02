export const intialMediaState = [];

export const mediaReducer = (state: any = intialMediaState, action: any) => {
  switch (action.type) {
    case 'FETCH_MEDIA_SUCCESS':
      return Object.assign(state, action.payload, {});
    default:
      return state
  }
};

