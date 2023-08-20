import React from 'react'
import { useState } from 'react';

function Menubar() {
    const [homeTab, sethomeTab] = useState(false);
    const [signalTab, setsignalTab] = useState(false); 
    const [walletTab, setwalletTab] = useState(false); 
    const [userTab, setuserTab] = useState(false); 
    
    const handleHome = event => {
        // 👇️ toggle isActive state on click
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
    <div className="flex gap-20" style={{position: 'absolute', bottom: 0, margin: '0px 0px 0px 0px'}}>
        <img className={homeTab ? 'menuIconSize flex activeTab' : 'menuIconSize flex'} onClick={handleHome} src='../../public/Icons/home.png'></img>
        <img className={signalTab ? 'menuIconSize flex activeTab' : 'menuIconSize flex'} onClick={handleSignal} src='../../public/Icons/signal.png'></img>
        <img className={walletTab ? 'menuIconSize flex activeTab' : 'menuIconSize flex'} onClick={handleWallet} src='../../public/Icons/wallet.png'></img>
        <img className={userTab ? 'menuIconSize flex activeTab' : 'menuIconSize flex'} onClick={handleUser} src='../../public/Icons/user.png'></img>
    </div>
    )
} 

export default Menubar
