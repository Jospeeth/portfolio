import { useState, useEffect } from "react";


export default function useTheme (){
    const theme = localStorage.getItem("theme");
    const preferTheme = window.matchMedia("(prefers-color-scheme: light)").matches;
    console.log(preferTheme);
    const [islightMode, setIslightMode] = useState(()=>{
        if(typeof window !== "undefined"){
            const savedTheme = localStorage.getItem("theme");
            if(savedTheme !== null){
                return savedTheme === "light" ? true : false;
            }else {
                return preferTheme;
            }
        }
        
        return false;
    }
);
    console.log(theme);
    useEffect(() => {
        if(islightMode){
            document.documentElement.classList.add("light");
        } else {
            document.documentElement.classList.remove("light");
        }
    }, [islightMode]);
    localStorage.setItem("theme", islightMode? "light" : "dark");
    return {
        islightMode, setIslightMode
    };
}