import { useState, useEffect } from "react";


export default function useGetScreenSize() {
    const [screenWidth, setScreenWidth] = useState(800)

    useEffect(() => {
        const handleWidth = () => {
            const width = window.innerWidth;
            setScreenWidth(width);
        };
        window.addEventListener("resize", handleWidth);
        return () => {
            window.removeEventListener("resize", handleWidth);
        };
    }, []);
    return screenWidth;
}