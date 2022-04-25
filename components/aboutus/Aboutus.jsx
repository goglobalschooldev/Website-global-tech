import { Avatar, Box, Center, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { GrInstagram } from "react-icons/gr";
import { FaFacebookMessenger } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import { SiTelegram } from "react-icons/si";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Aboutus = () => {

    return (

        <div className='about-us'>
            <h1 className="toptitle">
                We are professional
            </h1>
            <div className="centerdes">
                <div>
                    <p className="description">
                        Every website that we build is special for our clients. We are ready to provide services from start to finish.
                    </p>
                    <p className="description">
                        the following is service you get.
                    </p>
                    <p className="description">
                        Advertising and Exhibition Booth Contractor Company
                    </p>
                </div>
            </div>


            <div className="boxofteam">
                <SimpleGrid columns={[1, 1, 3, 3]} spacing='40px' className='mainerofabout'>
                    <Box className='Avatarbox' >
                        <div className='centeroffirstAvatar' >
                            <Avatar name='Rathana Theang' src='photo_2021-12-28_08-52-31.jpg' className='firstAvatar' />
                        </div>
                        <h1 className="titleoffirstavatar">Chaktokrong Chhly</h1>
                        <p className="paragraphoffirstavatar">Frontend Developer</p>
                        <div className='iconofavatar'>
                            <ImFacebook2 className='iconavatar' />
                            <FaFacebookMessenger className='iconavatar' />
                            <SiTelegram className='iconavatar' />
                            <GrInstagram className='iconavatar' />
                        </div>
                    </Box>
                    <Box w='100%' className='Avatarbox' >
                        <div className='centeroffirstAvatar'>
                            <Avatar name='Rathana Theang' src='photo_2021-02-11_16-23-11.jpg' className='firstAvatar' />
                        </div>
                        <h1 className="titleoffirstavatar">Rathana Theang</h1>
                        <p className="paragraphoffirstavatar">UX/UI Designer</p>
                        <div className='iconofavatar'>
                            <ImFacebook2 className='iconavatar' />
                            <FaFacebookMessenger className='iconavatar' />
                            <SiTelegram className='iconavatar' />
                            <GrInstagram className='iconavatar' />
                        </div>
                    </Box>
                    <Box w='100%' className='Avatarbox' >
                        <div className='centeroffirstAvatar'>
                            <Avatar name='Rathana Theang' src='photo_2022-03-16_10-55-45.jpg' className='firstAvatar' />
                        </div>
                        <h1 className="titleoffirstavatar">Vannak Vy</h1>
                        <p className="paragraphoffirstavatar">Backend Developer</p>
                        <div className='iconofavatar'>
                            <ImFacebook2 className='iconavatar' />
                            <FaFacebookMessenger className='iconavatar' />
                            <SiTelegram className='iconavatar' />
                            <GrInstagram className='iconavatar' />
                        </div>
                    </Box>
                </SimpleGrid>
            </div>
        </div>
    )
}

export default Aboutus