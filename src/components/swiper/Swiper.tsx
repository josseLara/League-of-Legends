// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-fade";
import "../../styles/Swiper.scss";

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination, Parallax } from "swiper";
import { Box } from "@mui/material";
import { useState } from "react";
import { useTheme } from '@mui/material/styles';

function SwiperSkins({ skins, champion }: { skins: any, champion: string }) {
    const theme = useTheme();
    const [skinSelected, setSkinSelected] = useState(0);
    const handleSlideChange = (swiper: any) => {
        let skin = skins[swiper.realIndex];
        setSkinSelected(skin.num);
    };



    return (
        <>
            <Box sx={{ display: 'flex', gap: '140px',pr:'20px',
             [theme.breakpoints.down('lg')]: {
                flexDirection: 'column',
        }, }}>

                <div className='champ_skins_info'>
                    <div className="champ_skins_info_bg1" style={{ backgroundImage: `url(https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion}_${skinSelected}.jpg)` }}></div>
                    <div className="champ_skins_info_bg2" style={{ backgroundImage: `url(https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion}_${skinSelected}.jpg)` }}></div>
                </div>

                <Swiper
                   
                    speed={600}
                    parallax={true}
                    spaceBetween={30}
                    effect={"fade"}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    navigation={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay, Parallax, EffectFade, Navigation, Pagination]}
                    className="mySwiper"
                    onSlideChangeTransitionEnd={handleSlideChange}
                >
                    {skins?.slice(1).map((skin: any) => {
                    
                        return (
                            <SwiperSlide key={skin?.num} >
                                <div className="skinSwiper">
                                    <p className="skinSwiper_title" data-swiper-parallax="-500">
                                    {skin?.name}
                                    </p>
                                    <p><span>X</span>X<span>XX</span>X</p>
                                </div>
                                <img src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion}_${skin?.num}.jpg`} alt={skin?.name} />
                            </SwiperSlide>

                        )
                    })}
                </Swiper>
            </Box>
        </>
    );
}
export { SwiperSkins }