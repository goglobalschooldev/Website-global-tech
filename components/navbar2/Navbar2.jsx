import React from 'react'
import { Divider, SkeletonCircle, useDisclosure } from '@chakra-ui/react'
import Link from 'next/link'
import { HiMenu } from "react-icons/hi";
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Input,
} from '@chakra-ui/react'
import { useRouter } from "next/router";
import { Skeleton } from '@chakra-ui/react';
const Navbar2 = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
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
                skeleton ?
                    <>
                        <div className="navbar2">
                            <div className="logo2">
                                <SkeletonCircle>
                                    <img src="Final Logo-01.svg" className="img1" />
                                </SkeletonCircle>
                            </div>
                            <div className="menu2">
                                <Skeleton borderRadius={[5, 5, 7, 8, 10]}>
                                    <Button ref={btnRef} onClick={onOpen}>
                                        <HiMenu />
                                    </Button>
                                </Skeleton>
                            </div>
                        </div >
                    </>
                    :
                    <>
                        <div className="navbar2">
                            <div className="logo2">
                                <Link href='/' >
                                    <img src="Final Logo-01.svg" className="img1" />
                                </Link>
                            </div>
                            <div className="menu2">

                                <Button ref={btnRef} onClick={onOpen}>
                                    <HiMenu />
                                </Button>
                                <Drawer
                                    isOpen={isOpen}
                                    placement='right'
                                    onClose={onClose}
                                    finalFocusRef={btnRef}
                                >
                                    <DrawerOverlay />
                                    <DrawerContent>
                                        <DrawerCloseButton />
                                        <DrawerHeader>
                                            <div className="logo3">
                                                <Link href='/' >
                                                    <img src="Final Logo-01.svg" className="img2" />
                                                </Link>
                                            </div>
                                        </DrawerHeader>
                                        <Divider />
                                        <DrawerBody className='drawering'>
                                            <Link href='/' >
                                                <button className="home2" onClick={onClose} style={{ color: router.pathname === '/' ? 'darkblue' : '' }}>Home</button>
                                            </Link>

                                            <Link href='/services' >
                                                <button className="home2" onClick={onClose} style={{ color: router.pathname === '/services' ? 'darkblue' : '' }}>Services</button>
                                            </Link>

                                            <Link href='/about' >
                                                <button className="home2" onClick={onClose} style={{ color: router.pathname === '/about' ? 'darkblue' : '' }}>About Us</button>
                                            </Link>

                                            <Link href='/contact' >
                                                <button className="contact2" onClick={onClose} style={{ color: router.pathname === '/contact ' ? 'darkblue' : '' }}>Contact Us</button>
                                            </Link>
                                        </DrawerBody>
                                    </DrawerContent>
                                </Drawer>
                            </div>
                        </div >
                    </>
            }
        </>
    )
}

export default Navbar2