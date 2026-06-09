import useTheme from "./useTheme";
import {Moon, Sun} from 'lucide-react';


export default function ToggleTheme() {
    const { islightMode, setIslightMode } = useTheme();

    return(
        <div className="">
            <button className="" onClick={() => setIslightMode(!islightMode)}>
            {islightMode ? <Moon className="text-blue-950" /> : <Sun className="text-yellow-500" />}
        </button>
        </div>
    )
}