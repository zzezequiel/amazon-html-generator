import React from 'react'
import Link from "next/link"
import Image from "next/image"

import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import AccountTab from '../../components/accountTab'

import Template3 from '../../components/templates/template3'


export default function EditTemplate3() {

    const experienceData = [
        { image: "/images/client/circle-logo.png", title: "Senior Web Developer", time: "3 Years Experience", name: "CircleCi", location: "@London, UK" },
        { image: "/images/client/facebook-logo-2019.png", title: "Web Designer", time: "2 Years Experience", name: "Facebook", location: "@Washington D.C, USA" },
        { image: "/images/client/spotify.png", title: "UI Designer", time: "2 Years Experience", name: "Spotify", location: "@Perth, Australia" },
    ]
    return (
        <>
            {/* <Navbar navClass="nav-light" /> */}
            <section className="relative lg:pb-24 pb-16">
                <div className="container-fluid relative">
                    <div className="profile-banner relative text-transparent">
                        <input id="pro-banner" name="profile-banner" type="file" className="hidden" />
                        <div className="relative shrink-0">
                            <Image src="/images/blog/bg.jpg" width={0} height={0} sizes='100vw' style={{ width: "100%", height: 'auto' }} className="h-80 w-full object-cover" id="profile-banner" alt="" />
                            <div className="absolute inset-0 bg-black/70"></div>
                            <label className="absolute inset-0 cursor-pointer" htmlFor="pro-banner"></label>
                        </div>
                    </div>
                </div>

                <div className="container relative md:mt-24 mt-16">
                    <div className="md:flex">
                        <div className="lg:w-1/4 md:w-1/3 md:px-3">
                            <div className="relative md:-mt-48 -mt-32">
                                <div className="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900">
                                    <div className="profile-pic text-center mb-5">
                                        <input id="pro-img" name="profile-image" type="file" className="hidden" />
                                        <div>
                                            <div className="relative h-28 w-28 mx-auto">
                                                <Image src="/images/client/05.jpg" width={112} height={112} className="rounded-full shadow dark:shadow-gray-800 ring-4 ring-slate-50 dark:ring-slate-800" id="profile-image" alt="" />
                                                <label className="absolute inset-0 cursor-pointer" htmlFor="pro-img"></label>
                                            </div>

                                            <div className="mt-4">
                                                <h5 className="text-lg font-semibold">Ezequiel Z</h5>
                                                <p className="text-slate-400">zzezequie@hotmail.com.ar</p>
                                            </div>
                                        </div>
                                    </div>
                                    <AccountTab />
                                </div>
                            </div>
                        </div>

                        
<Template3/>


                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}