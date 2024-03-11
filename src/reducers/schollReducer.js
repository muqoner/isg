
const initialState = {
    scholls:null,
    loading:false,
    scholl:null,
    filtered:null
}

const schollReducer = (state=initialState,action)=>{
    switch(action.type){
        
        case("LOADING"):
            return{
                ...state,
                loading:action.payload
            }
        case("DELETE"):
            return{
                ...state,
                scholls: state.scholls.filter((scholl)=>scholl.id !== action.payload)
            }
        case("GET_SCHOLL"):
            return{
                ...state,
                loading:false,
                scholl:action.payload
            }
        case("GET_SCHOLLS"):
            return{
                ...state,
                scholls: action.payload,
                loading:false
            }
        case("FILTER"):
        console.log("çalıştı")
            const scholls = []
            
            state.scholls.forEach((scholl)=>{
                console.log(scholl)
                scholls.push({okulAdi:scholl["okulAdi"],veri: scholl[action.payload],id:scholl.id})
                console.log(scholls)
            })
            return{
                ...state,
                filtered : scholls,
                loading:false
            }
        default:
            return state
    }
}

export default schollReducer