import { useTheme } from "@/context/theme-provider"
import { Moon, Sun, SunIcon } from "lucide-react";
import {Link} from "react-router-dom"


const header = () => {
    const { theme, setTheme }= useTheme();
    const isDark = theme === "dark"
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur py-2 px-4 supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 item-center justify-between px-4 py-4">
            <Link to={"/"}>{isDark? <span className="h-12 font-semibold text-cyan-100"> Weatherly</span>: <span className="h-12 font-semibold text-cyan-900"> Weatherly</span>}</Link>

            <div>
                {/* search */}
                <div onClick={()=>setTheme(isDark?"light":"dark")}>{isDark? (<Sun className="h-6 w-6 text-yellow-500 rotate-0 transition-all"/>):(<Moon className="h-6 w-6 text-blue-500 rotate-0 transition-all"/>)}</div>
            </div>
        </div>
    </header>
  )
}

export default header