import React from "react";
import { Center, Flex, SkeletonCircle } from "@chakra-ui/react"
import Link from 'next/link'
import { useRouter } from "next/router";
import { Skeleton } from "@chakra-ui/react";
const Navbar = () => {
    let router = useRouter();
    const [skeleton, setSkeleton] = React.useState(true);
    React.useEffect(() => {
        setTimeout(() => {
            setSkeleton(false)
        }, 1200)
    }, [])

    return (
        <>
            {
                skeleton ? <>
                    <div className="navbar">
                        <Flex>
                            <div className="logo">
                                <SkeletonCircle className="logonavba" />
                            </div>
                            <div className="menu">
                                <div className="home1">
                                    <Skeleton borderRadius={[5, 5, 7, 8, 10]}>Home
                                    </Skeleton>
                                </div>
                                <div className="home1"> <Skeleton borderRadius={[5, 5, 7, 8, 10]}>Services</Skeleton></div>
                                <div className="home1" ><Skeleton borderRadius={[5, 5, 7, 8, 10]}>About Us</Skeleton></div>
                                <div className="home1">
                                    <Skeleton borderRadius={[5, 5, 7, 8, 10]}>Contact Us</Skeleton>
                                </div>
                            </div>
                        </Flex>
                    </div>
                </>
                    :
                    <>
                        <div className="navbar">
                            <Flex>
                                <div className="logo">
                                    <Link href='/'>
                                        <img src="Final Logo-01.svg" />
                                    </Link>
                                </div>
                                <div className="menu">

                                    <Link href='/'>
                                        <p className="home1" style={{ color: router.pathname === '/' ? 'darkblue' : '' }} >Home</p>
                                    </Link>
                                    <Link href='/services'>
                                        <p className="home1" style={{ color: router.pathname === '/services' ? 'darkblue' : '' }}>Services</p>
                                    </Link>
                                    <Link href='/about'>
                                        <p className="home1" style={{ color: router.pathname === '/about' ? 'darkblue' : '' }}>About Us</p>
                                    </Link>
                                    <Link href='/contact'>
                                        <p className="home1" style={{ color: router.pathname === '/contact' ? 'darkblue' : '' }}>
                                            Contact Us
                                        </p>
                                    </Link>
                                </div>
                            </Flex>
                        </div>
                    </>
            }

        </>

    )
}

export default Navbar