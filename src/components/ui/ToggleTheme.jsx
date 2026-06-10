import useTheme from "./useTheme";
import {Moon, Sun} from 'lucide-react';


export default function ToggleTheme({ className }) {
    const { islightMode, setIslightMode } = useTheme();

    return(
        <div>
            <button className={`px-4 py-2 rounded-lg transition-all duration-300 hover:bg-surface-hover ${className}`} onClick={() => setIslightMode(!islightMode)}>
            {islightMode ? <Moon className="text-blue-950" /> : <Sun className="text-yellow-500" />}
        </button>
        </div>
    )
}