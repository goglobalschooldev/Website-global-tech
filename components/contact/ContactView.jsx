import * as React from 'react';
import {
    SimpleGrid,
    Box,
    List,
    ListItem,
    ListIcon,
} from '@chakra-ui/react';

import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
import { PhoneIcon, EmailIcon } from '@chakra-ui/icons';
import { HiLocationMarker } from "react-icons/hi";
import { AspectRatio } from '@chakra-ui/react'
import { GrInstagram } from "react-icons/gr";
import { ImFacebook2 } from "react-icons/im";
import { SiTelegram } from "react-icons/si";

const ContactView = () => {
    const [skeleton, setSkeleton] = React.useState(true)

    React.useEffect(() => {
        setTimeout(() => {
            setSkeleton(false)
        }, 1200);
    }, [])

    return (
        <>
            {
                skeleton ?
                    <>
                        <div className='contact'>
                            <div className='skeleton-style'>
                                <Skeleton className='limite' borderRadius={[5, 5, 7, 8, 10]} />

                            </div>

                            <div className='skeleton-style'>
                                <Skeleton className='skeleton-lim' mt={2} borderRadius={[5, 5, 7, 8, 10]} />
                            </div>


                            <div className='container'>
                                <SimpleGrid columns={[1, 1, 1, 2, 2]} spacing={[5, 5, 10, 10]} >

                                    <Box className='skeleton-style'>
                                        <Skeleton className='skeleton-box' borderRadius={[5, 5, 7, 8, 10]} />
                                    </Box>

                                    <Box className='skeleton-style'>
                                        <Skeleton className='skeleton-box' borderRadius={[5, 5, 7, 8, 10]} />
                                    </Box>
                                </SimpleGrid>
                            </div>
                        </div>
                    </>

                    :

                    <>
                        <div className='contact'>
                            <h1 className='first-title'>Contact Us</h1>
                            <div className='subtitle'>
                                <p>
                                    Any Question Or Remarks? Just Write Us A Message!
                                </p>
                            </div>
                            <div className='container'>
                                <SimpleGrid columns={[1, 1, 1, 2, 2]} spacing={[5, 5, 10, 10]}>
                                    <Box className='boxing1'>
                                        <h1 className='font123'>Contact Information</h1>
                                        <list className='mader1'>Fill up the form and our Team will get back to you within 24 hours</list>
                                        <List spacing={[3, 3, 5, 5]} className='contacting'>
                                            <ListItem className="contactor">
                                                <ListIcon className='mader2' as={HiLocationMarker} />
                                                Fill up the form and our Team will get back to you within 24 hours
                                            </ListItem><br />

                                            <ListItem className="contactor">
                                                <ListIcon className='mader2' as={EmailIcon} />
                                                info@go-globaltech.com
                                            </ListItem>

                                            <br />
                                            <ListItem className="contactor">
                                                <ListIcon className='mader2' as={PhoneIcon} />
                                                063 50 66 999/017 511 168
                                            </ListItem>
                                        </List>
                                        <div className='style-avatar'>
                                            <ImFacebook2 className='avatar' />
                                            <SiTelegram className='avatar' />
                                            <GrInstagram className='avatar' />
                                        </div>
                                    </Box>
                                    <AspectRatio ratio={1.85}>
                                        <iframe className="maps"
                                            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng'
                                        />
                                    </AspectRatio>
                                </SimpleGrid>
                            </div>
                        </div>
                    </>
            }
        </>
    )
}

export default ContactView;