export const intialUserState = {
  isAuth: false,
  token: '',
  bio: '',
  counts: { media: 0, follows: 0, followed_by: 0 },
  full_name: '',
  id: '',
  is_business: false,
  profile_picture: '',
  username: '',
  website: '',
}


export const UserReducer = (state: any = intialUserState, action: any) => {
  switch (action.type) {
    case 'SET_TOKEN':
      return Object.assign(state, { token: action.payload }, {});
    case 'FETCH_PROFILE_SUCCESS':
      return Object.assign(state, action.payload, {});
    case 'FETCH_PROFILE_FAILURE':
      return Object.assign(state, { isAuth: false, token: '' }, {});
    case 'AUTHENTICATED':
      return Object.assign(state, { isAuth: true }, {});
    default:
      return state
  }
};

