import FetchRocketsData from '../API/rocketAPI';

const GET_ROCKETS_REQUEST = 'space-travellers/rockets/GET_REQUEST';
const GET_ROCKETS_SUCCESS = 'space-travellers/rockets/GET_SUCESS';
const GET_ROCKETS_FAIL = 'space-travellers/rockets/GET_FAIL';
const RESERVE_ROCKET = 'space-travellers/rockets/RESERVE_ROCKET';

const initialState = {
  rocketsData: [],
  error: '',
  load: false,
};

const getRocketRequest = () => ({
  type: GET_ROCKETS_REQUEST,
});

const getRocketSuccess = (rocketsData) => ({
  type: GET_ROCKETS_SUCCESS,
  payload: rocketsData,
});

const getRocketFail = (error) => ({
  type: GET_ROCKETS_FAIL,
  payload: error,
});

export function getRockets() {
  return (dispatch) => {
    dispatch(getRocketRequest());
    FetchRocketsData()
      .then((data) => {
        const rocketinfo = data.map((uniData) => ({
          id: uniData.id,
          name: uniData.name,
          desc: uniData.description,
          image: uniData.flickr_images[0],
          wikipedia: uniData.wikipedia,
          reserved: false,
        }));
        dispatch(getRocketSuccess(rocketinfo));
      })
      .catch((error) => {
        dispatch(getRocketFail(error.message));
      });
  };
}

const
  reserveRocket = (id) => ({
    type: RESERVE_ROCKET,
    payload: id,
  });

export default function rocketReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ROCKETS_REQUEST:
      return { ...state, load: true };
    case GET_ROCKETS_SUCCESS:
      return {
        ...state,
        rocketsData: action.payload,
        error: '',
      };
    case GET_ROCKETS_FAIL:
      return {
        ...state,
        load: false,
        error: action.payload,
      };
    case RESERVE_ROCKET:
      return {
        ...state,
        rocketsData: state.rocketsData.map((rocket) => {
          if (rocket.id === action.payload) {
            return { ...rocket, reserved: !rocket.reserved };
          }
          return rocket;
        }),
      };
    default:
      return state;
  }
}

export {
  getRocketFail,
  getRocketSuccess,
  getRocketRequest,
  reserveRocket,
};
