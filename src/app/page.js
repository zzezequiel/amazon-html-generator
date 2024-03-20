"use client"
import React, { useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import dynamic from "next/dynamic"

const Navbar = dynamic(() => import('./components/navbar'));
const Footer = dynamic(() => import('./components/footer'));
const CookieModal = dynamic(() => import('./components/cookieModal'));
const AccountTab = dynamic(() => import('./components/accountTab'));

import * as Icon from 'react-feather';
import PortfolioImageTwo from "./components/portfolioImageTwo"
import Account from "./components/Account"


export default function Index() {

  return (
    <>
      {/* <Navbar navClass="nav-light" /> */}
      <section className="relative lg:pb-24 pb-16">
        <div className="container-fluid relative">
          <div className="profile-banner relative text-transparent">
            <input id="pro-banner" name="profile-banner" type="file" className="hidden" />
            <div className="relative shrink-0">
              <Image src="/images/blog/bg.jpg" width={0} height={0} sizes='100vw' style={{ width: "100%", height: "auto" }} className="h-80 w-full object-cover" id="profile-banner" alt="" />
              <div className="absolute inset-0 bg-black/70"></div>
              <label className="absolute inset-0 cursor-pointer" htmlFor="pro-banner"></label>
            </div>
          </div>
        </div>

        <div className="container relative md:mt-24 mt-16">
          <div className="md:flex">


            <Account />
            <PortfolioImageTwo />

          </div>
        </div >


      </section >
      <Footer />
      <CookieModal />
    </>
  )
}
