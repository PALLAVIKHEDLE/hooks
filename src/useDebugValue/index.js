import { useEffect ,useDebugValue, useState} from 'react';

function useTimer(initialSeconds){
    const [seconds, setSeconds]=useState(initialSeconds);
    const [isActive, setIsActive]= useState(false);

    useEffect(()=>{
        let intervalId;
        if(isActive && seconds >0){
            intervalId=setInterval(()=>{
                setSeconds(prevSeconds=>prevSeconds-1)
            },1000)
        }else if(seconds===0)setIsActive(false)

        return()=>clearInterval(intervalId)
    },[isActive,seconds])

    //Display Timer value in DevTools
    useDebugValue(`Timer:${seconds}`)
    const startTimer = () => {
        setIsActive(true);
      };
    
      const resetTimer = () => {
        setIsActive(false);
        setSeconds(initialSeconds);
      };
    
      return {
        seconds,
        isActive,
        startTimer,
        resetTimer
      };
    
}

 
export default function MyComponent(){
  const { seconds, isActive, startTimer, resetTimer } = useTimer(60);
    return(
        <div>
            <h1>Timer:{seconds}</h1>
            <button onClick={startTimer} disabled={isActive}>Start</button>
            <button onClick={resetTimer}>Reset</button>

        </div>
    )
}