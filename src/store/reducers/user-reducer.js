export const intialUserState = {
  isAuth: true,
  token: 'fake_token',
  bio: 'Qamar Mirza',
  counts: { media: 10, follows: 9, followed_by: 1991 },
  full_name: 'qamar m',
  id: '1234567890',
  is_business: false,
  profile_picture: 'https://scontent.cdninstagram.com/vp/f852bb04c502bf31a203fa2cf0b93988/5C9E8DDF/t51.2885-19/s150x150/30077986_363604254044061_5427426051695312896_n.jpg?_nc_ht=scontent.cdninstagram.com',
  username: 'qmirza',
  website: '',
}
// {"data": {"id": "651690731", "username": "qmirza91", "profile_picture": 
//"https://scontent.cdninstagram.com/vp/f852bb04c502bf31a203fa2cf0b93988/5C9E8DDF/t51.2885-19/s150x150/30077986_363604254044061_5427426051695312896_n.jpg?_nc_ht=scontent.cdninstagram.com", 
//"full_name": "Qamar", "bio": "Software Developer. \n\ud83c\uddf5\ud83c\uddf0 | \ud83c\udde8\ud83c\udde6 | \u2696\ufe0f | \u2615 | \ud83c\udf63 | \ud83c\udfcb\ufe0f", "website": "", "is_business": false, "counts": {"media": 257, "follows": 352, "followed_by": 185}}, "meta": {"code": 200}}

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

