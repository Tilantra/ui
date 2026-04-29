import React, { useRef, useEffect } from "react";
import { useTheme } from "@/components/ui/theme-provider";

const Noise: React.FC<{ patternRefreshInterval?: number; patternAlpha?: number }> = ({ 
    patternRefreshInterval = 2, 
    patternAlpha = 12 
}) => {
    const r = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const c = r.current; 
        if (!c) return;
        const x = c.getContext("2d", { alpha: true }); 
        if (!x) return;
        
        let f = 0, id = 0, S = 1024;
        
        const resize = () => {
            c.width = S; 
            c.height = S; 
            c.style.width = "100vw"; 
            c.style.height = "100vh";
        };
        
        const draw = () => {
            const img = x.createImageData(S, S);
            const d = img.data;
            for(let i = 0; i < d.length; i += 4) {
                const v = Math.random() * 255;
                d[i] = v;
                d[i+1] = v;
                d[i+2] = v;
                d[i+3] = patternAlpha;
            }
            x.putImageData(img, 0, 0);
        };
        
        const loop = () => {
            if(f % patternRefreshInterval === 0) draw();
            f++;
            id = requestAnimationFrame(loop);
        };
        
        window.addEventListener("resize", resize);
        resize();
        loop();
        
        return () => {
            window.removeEventListener("resize", resize);
            cancelAnimationFrame(id);
        };
    }, [patternRefreshInterval, patternAlpha]);

    return (
        <canvas 
            ref={r} 
            className="pointer-events-none absolute inset-0 z-50 opacity-[0.6] dark:opacity-100 mix-blend-overlay dark:mix-blend-normal" 
            style={{ imageRendering: "pixelated" }}
        />
    );
};

const GlobalBackground: React.FC = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none bg-slate-50 dark:bg-[#040814]">
            {/* Subtle Grid */}
            <div className={`absolute inset-0 z-0 bg-[size:24px_24px] ${
                isDark 
                    ? "bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)]"
                    : "bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)]"
            }`} />

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

            {/* Film Grain Noise Overlay */}
            <Noise patternAlpha={isDark ? 16 : 8} />
        </div>
    );
};

export default GlobalBackground;
