import {useState,createContext,useContext,useEffect} from 'react';


export const SnipcartContext = createContext()

//provider helper 
export const SnipcartProvider = ({children})=>{
    // const [date,setDate] = useState(Date.now())
    const snipcart = useSnipcartState()
    return (
        //path value 
        <SnipcartContext.Provider value={snipcart}>
            {children}
        </SnipcartContext.Provider>
    )
}
//helper func
export function useSnipcartState(){
    // const [date,setDate] = useState(Date.now())
    const [state,setState] = useState({})

useEffect(()=>{
    let unsubscribe;
//call immediately
//pollToSubscribe run and then not in the condition back to the function and then return nothing 
(function pollToSubscribe(){ // immediately runs the function and then not have snipcart runs again after 100sc
if(!window.Snipcart){
    console.log("window",window.Snipcart)
    setTimeout(()=>{
        pollToSubscribe();//if not window Snipcart runs pollToSubscribe function after 100 
    },100); //not to continue funcs so return none
    return;
}//if snipcart has , will subscribe and getState 


  unsubscribe = window.Snipcart.store.subscribe(()=>{
    const snipcartState = window.Snipcart.store.getState();
    setState(snipcartState)
})
//unsubscribe = subscribe function 

// window.Snipcart.store.subscribe(()=>{
//     const snipcartState = window.Snipcart.store.getState();
//     setState(snipcartState)
// })
})()// immediately func closure 
//unsubscribe unmount 
return  () =>{
if(unsubscribe) unsubscribe() //unsubscribe function 

}

},[])

    return {
        // date
        ...state
    }
}

export function useSnipcart(){
    const snipcart = useContext(SnipcartContext)
    // const [data,setDate] = useState(Date.now())
    return {
        // name:"masa",
        ...snipcart
        // date
    }
}

//date, name 