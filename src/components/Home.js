import React from "react";
import image from "../keyboard.jpg";

export default function Home() {
    return (
        <main>
            <img src={image} alt="Computer Keyboard" className="absolute object-cover w-full h-full"/>
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-6xl text-red-300 font-bold cursive leading-none lg:leading-snug home-name">Hi. I'm Lizwe Q.</h1>
            </section>
        </main>
        )
}