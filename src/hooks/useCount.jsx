import { useState } from "react"

export const useCount = (intial=1, max=5, min=1) => {

    if(intial < min || intial > max) intial = min
    
    const [contador, setContador] = useState(intial)  

    const increment = () => {     
        if (contador < max)   
        setContador(contador + 1)
    }
    
    const decrement = () => {        
        if (contador > min)   
        setContador(contador - 1)
    }    

    const reset = () =>{
        setContador(intial)
    }

    return { contador, increment, decrement, reset }
}

