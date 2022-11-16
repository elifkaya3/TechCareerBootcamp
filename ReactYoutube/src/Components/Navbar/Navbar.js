import React, { useState } from 'react'
import './Navbar.css'
import { WhiteLogo, Avatar } from '../../Assets/ImageIndex'

const Navbar = () => {

    const [isDarkTheme, setisDarkTheme] = useState(true)
    const [openNav, setOpenNav] = useState(false)
    const [search, setSearch] = useState("")

    const handleSidebar = ()=>{
        const sidebarContainer = document.getElementById('sidebarContainer');
        const homeContainer = document.getElementById('homeContainer');
        homeContainer.classList.toggle('changePadding')
        sidebarContainer.classList.toggle('close')
    }
    
    const handleThemes = ()=>{
        const rootElement = document.getElementById('root');
        rootElement.classList.toggle('dark-theme')
        setisDarkTheme(!isDarkTheme)

    }
    return (
        <div>
            <header>
                <div className='header-div'>
                    <div className='sol-logo'>
                        <div className='hamburg'>
                            <div onClick={handleSidebar}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                        <div>
                            <img src={WhiteLogo} alt="Youtube Logo" title='Youtube' className='logo' />
                        </div>
                    </div>

                    <div className='searchContainer'>
                        <div className='searchBox'>
                            <input type="text" placeholder='Search'  value={search} onChange={(e)=> setSearch(e.target.value)}/>
                            {search !== "" && <span className="material-symbols-rounded" onClick={()=> setSearch("")}>
                                close
                            </span>}
                        </div>
                        <div className='searchBtn'>
                            <span className='material-symbols-rounded'>
                                search
                            </span>
                        </div>
                        <div className='searchMic'>
                            <span className='material-symbols-rounded active'>
                                mic
                            </span>
                        </div>
                        <div className='profileContainer'>
                            <span className='material-symbols-rounded'>
                                add_box
                            </span>
                            <span className='material-symbols-rounded'>
                                notifications
                            </span>
                            <img src={Avatar} alt="Your Avatar" title='Elif Kaya' className='avataricon' onClick={()=> setOpenNav(!openNav)}/>
                        </div>
                    </div>
                    {openNav && <div className="profileBtns">
                    <div className="avatarInfo profileTab">
                        <img src={Avatar} alt="Your Avatar" title='Avatar' />
                        <p>Elif Kaya</p>
                    </div>
                    <div className="horizontalLine"></div>
                    <div className="profileTabs">
                        <div className="profileTab">
                            <span className='material-symbols-rounded'>
                                account_box
                            </span>
                            <p>Kanalınız</p>
                        </div>
                        <div className="profileTab">
                            <span className='material-symbols-rounded'>
                                play_circle
                            </span>
                            <p>Youtube Studio</p>
                        </div>
                        <div className="profileTab">
                            <span className='material-symbols-rounded'>
                                logout
                            </span>
                            <p>Çıkış Yap</p>
                        </div>
                    </div>
                    <div className="horizontalLine"></div>
                    <div className="profileTabs">
                        <div className="profileTab">
                            <span className='material-symbols-rounded'>
                                monetization_on
                            </span>
                            <p>Satın Alma ve Üyelikler</p>
                        </div>
                        <div className="profileTab">
                            <span className='material-symbols-rounded'>
                                admin_panel_settings
                            </span>
                            <p>Youtube'daki Verileriniz</p>
                        </div>
                    </div>
                    <div className="horizontalLine"></div>
                    <div className="profileTabs">
                        {isDarkTheme && <div className="profileTab" onClick={handleThemes}>
                            <span className='material-symbols-rounded'>
                                light_mode
                            </span>
                            <p>Açık Tema</p>
                        </div>}
                        {!isDarkTheme && <div className="profileTab"  onClick={handleThemes}>
                            <span className='material-symbols-rounded'>
                                bedtime
                            </span>
                            <p>Koyu Tema</p>
                        </div>}
                        <div className="profileTab">
                            <span className='material-symbols-rounded'>
                                settings
                            </span>
                            <p>Ayarlar</p>
                        </div>
                    </div>
                    <div className="horizontalLine"></div>
                    <div className="profileTabs">
                        <div className="profileTab">
                            <span className='material-symbols-rounded'>
                                help
                            </span>
                            <p>Yardım</p>
                        </div>
                        <div className="profileTab">
                            <span className='material-symbols-rounded'>
                                sms_failed
                            </span>
                            <p>Geri Bildirim Gönder</p>
                        </div>
                    </div>
                </div>}
                </div>
            </header>
        </div>
    )
}

export default Navbar