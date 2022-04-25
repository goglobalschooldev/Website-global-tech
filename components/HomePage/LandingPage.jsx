import * as React from 'react';
import {
    Box,
    Button,
    SimpleGrid,
    Stack
} from "@chakra-ui/react"
import { PhoneIcon, AddIcon, WarningIcon, LockIcon } from '@chakra-ui/icons'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import SkeletonHome from '../skeletonhome/SkeletonHome';

const LandingPage = () => {
    const [skeleton, setSkeleton] = React.useState(true);
    React.useEffect(() => {
        setTimeout(() => {
            setSkeleton(false)
        }, 1200);
    }, [])
    return (
        <>
            {
                skeleton ?
                    <SkeletonHome /> : <>
                        <div className="home">
                            <div className="BoxMainofLandingPage">
                                <SimpleGrid columns={[1, 1, 2, 2]} spacing={[5, 5, 0, 0]} className="landingPage">
                                    <Box className="mainleft">
                                        <h1 className="make">Your Workplace</h1>
                                        <p className="para">right place to create your perfect website, other application & system administrator,
                                            right place to create your perfect website, other application & system administrator,
                                        </p>
                                        <div className="hth">
                                            <Button className="ntn">Get Started</Button>
                                        </div>
                                    </Box>
                                    <Box>
                                        <div className="gif">
                                            <img src="giphy.gif" className="gifImage" />
                                        </div>
                                    </Box>
                                </SimpleGrid>

                                <h1 className="miniservices">Our Services & Products</h1>

                                <div className="ourServices">
                                    <SimpleGrid
                                        spacing={[5, 8, 8, 10]}
                                        columns={[1, 1, 2, 2]}
                                        className="mainservices"
                                    >
                                        <Box className="firstbox">
                                            <SimpleGrid columns={[1, 1, 1, 2]}>
                                                <Box>
                                                    <img src="ef827d98fdda66a6282d2901f09532e3.gif" className="giffing" />
                                                </Box>
                                                <Box className="boxing">
                                                    <h1 className="title">Web App Developement</h1>
                                                    <p className="texting">
                                                        Best Competitive Edge
                                                    </p>
                                                    <p className="texting">
                                                        Uses Numberous Platforms
                                                    </p>
                                                    <div>
                                                        <Button className="buttony">Learn more</Button>
                                                    </div>
                                                </Box>
                                            </SimpleGrid>
                                        </Box>
                                        <Box className="firstbox">
                                            <SimpleGrid columns={[1, 1, 1, 2]}>
                                                <Box>
                                                    <img src="DXKg.gif" className="giffing" />
                                                </Box>
                                                <Box className="boxing">
                                                    <h1 className="title">Mobile App Developement</h1>
                                                    <p className="texting">
                                                        Best Speed Loading
                                                    </p>
                                                    <p className="texting">
                                                        Flexibility & Security
                                                    </p>
                                                    <div>
                                                        <Button className="buttony">Learn more</Button>
                                                    </div>
                                                </Box>
                                            </SimpleGrid>
                                        </Box>
                                        <Box className="firstbox">
                                            <SimpleGrid columns={[1, 1, 1, 2]}>
                                                <Box>
                                                    <img src="responsive_website_adcortex.gif" className="giffing" />
                                                </Box>
                                                <Box className="boxing">
                                                    <h1 className="title">Desktop App Developement</h1>
                                                    <p className="texting">
                                                        Best Performance
                                                    </p>
                                                    <p className="texting">
                                                        Completed Faster So Far
                                                    </p>
                                                    <div>
                                                        <Button className="buttony">Learn more</Button>
                                                    </div>
                                                </Box>
                                            </SimpleGrid>
                                        </Box>
                                        <Box className="firstbox">
                                            <SimpleGrid columns={[1, 1, 1, 2]}>
                                                <Box>
                                                    <img src="3.gif" className="giffing" />
                                                </Box>
                                                <Box className="boxing">
                                                    <h1 className="title">System Administration</h1>
                                                    <p className="texting">
                                                        Highest Security &
                                                    </p>
                                                    <p className="texting">
                                                        Performance
                                                    </p>
                                                    <div>
                                                        <Button className="buttony">Learn more</Button>
                                                    </div>
                                                </Box>
                                            </SimpleGrid>
                                        </Box>
                                    </SimpleGrid>
                                </div>
                                <h1 className="miniservices">The Benefit of Using Our Application</h1>
                                <SimpleGrid columns={[1, 2, 2, 4]} className="benefit">
                                    <Box className="benefitBox">
                                        <div className="bene">
                                            <div className="iconing">
                                                <PhoneIcon className="iconcustom" />
                                            </div>
                                        </div>
                                        <h1 className="g2">Security</h1>
                                        <p className="g3">Best App for Privacy</p>
                                    </Box>
                                    <Box className="benefitBox">
                                        <div className="bene">
                                            <div className="iconing">
                                                <WarningIcon className="iconcustom" />
                                            </div>
                                        </div>
                                        <h1 className="g2">How Easy</h1>
                                        <p className="g3">Add your Customer</p>
                                        <p className="g3">By Click On The Button</p>
                                    </Box>
                                    <Box className="benefitBox">
                                        <div className="bene">
                                            <div className="iconing">
                                                <AddIcon className="iconcustom" />
                                            </div>
                                        </div>
                                        <h1 className="g2">Name</h1>
                                        <p className="g3">Bring Your Own</p>
                                        <p className="g3">Brand</p>
                                    </Box>
                                    <Box className="benefitBox">
                                        <div className="bene">
                                            <div className="iconing">
                                                <LockIcon className="iconcustom" />
                                            </div>
                                        </div>
                                        <h1 className="g2">QR Core</h1>
                                        <p className="g3">Anyone Can Scan</p>
                                        <p className="g3">Your App's QR</p>
                                    </Box>
                                </SimpleGrid>

                            </div>

                            <div className="mainpartner">
                                <h1 className="minipartner">Our Partner</h1>
                                <div className="boxofcarousel">
                                    <Carousel className="carousel">
                                        <div>
                                            <img src="Go_Credit-02.png" />
                                        </div>
                                        <div>
                                            <img src="Go-Global-Mart-Lssogo-01.png" />
                                        </div>
                                        <div>
                                            <img src="GoCreditl-02.png" />
                                        </div>
                                        <div>
                                            <img src="TV Logo-01 - Copy.png" />
                                        </div>
                                        <div>
                                            <img src="TV Logo-02.png" />
                                        </div>
                                    </Carousel>
                                </div>
                            </div>
                        </div>
                    </>
            }
        </>
    )
}

export default LandingPage