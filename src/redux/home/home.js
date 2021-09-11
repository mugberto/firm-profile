const ADD_DATA = 'firm-profile/home/ADD_DATA';

const defaultState = [];

const homeReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_DATA:
      return action.payload;
    default:
      return state;
  }
};

export const addData = (loadData) => ({
  type: ADD_DATA,
  payload: loadData.slice(0, 500),
});

export const loadData = () => (dispatch) => {
  fetch('https://financialmodelingprep.com/api/v3/stock/list?apikey=78f718bb1f98542c7f205b7a95b64c04')
    .then((response) => response.json())
    .then((json) => dispatch(addData(json)));
};

export default homeReducer;
