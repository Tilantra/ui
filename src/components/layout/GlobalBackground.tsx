import React, { useRef, useEffect } from "react";
import { useTheme } from "@/components/ui/theme-provider";


const GlobalBackground: React.FC = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none bg-slate-50 dark:bg-[#040814]">
            {/* Ambient Blurred Orbs */}
            {/* Primary Cyan Glow */}
            <div className={`absolute -left-1/4 -top-1/4 z-10 h-[800px] w-[800px] rounded-full blur-[160px] opacity-20 dark:opacity-20 transition-opacity duration-1000 ${
                isDark ? "bg-cyan-500" : "bg-blue-400"
            }`} />
            
            {/* Secondary Purple Glow */}
            <div className={`absolute -right-1/4 -bottom-1/4 z-10 h-[600px] w-[600px] rounded-full blur-[160px] opacity-20 dark:opacity-15 transition-opacity duration-1000 ${
                isDark ? "bg-purple-600" : "bg-indigo-300"
            }`} />

            {/* Central faint glow for dark mode only */}
            {isDark && (
                <div className="absolute left-1/2 top-1/2 z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-900/20 blur-[180px]" />
            )}
        </div>
    );
};

export default GlobalBackground;
