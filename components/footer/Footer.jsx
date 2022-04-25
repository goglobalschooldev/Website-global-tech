import React from 'react'
import { Divider, SimpleGrid, Box, Skeleton, SkeletonCircle, Stack, SkeletonText, Center } from '@chakra-ui/react'
import { GrInstagram } from "react-icons/gr";
import { FaFacebookMessenger, } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import { SiTelegram } from "react-icons/si";
const Footer = () => {
    const [skeleton, setSkeleton] = React.useState(true);
    React.useEffect(() => {
        setTimeout(() => {
            setSkeleton(false);
        }, 1200)
    }, [])
    return (
        <>
            {
                skeleton ?
                    <>
                        <div className='mainfooter'>
                            <div className="centeringfooter">
                                <Skeleton borderRadius={[5, 5, 7, 8, 10]}>
                                    <SimpleGrid columns={[1, 2, 2, 2]} >
                                        <Box className='expand'>
                                            <div>
                                                <div className='boxingImg'>
                                                    <img src='Final Logo-01.svg' className='ImgLogo' />
                                                </div>
                                                <p className="des">We are professional<br /> company<br /> who works on MICE,
                                                </p>
                                            </div>
                                        </Box>
                                        <Box className='pushright'>
                                            <div>
                                                <div className="righttitle">
                                                    <h1 className="titles">
                                                        Get In Touch
                                                    </h1>
                                                </div>
                                                <p className="des1">
                                                    Thmey Village, Svay Dangkum<br />
                                                    Siem Reap<br />
                                                    info@go-globaltech.com<br />
                                                </p>
                                            </div>
                                        </Box>
                                    </SimpleGrid>
                                </Skeleton>

                            </div>
                            <SimpleGrid columns={1}>
                                <Box className='divider' >
                                    <Divider />
                                    <div className="footerbox">
                                        <Skeleton borderRadius={[5, 5, 7, 8, 10]}>
                                            <h1 className="footertitle">2021 GO GLOBAL TECH</h1>
                                        </Skeleton>
                                    </div>
                                </Box>
                            </SimpleGrid>
                        </div>
                    </>
                    :
                    <>
                        <div className='mainfooter'>
                            <div className="centeringfooter">
                                <SimpleGrid columns={[1, 2, 2, 2]} >
                                    <Box className='expand'>
                                        <div>
                                            <div className='boxingImg'>
                                                <img src='Final Logo-01.svg' className='ImgLogo' />
                                            </div>
                                            <p className="des">We are professional<br /> company<br /> who works on MICE,
                                            </p>
                                        </div>
                                    </Box>
                                    <Box className='pushright'>
                                        <div>
                                            <div className="righttitle">
                                                <h1 className="titles">
                                                    Get In Touch
                                                </h1>
                                            </div>
                                            <p className="des1">
                                                Thmey Village, Svay Dangkum<br />
                                                Siem Reap<br />
                                                info@go-globaltech.com<br />
                                            </p>
                                        </div>
                                    </Box>
                                </SimpleGrid>
                            </div>
                            <SimpleGrid columns={1}>
                                <Box className='divider' >
                                    <Divider />
                                    <div className="footerbox">
                                        <h1 className="footertitle">2021 GO GLOBAL TECH</h1>
                                    </div>
                                </Box>
                            </SimpleGrid>
                        </div>
                    </>
            }
        </>
    )
}

export default Footer