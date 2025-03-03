import React from "react";
import Image from "next/image";
import logo2 from "@/assets/logo_light.png"
import github_icon from "@/assets/github-logo.png"

const Footer = ()=>{
    return(
        <div className="bg-black">
            <div className="flex flex-col items-center">
            <Image src={logo2} alt='logo' width={250} className="pt-10"/>
            <p className="text-white font-semibold mt-4">Work Hassle Free</p>
            <div className="flex text-white gap-4 mt-6 mb-6">
                <p className="cursor-pointer">User Guide</p>
                |
                <p className="cursor-pointer">Help</p>
                |
                <p className="cursor-pointer">What's New</p>
            </div>
            <Image src={github_icon} width={30} className="mb-4" alt='github-logo'/>
            </div>
            <h1 className="text-white  text-lg border-t-2 p-4 text-center">©2025 download.sh powered by <span className="font-semibold text-emerald-400">AugmentedLabs</span></h1>
        </div>
    )
}
export default Footer