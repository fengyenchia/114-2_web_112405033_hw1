"use client"
import Image from "next/image";

export default function Menu() {
    const projectData = {
        "1": {
            "name": "小虎",
            "imageUrl": "/bg.png",
        },
        "2": {
            "name": "小老鼠",
            "imageUrl": "/bg.png",
        },
        "3": {
            "name": "小貓",
            "imageUrl": "/avatar.png",
        },
        "4": {
            "name": "大兔",
            "imageUrl": "/avatar2.png",
        },
    };

    return (
        <div className={`relative h-20 bg-white/20 rounded-lg overflow-hidden font-bold text-white/80 flex justify-center items-center bg-center bg-contain`} style={{ backgroundImage: `url(${projectData["1"]["imageUrl"]})` }}>
            <div className="absolute bottom-0 bg-white/20 rounded-b-lg w-full text-center backdrop-blur-lg">
                {projectData["1"]["name"]}
            </div>
        </div>
    );
}