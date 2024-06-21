const redux=require('redux')
const createStore=redux.createStore

//action

const  Withdraw_Money ="Withdraw_Money";
const Deposit_Money="Deposit_Money";

 function withdrawmoney(){
    return{
        type:Withdraw_Money
    }
 }

 function depositMoney(){
    return{
        type:Deposit_Money
    }
 }

 //Reducer (state,action)=>

    const initialState={
        totalMoney:1000
    }
    const reducer =(state=initialState,action)=>{
        switch(action.type){
            case "Withdraw_Money":return{
                ...state,
                totalMoney:state.totalMoney-1000
            }
            case "Deposit_Money":return{
                ...state,
                totalMoney:state.totalMoney+1000
            }
            default:return state;
        }
    }

    //store code

    const store=createStore(reducer);
    console.log("initial State",store.getState());
    store.subscribe(()=>console.log("updated state is:",store.getState()));
    store.dispatch(withdrawmoney());
    store.dispatch(depositMoney());