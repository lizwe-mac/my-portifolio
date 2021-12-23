import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
    return (
        <header className="bg-cyan-600">
            <div className="flex">
            <div className="left-0 container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink to="/" exact activeClassName="text-cyan-900" className="inline-flex items-center py-3 px-3 mr-4 text-red-100 hover:text-cyan-900 text-5xl font-bold tracking-widest font-['Source_Sans_Pro']">lizwe.</NavLink>
                    <NavLink to="/post" activeClassName="text-cyan-900 font-bold"  className="inline-flex items-center py-3 px-3 my-4 rounded text-red-200 hover:text-cyan-800">Blog</NavLink>
                    <NavLink to="/project" activeClassName="text-cyan-900 font-bold" className="inline-flex items-center py-3 px-3 my-4 rounded text-red-200 hover:text-cyan-800">Projects</NavLink>
                    <NavLink to="/about" activeClassName="text-cyan-900 font-bold" className="inline-flex items-center py-3 px-3 my-4 rounded text-red-200 hover:text-cyan-800">Hire me</NavLink>
                    
                </nav>
            </div>
            <div className="right-0 inline-flex py-3 px-3 my-6 ">
                <SocialIcon url="https://twitter.com/dingiilizwe" className="mr-4" target="_blank" fgColor="#fff" style={{height:35, width:35}} />
                <SocialIcon url="https://github.com/theorem23" className="mr-4" target="_blank" fgColor="#fff" style={{height:35, width:35}} />
                <SocialIcon url="https://facebook.com/lizwedev" className="mr-4" target="_blank" fgColor="#fff" style={{height:35, width:35}} />
            </div>
            </div>
        </header>
    )
}