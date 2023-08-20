import React from 'react'
import { useState } from 'react';
import { GraphSvg, HomeSVG, ProfileSVG, WalletSVG } from '../svg';

function Menubar() {
    const [homeTab, sethomeTab] = useState(false);
    const [signalTab, setsignalTab] = useState(false); 
    const [walletTab, setwalletTab] = useState(false); 
    const [userTab, setuserTab] = useState(false); 
    
    const handleHome = event => {
        sethomeTab(true);
        setsignalTab(false);
        setwalletTab(false)
        setuserTab(false)

    };

    const handleSignal = event => {
        sethomeTab(false);
        setsignalTab(true);
        setwalletTab(false)
        setuserTab(false)
    }

    const handleWallet = event => {
        sethomeTab(false);
        setsignalTab(false);
        setwalletTab(true)
        setuserTab(false)
    }

    const handleUser = event => {
        sethomeTab(false);
        setsignalTab(false);
        setwalletTab(false)
        setuserTab(true)
    }


    return (
    <div className="flex gap-4 p-1 sticky bottom-0 bg-purple-100 divide-x-2 mx-auto">
        <img className={homeTab ? 'menuIconSize flex activeTab w-1/4 mx-auto' : 'menuIconSize flex w-1/4 mx-auto'} onClick={handleHome} src={HomeSVG}></img>

        <img className={signalTab ? 'menuIconSize flex activeTab w-1/4 mx-auto' : 'menuIconSize flex w-1/4 mx-auto'} onClick={handleSignal} src={GraphSvg}></img>
        <img className={walletTab ? 'menuIconSize flex activeTab w-1/4 mx-auto' : 'menuIconSize flex w-1/4 mx-auto'} onClick={handleWallet} src={WalletSVG}></img>
        <img className={userTab ? 'menuIconSize flex activeTab w-1/4 mx-auto' : 'menuIconSize flex w-1/4 mx-auto'} onClick={handleUser} src={ProfileSVG}></img>
    </div>
    )
} 

export default Menubar
