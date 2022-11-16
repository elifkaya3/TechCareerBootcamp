import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.css'

const Sidebar = () => {
    const [selectedId, setSelectedId] = useState("home")
    const sideBarData = {
        mainTabs: [
            {
                head: "Anasayfa",
                icon: "home"
            },
            {
                head: "Keşfet",
                icon: "explore"
            },
            {
                head: "Shorts",
                icon: "bolt"
            },
            {
                head: "Abonelikler",
                icon: "subscriptions"
            }
        ],
        externalTabs: [
            {
                head: "Kitaplık",
                icon: "video_library"
            },
            {
                head: "Geçmiş",
                icon: "history"
            },
            {
                head: "Videolarınız",
                icon: "smart_display"
            },
            {
                head: "Daha sonra izle",
                icon: "browse_gallery"
            },
            {
                head: "Beğendiğim Videolar",
                icon: "thumb_up_off"
            }
        ],
        channels: [
            {
                "logo": "https://yt3.ggpht.com/ytc/AMLnZu-0ZFlPJSSrc3HL_kNOY5LtHysire2aNCP72z-H6w=s176-c-k-c0x00ffffff-no-rj",
                "name": "Engin Demiroğ",
                id: 'EnginDemirog'
            },
            {
                "logo": "https://yt3.ggpht.com/ytc/AMLnZu8Xvd9Qd6_8-AinadiOyEajdtQV4DuEpPtDJ9Pviw=s176-c-k-c0x00ffffff-no-rj",
                "name": "Fatih Acet",
                id: 'FatihAcet'
            },
            {
                "logo": "https://yt3.ggpht.com/ytc/AMLnZu_-O-ZxuvxDalPs4BFj3YW1NG4Kvi75kLUi-gOiyw=s176-c-k-c0x00ffffff-no-rj",
                "name": "Yazılım Bilimi",
                id: 'YazilimBilimi'
            },
            {
                "logo": "https://yt3.ggpht.com/ytc/AMLnZu8Ulo4MAWxImjt9oS8P6YZlKkz9SBSicsejkXWxQw=s176-c-k-c0x00ffffff-no-rj",
                "name": "Atıl Samancıoğlu",
                id: 'AtilSamancioglu'
            },
            {
                "logo": "https://yt3.ggpht.com/FtJSfntJeq7ZHU9K_OGPJBgvy7OMMwC1VAPVRVbJyTRypjj7TzxeoCOs3IV9jbqe94v4zXaS=s176-c-k-c0x00ffffff-no-rj",
                "name": "Kodluyoruz",
                id: 'Kodluyoruz'
            },
            {
                "logo": "https://yt3.ggpht.com/QiI-c4cFyRPD0qVwTQooC3dlgJqHA_t6CpEAv818om-mqL9bqNDL4L_qXQVXx_eY76D_7cLD=s176-c-k-c0x00ffffff-no-rj",
                "name": "The Weeknd",
                id: 'TheWeeknd'
            }
        ],
        explore: [
            {
                head: "Filmler",
                icon: "theaters"
            },
            {
                head: "Canlı",
                icon: "sensors"
            },
            {
                head: "Moda",
                icon: "styler"
            },
            {
                head: "Eğitim",
                icon: "lightbulb"
            },
            {
                head: "Spor",
                icon: "sports_soccer"
            }
        ],
        moreYoutubes: [
            {
                "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png",
                "name": "Youtube Premium"
            },
            {
                "logo": "https://seeklogo.com/images/Y/youtube-music-logo-50422973B2-seeklogo.com.png",
                "name": "Youtube Music"
            },
            {
                "logo": "https://seeklogo.com/images/Y/youtube-kids-logo-40C22D4579-seeklogo.com.png",
                "name": "Youtube Kids"
            },
            {
                "logo": "https://play-lh.googleusercontent.com/HPyYXe-ToibRPGtFd4Ni4gi7RVfpkj4s8HwtC6fhDPqO7JfkF1-ld2SYFdzOQh-9zXU",
                "name": "Youtube TV"
            }
        ],
        settings: [
            {
                head: "Ayarlar",
                icon: "settings"
            },
            {
                head: "İçerik bildirme geçmişi",
                icon: "flag"
            },
            {
                head: "Yardım",
                icon: "help"
            },
            {
                head: "Geri bildirim gönder",
                icon: "sms_failed"
            }
        ]
    }



    return (
        <div>
            <div className="sidebarSection close" id='sidebarContainer'>
                <div className="miniSidebar" id='miniSidebar'>
                    {sideBarData.mainTabs.map((tab, i) => {
                        return <div key={i} className={`miniSidebarTab ${tab.icon === selectedId && 'active'}`} onClick={() => setSelectedId(tab.icon)}>
                            <span className='material-symbols-rounded'>{tab.icon}</span>
                            <p>{tab.head}</p>
                        </div>
                    })}
                </div>
                <div className="sidebarContainer" id='sidebarContainer'>
                    <div className="sideBarTabs">
                        <div className="tabContainer">
                            {sideBarData.mainTabs.map((tab, i) => {
                                return <div key={i} className={`sidebarTab ${tab.icon === selectedId && 'active'}`} onClick={() => setSelectedId(tab.icon)}>
                                    <span className='material-symbols-rounded'>{tab.icon}</span>
                                    {tab.head}
                                </div>
                            })}
                        </div>
                        <div className="horizontalLine" style={{ margin: '10px 0' }}></div>
                        <div className="tabContainer">
                            {sideBarData.externalTabs.map((tab, i) => {
                                return <div key={i} className={`sidebarTab ${tab.icon === selectedId && 'active'}`} onClick={() => setSelectedId(tab.icon)}>
                                    <span className='material-symbols-rounded'>{tab.icon}</span>
                                    {tab.head}
                                </div>
                            })}
                        </div>
                        <div className="horizontalLine" style={{ margin: '10px 0' }}></div>
                        <div className="subscriptions">
                            <h2 className='mainSidebarHead'>Subscriptions</h2>
                            {sideBarData.channels.map((tab) => {
                                return <div className="channelTab" key={tab.logo}>
                                    <img src={tab.logo} alt={tab.logo} />
                                    <p>{tab.name}</p>
                                </div>
                            })}
                        </div>
                        <div className="horizontalLine" style={{ margin: '10px 0' }}></div>
                        <div className="explore">
                            <h2 className="mainSidebarHead">Explore</h2>
                            {sideBarData.explore.map((tab) => {
                                return <div className="sidebarTab" key={tab.head}>
                                    <span className='material-symbols-rounded'>{tab.icon}</span>
                                    {tab.head}
                                </div>
                            })}
                        </div>
                        <div className="horizontalLine" style={{ margin: '10px 0' }}></div>
                        <div className="moreYoutube">
                            <h2 className="mainSidebarHead">More on Youtube</h2>
                            {sideBarData.moreYoutubes.map((tab) => {
                                return <div className="youtubeTabs" key={tab.logo}>
                                    <img src={tab.logo} alt={tab.logo} />
                                    <p>{tab.name}</p>
                                </div>
                            })}
                        </div>
                        <div className="horizontalLine" style={{ margin: '10px 0' }}></div>
                        <div className="tabContainer">
                            {sideBarData.settings.map((tab, i) => {
                                return <div key={i} className={`sidebarTab ${tab.icon === selectedId && 'active'}`} onClick={() => setSelectedId(tab.icon)}>
                                    <span className='material-symbols-rounded'>{tab.icon}</span>
                                    {tab.head}
                                </div>
                            })}
                        </div>
                        <div className="horizontalLine" style={{ margin: '10px 0' }}></div>

                        <div className="sidebarBottomLinks">
                            <Link to="/">Hakkında</Link>
                            <Link to="/">Basın</Link>
                            <Link to="/">Telif hakkı</Link>
                            <Link to="/">Bize ulaşın</Link>
                            <Link to="/">İçerik Üreticiler</Link>
                            <Link to="/">Reklam verme</Link>
                            <Link to="/">Geliştiriciler</Link>
                        </div>
                        <div className="sidebarBottomLinks">
                            <Link to="/">Şartlar</Link>
                            <Link to="/">Gizlilik</Link>
                            <Link to="/">Politika &amp; Güvenlik</Link>
                            <Link to="/">YouTube Nasıl Çalışıyor?</Link>
                            <Link to="/">Yeni özellikleri deneyin</Link>
                            <h3>&copy; Elif Kaya</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Sidebar