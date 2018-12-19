const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';

export const createRequestTypes = (base: string) => {
  return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
    acc[type] = `${base}_${type}`;
    return acc;
  }, {});
};

export const asyncActionCreators = (asyncActions) => ({
  request: (params: any) => ({ type: asyncActions.REQUEST, params }),
  success: (payload: any) => ({ type: asyncActions.SUCCESS, payload }),
  failure: (error: Object) => ({
    type: asyncActions.FAILURE,
    error: {
      name: error.name,
      message: error.message,
      status: error.status,
    },
  }),
});