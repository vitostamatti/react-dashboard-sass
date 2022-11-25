import React from 'react'

import './widget.scss'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';


const Widget = ({type}) => {
    let data;

    // temp
    const amount = 100
    const perc = 20

    switch(type){
        case "user":
            data={
                title:"USERS",
                isMoney: false,
                link:"See all users",
                icon:<PersonIcon className='icon' style={{
                    backgroundColor: "rgba(255, 0, 0, 0.2)",
                    color:'crimson'
                }}
                />
            };
        break;
        case "order":
            data={
                title:"ORDERS",
                isMoney: false,
                link:"See all orders",
                icon:<ShoppingCartIcon className='icon'
                style={{
                    backgroundColor: "rgba(218, 165, 32, 0.2)",
                    color:'goldenrod'
                }}
                />
            };
        break;
        case "earnings":
            data={
                title:"EARNINGS",
                isMoney: true,
                link:"View net earnings",
                icon:<MonetizationOnIcon className='icon'
                style={{
                    backgroundColor: "rgba(0, 128, 0, 0.2)",
                    color:'green'
                }}
                />
            };
        break;
        case "balance":
            data={
                title:"BALANCE",
                isMoney: true,
                link:"See details",
                icon:<AccountBalanceWalletIcon className='icon'
                style={{
                    backgroundColor: "rgba(128, 0, 128, 0.2)",
                    color:'purple'
                }}
                />
            };
        break;
        default:
            break;
    }

    return (
        <div className='widget'>
            <div className="left">
                <span className="title">
                    {data.title}
                </span>
                <span className="counter">
                    {data.isMoney && "$"}
                    {amount}
                </span>
                <span className="link">
                    {data.link}
                </span>
            </div>
            <div className="right">
                <div className={`percentage ${perc>0 ? "positive": "negative"}`}>
                    {perc>0 ? <ArrowDropUpIcon/> : <ArrowDropDownIcon/>}
                    {perc}%
                </div>
                {data.icon}
            </div>
        </div>
    )
}

export default Widget