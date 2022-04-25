import * as React from 'react';
import {
    Box,
    Button,
    SimpleGrid,
    Stack
} from "@chakra-ui/react"
import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare } from 'react-icons/ai'
import { FaTelegramPlane } from 'react-icons/fa'
import { PhoneIcon, AddIcon, WarningIcon, LockIcon } from '@chakra-ui/icons'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
const SkeletonHome = () => {
    return (
        <div className="homeSkeleton">
            <div className="BoxMainofLandingPage">
                <SimpleGrid columns={[1, 1, 2, 2]} spacing={5}>
                    <Box className="mainleft">
                        <Stack >
                            <Skeleton borderRadius={[5, 5, 7, 8, 10]}>
                                <h1 className="make">
                                    Your Workplace</h1>
                            </Skeleton>
                            <Skeleton borderRadius={[5, 5, 7, 8, 10]}>
                                <p className="para">right place to create your perfect website, other application & system administrator,
                                    right place to create your perfect website, other application & system administrator,
                                </p>
                            </Skeleton>
                            <div className="hth">
                                <Skeleton borderRadius={[5, 5, 7, 8, 10]}>
                                    <Button className="ntn">Get Started</Button>
                                </Skeleton>
                            </div>
                        </Stack>
                    </Box>
                    <Box w='100%'>
                        <Skeleton borderRadius={[5, 5, 7, 8, 10]}>
                            <div className="gif">
                                <img src="giphy.gif" className="gifImage" />
                            </div>
                        </Skeleton>
                    </Box>
                </SimpleGrid>
                <Skeleton borderRadius={[5, 5, 7, 8, 10]}>
                    <h1 className="miniservices">Our Services & Products</h1>
                </Skeleton>
                <div className="ourServices">
                    <SimpleGrid
                        spacing={10}
                        columns={[1, 1, 2, 2]}
                        className="mainservices"
                    >
                        <Skeleton borderRadius={[5, 5, 7, 8, 10]}>
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
                        </Skeleton>
                        <Skeleton borderRadius={[5, 5, 7, 8, 10]}>
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
                        </Skeleton>
                        <Skeleton borderRadius={[5, 5, 7, 8, 10]}>
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
                        </Skeleton>
                        <Skeleton borderRadius={[5, 5, 7, 8, 10]}>
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
                        </Skeleton>
                    </SimpleGrid>
                </div>
                <Skeleton borderRadius={[5, 5, 7, 8, 10]}>
                    <h1 className="miniservices">The Benefit of Using Our Application</h1>
                </Skeleton>
                <SimpleGrid columns={[2, 2, 2, 4]} className="benefit">
                    <Box className="benefitBox">
                        <div className="bene">
                            <SkeletonCircle>
                                <div className="iconing">
                                    <PhoneIcon className="iconcustom" />
                                </div>
                            </SkeletonCircle>
                        </div>
                        <div className="bene">
                            <Skeleton borderRadius={[5, 5, 7, 8, 10]}>
                                <h1 className="g2">Security</h1>
                            </Skeleton>
                        </div>
                        <div className="bene">
                            <Skeleton borderRadius={[5, 5, 7, 8, 10]}>
                                <p className="g3">Best App for Privacy</p>
                            </Skeleton>
                        </div>
                    </Box>
                    <Box className="benefitBox">
                        <div className="bene">
                            <SkeletonCircle>
                                <div className="iconing">
                                    <WarningIcon className="iconcustom" />
                                </div>
                            </SkeletonCircle>
                        </div>
                        <div className="bene">
                            <Skeleton borderRadius={[5, 5, 7, 8, 10]}>
                                <h1 className="g2">How Easy</h1>
                            </Skeleton>
                        </div>
                        <div className="bene">
                            <Skeleton borderRadius={[5, 5, 7, 8, 10]}>
                                <p className="g3">Add your Customer</p>
                            </Skeleton>
                        </div>
                        <div className="bene">
                            <Skeleton borderRadius={[5, 5, 7, 8, 10]}>
                                <p className="g3">By Click On The Button</p>
                            </Skeleton>
                        </div>
                    </Box>
                    <Box className="benefitBox">
                        <div className="bene">
                            <SkeletonCircle>
                                <div className="iconing">
                                    <AddIcon className="iconcustom" />
                                </div>
                            </SkeletonCircle>
                        </div>
                        <div className="bene">
                            <Skeleton borderRadius={[5, 5, 7, 8, 10]}>
                                <h1 className="g2">Name</h1>
                            </Skeleton>
                        </div>
                        <div className="bene">
                            <Skeleton borderRadius={[5, 5, 7, 8, 10]}>
                                <p className="g3">Bring Your Own</p>
                            </Skeleton>
                        </div>
                        <div className="bene">
                            <Skeleton borderRadius={[5, 5, 7, 8, 10]}>
                                <p className="g3">Brand</p>
                            </Skeleton>
                        </div>
                    </Box>
                    <Box className="benefitBox">
                        <div className="bene">
                            <SkeletonCircle>
                                <div className="iconing">
                                    <LockIcon className="iconcustom" />
                                </div>
                            </SkeletonCircle>
                        </div>
                        <div className="bene">
                            <Skeleton borderRadius={[5, 5, 7, 8, 10]}>
                                <h1 className="g2">QR Core</h1>
                            </Skeleton>
                        </div>
                        <div className="bene">
                            <Skeleton borderRadius={[5, 5, 7, 8, 10]}>
                                <p className="g3">Anyone Can Scan</p>
                            </Skeleton>
                        </div>
                        <div className="bene">
                            <Skeleton borderRadius={[5, 5, 7, 8, 10]}>
                                <p className="g3">Your App's QR</p>
                            </Skeleton>
                        </div>
                    </Box>
                </SimpleGrid>
            </div>
            <Skeleton>

                <div className="mainpartner">
                    <h1 className="minipartner">Our Partner</h1>
                    <div className="boxofcarousel">
                        <Carousel className="carousel">
                            <div>
                                <Skeleton>
                                    <img src="Go_Credit-02.png" />
                                </Skeleton>
                            </div>
                            <div>
                                <Skeleton>
                                    <img src="Go-Global-Mart-Lssogo-01.png" />
                                </Skeleton>
                            </div>
                            <div>
                                <Skeleton>
                                    <img src="GoCreditl-02.png" />
                                </Skeleton>
                            </div>
                            <div>
                                <Skeleton>
                                    <img src="TV Logo-01 - Copy.png" />
                                </Skeleton>
                            </div>
                            <div>
                                <Skeleton>
                                    <img src="TV Logo-02.png" />
                                </Skeleton>
                            </div>

                        </Carousel>
                    </div>
                    <p className="paragraph1">
                        more then 10k+ trusted client are connected with us
                    </p>
                    <div className="layoutparagraph">
                        <Button className="button1">
                            learn more
                        </Button>
                    </div>
                    <div className="layout2">
                        <SimpleGrid columns={[2, 4, 4, 4]} spacing={5}>
                            <Box >
                                <span className="sponsor">
                                    <div className="facebook">
                                        <AiFillFacebook />
                                    </div>
                                    facebook
                                </span>
                            </Box>
                            <Box >
                                <span className="sponsor2">
                                    <div className="telegram">
                                        <FaTelegramPlane />
                                    </div>
                                    telegram
                                </span>
                            </Box>
                            <Box >
                                <span className="sponsor3">
                                    <div className="instagram">
                                        <AiFillInstagram />
                                    </div>
                                    instagram</span>
                            </Box>
                            <Box >
                                <span className="sponsor4">
                                    <div className="twitter">
                                        <AiFillTwitterSquare />
                                    </div>
                                    twitter
                                </span>
                            </Box>
                        </SimpleGrid>
                    </div>
                </div>
            </Skeleton>
        </div >
    )
}

export default SkeletonHome