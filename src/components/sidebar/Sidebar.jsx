import React from 'react'

import './sidebar.scss'


import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import StoreIcon from '@mui/icons-material/Store';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import GroupIcon from '@mui/icons-material/Group';
import LogoutIcon from '@mui/icons-material/Logout';


const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="top">
        <span className="logo">Logo</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">
            MAIN
          </p>
          <li>
            <DashboardIcon className='icon'/>
            <span>Dashboard</span>
          </li>
          <p className="title">
            LISTS
          </p>
          <li>
            <GroupIcon className='icon'/>
            <span>Users</span>
          </li>
          <li>
            <StoreIcon className='icon'/>
            <span>Products</span>
          </li>
          <li>
            <ShoppingCartIcon className='icon'/>
            <span>Orders</span>
          </li>
          <p className="title">
            USEFUL
          </p>
          <li>
            <LocalShippingIcon className='icon'/>
            <span>Delivery</span>
          </li>
          <li>
            <InsertChartIcon className='icon'/>
            <span>Stats</span>
          </li>
          <li>
            <NotificationsIcon className='icon'/>
            <span>Notifications</span>
          </li>
          <p className="title">
            SERVICE
          </p>
          <li>
            <SettingsSystemDaydreamIcon className='icon'/>
            <span>System Health</span>
          </li>
          <li>
            <PsychologyIcon className='icon'/>
            <span>Logs</span>
          </li>
          <li>
            <SettingsIcon className='icon'/>
            <span>Settings</span>
          </li>
          <p className="title">
            USER
          </p>
          <li>
            <PersonIcon className='icon'/>
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon className='icon'/>
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  )
}

export default Sidebar