import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import DataObjectIcon from '@mui/icons-material/DataObject';
import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';
import Brightness5OutlinedIcon from '@mui/icons-material/Brightness5Outlined';


import React, { useState } from 'react';
import Shop from './Shop';
import Tickets from './Tickets';
import Users from './Users';
import Settings from './Settings';
import Dashboard from './Dashboard';
import Analytics from './Analytics';



export default function Navbar() {

    const [showText, setShowText] = useState(true);
    const [isi, setIsi] = useState('Dashboard');



    function buttonHandler() {
        setShowText(!showText);
    }

    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        // You can also save the dark mode preference in local storage or a global state management solution.
    };


    return (
        <div className={darkMode ? 'dark' : ''}>
            <div className={`flex h-full dark:bg-slate-700`}>


                <div className={`h-full dark:bg-slate-700 dark:text-white`}>
                    <h1 className="text-xl font-bold text-center py-5 ">
                        <span className="">{showText ? (
                            <span className="ml-2 "><a href=''><DataObjectIcon />RifDev</a></span>
                        ) : (
                            <span className="ml-2"><a href=''><DataObjectIcon /></a></span>
                        )}</span>
                    </h1>
                    <div className='h-full dark:bg-slate-700'>
                        <ul className=" py-5 divide-y divide-slate-200 dark:divide-slate-800">
                            <li
                                className={`py-2 px-5 w-max cursor-pointer ${isi === 'Dashboard' ? 'text-red-600' : 'hover:text-red-600'
                                    }`}
                                onClick={() => {
                                    setIsi('Dashboard');
                                }}
                            >
                                <DashboardOutlinedIcon />
                                {showText && <span className="ml-2">Dashboard</span>}
                            </li>
                            <li
                                className={`py-2 px-5 cursor-pointer ${isi === 'Shop' ? 'text-red-600' : 'hover:text-red-600'
                                    }`}
                                onClick={() => {
                                    setIsi('Shop');
                                }}
                            >
                                <ShoppingCartOutlinedIcon />
                                {showText && <span className="ml-2">Shop</span>}
                            </li>
                            <li className={`py-2 px-5 cursor-pointer ${isi === 'Analytic' ? 'text-red-600' : 'hover:text-red-600'
                                }`}
                                onClick={() => {
                                    setIsi('Analytic');
                                }}>
                                <AssessmentOutlinedIcon />
                                {showText && <span className="ml-2">Analytic</span>}
                            </li>
                            <li className={`py-2 px-5 cursor-pointer ${isi === 'Tickets' ? 'text-red-600' : 'hover:text-red-600'
                                }`}
                                onClick={() => {
                                    setIsi('Tickets');
                                }}>
                                <ConfirmationNumberOutlinedIcon />
                                {showText && <span className="ml-2">Tickets</span>}
                            </li>
                            <li className={`py-2 px-5 cursor-pointer ${isi === 'Users' ? 'text-red-600' : 'hover:text-red-600'
                                }`}
                                onClick={() => {
                                    setIsi('Users');
                                }}>
                                <GroupOutlinedIcon />
                                {showText && <span className="ml-2">Users</span>}
                            </li>
                            <li className={`py-2 px-5 cursor-pointer ${isi === 'Settings' ? 'text-red-600' : 'hover:text-red-600'
                                }`}
                                onClick={() => {
                                    setIsi('Settings');
                                }}>
                                <SettingsOutlinedIcon />
                                {showText && <span className="ml-2">Settings</span>}
                            </li>
                        </ul>

                        <button className='text-red-600 px-5 font-bold'>
                            <LogoutOutlinedIcon />
                            {showText && <span className="ml-2"><a href="">Log Out</a></span>}
                        </button>
                    </div>
                </div>
                <div className={`h-max w-full py-4 px-2 dark:bg-slate-700 dark:text-white `}>
                    <div className='flex justify-between pb-3'>
                        <div className='flex '>
                            <button onClick={buttonHandler}><MenuOutlinedIcon sx={{ fontSize: 30 }} /></button>
                            <div className='flex items-center'>
                                <input type="text" name="cari" id="" className='ms-2 outline-none px-3 py-1 border rounded-l-full border-slate-200 dark:bg-slate-800 dark:border-slate-500' />
                                <span className='bg-blue-600 text-white px-3 py-1 rounded-r-full'>
                                    <button type='submit'>
                                        <SearchIcon />
                                    </button>
                                </span>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <div className="p-4 flex-1">
                                <label className="switch cursor-pointer">
                                    <input type="checkbox" onChange={toggleDarkMode} className='hidden' />
                                    <span className={`slider round ${darkMode ? 'rotate-180' : ''}`}>
                                        {darkMode ?
                                            <span className='flex gap-2'>
                                                <span><Brightness5OutlinedIcon /></span>
                                                {/* <h1 className=''>Dark</h1> */}
                                            </span>
                                            :
                                            <span className='flex gap-2'>
                                                <NightlightOutlinedIcon />
                                                
                                            </span>
                                        }

                                    </span>
                                </label>
                            </div>

                            <div>
                                <div className='relative me-4'>
                                    <button>
                                        <NotificationsNoneIcon sx={{ fontSize: 25 }} />
                                    </button>
                                    <p className='absolute block top-0 right-0 bg-red-600 rounded-full text-white text-xs'>12</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className={`daftar px-3 py-5 bg-slate-100 dark:bg-slate-800`}>
                        {/* {isi === 'Dashboard' && <Dashboard />} */}
                        <Dashboard/>
                    </div>
                </div>
            </div>

        </div>
    )
}