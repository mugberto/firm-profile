const ADD_DATA = 'firm-profile/details/ADD_DATA';

const defaultState = {};

const detailsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_DATA:
      return action.payload;
    default:
      return state;
  }
};

const addData = (payload) => ({
  type: ADD_DATA,
  payload,
});

export const loadData = (sympol) => (dispatch) => {
  fetch(`https://financialmodelingprep.com/api/v3/profile/${sympol}?apikey=78f718bb1f98542c7f205b7a95b64c04`)
    .then((presponse) => presponse.json())
    .then((profile) => {
      fetch(`https://financialmodelingprep.com/api/v3/historical-chart/1hour/${sympol}?apikey=78f718bb1f98542c7f205b7a95b64c04`)
        .then((cresponse) => cresponse.json())
        .then((chart) => {
          const detailsData = {
            profileData: profile[0],
            chartData: chart,
          };
          dispatch(addData(detailsData));
        });
    });
};

export default detailsReducer;
