import fetchRockets from "./Api";

const ROCKETS_REQUEST = 'space-travellers/rockets/GET_REQUEST';
const ROCKETS_SUCCESS = 'space-travellers/rockets/GET_SUCESS';
const ROCKETS_FAIL = 'space-travellers/rockets/GET_FAIL';
const RESERVE_ROCKET = 'space-travellers/rockets/RESERVE_ROCKET';

const initialState ={
    rocketsData:[],
    error: '',
    load:false,
};

const rocketRequest = () =>({
    type:ROCKETS_FAIL,
})

const rocketSuccess =()=>({
    type: ROCKETS_SUCCESS,
    payload:data,
})

const rocketFail = () =>({
    type:ROCKETS_FAIL,
    payload:error,
})

const getRockets = () =>{
    return (dispatch) => {
        dispatch(rocketRequest());
        fetchRockets()
        .then((data)=>{
            const rocketInfo = data.map((rocket)=>({
                id:rocket.id,
                name: rocket.name,
                desc:rocket.description,
                image:rocket.flickr_images[0],
                wukipedia:rocket.wikipedia,
                reserved: false,
            }))
            dispatch(rocketSuccess(rocketInfo))
        })
        .catch((error) =>{
            dispatch(rocketFail(error.message))
        })
    }
}

const reserveRocket =(id) =>({
    type:RESERVE_ROCKET,
    payload:id,
})

const rocketReducer=(state = initialState,action) =>{
    switch(action.type){
        case ROCKETS_REQUEST:
            return {...state, load: true};
        case ROCKETS_SUCCESS:
            return{
                ...state,
                data:action.payload,
                error:"",
            };
        case ROCKETS_FAIL:
            return{
                ...state,
                load:false,
                error:action.payload,
            };
        case RESERVE_ROCKET:
            return{
                data:state.data.map((rocket) =>{
                    if (rocket.id === action.payload){
                        return {...rocket, reserved: !rocket.reserved};
                    }
                    return rocket;
                })
            }
            default:
                return state;
    }
}

export {
   rocketFail,
   rocketSuccess,
   rocketRequest,
   reserveRocket 
}