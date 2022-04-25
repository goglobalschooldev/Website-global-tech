import React from 'react'
import { Box, Grid, SimpleGrid, Stack } from '@chakra-ui/react'
import { SettingsIcon } from "@chakra-ui/icons"
import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
const SkeletonVision = () => {
    return (
        <div className='vision1'>
            <Skeleton borderRadius={[5, 5, 7, 8, 10]}>
                <h1 className="title">
                    Consider To Be The Partner
                </h1>
            </Skeleton >

            <SimpleGrid columns={[1, 1, 2, 2]} className='boxleftside'>
                <Box className='blueleft'>
                    <h1 className="titleleftside">
                        <Stack>
                            <Skeleton height='30px' width='100px' />
                            <Skeleton height='30px' width='300px' />
                            <Skeleton height='30px' width='200px' />
                            <Skeleton height='30px' width='150px' />
                        </Stack>
                    </h1>
                </Box>
                <Box className='blueleft1'>
                    <h1 className="titleleftside1">
                        <Skeleton borderRadius={[5, 5, 7, 8, 10]}>
                            Have a
                            Bundle of <p className='red-text1'>&ensp;GIFTS</p>
                            in Each of the
                            Partner
                        </Skeleton>
                    </h1>
                </Box>
                <Box className='redright'  >
                    <Skeleton borderRadius={[5, 5, 7, 8, 10]}>
                        <img src='ecommerce.gif' className='gifimg' />
                    </Skeleton>
                </Box>
            </SimpleGrid>
            <h1 className="title">
                <Skeleton borderRadius={[5, 5, 7, 8, 10]}>
                    Our Vision & Our Goal
                </Skeleton>
            </h1>
            <div className='boxofvision'>
                <SimpleGrid columns={[1, 2, 2, 2, 3]} spacing={[10, 10, 12, 20, 20]}
                    className="mainBox"
                >
                    <Skeleton borderRadius={[5, 5, 7, 8, 10]}>
                        <Box className="boxing">
                            <div className="boxer">
                                <div className="iconing">
                                    <SettingsIcon className='icon' />
                                </div>
                            </div>
                            <div className="boxer">
                                <h1 className="titleBox">Event Organizer</h1>
                            </div>
                            <div className="boxer">
                                <p className="texting">
                                    With our creative approach
                                    of any ideas to be fresh,
                                    unique and interesting,
                                    Beside the conventional
                                    treatment
                                </p>
                            </div>
                        </Box>
                    </Skeleton>
                    <Skeleton borderRadius={[5, 5, 7, 8, 10]}>
                        <Box className="boxing">
                            <div className="boxer">
                                <div className="iconing">
                                    <SettingsIcon className='icon' />
                                </div>
                            </div>
                            <div className="boxer">
                                <h1 className="titleBox">Brand
                                    Activation</h1>
                            </div>
                            <div className="boxer">
                                <p className="texting">
                                    Brand activations are one-off, inperson events, experiences, and
                                    interactions that forge lasting
                                    emotional connections between a
                                    brand and their target audience.
                                </p>
                            </div>
                        </Box>
                    </Skeleton>
                    <Skeleton borderRadius={[5, 5, 7, 8, 10]}>
                        <Box className="boxing">
                            <div className="boxer">
                                <div className="iconing">
                                    <SettingsIcon className='icon' />
                                </div>
                            </div>
                            <div className="boxer">
                                <h1 className="titleBox">Creative Lab
                                    & Production</h1>
                            </div>
                            <div className="boxer">
                                <p className="texting">
                                    "A successful event is
                                    when people can feel a
                                    personal connection to it"
                                </p>
                            </div>
                        </Box>
                    </Skeleton>
                    <Skeleton borderRadius={[5, 5, 7, 8, 10]}>
                        <Box className="boxing">
                            <div className="boxer">
                                <div className="iconing">
                                    <SettingsIcon className='icon' />
                                </div>
                            </div>
                            <div className="boxer">
                                <h1 className="titleBox">Creative</h1>
                            </div>
                            <div className="boxer">
                                <p className="texting">
                                    With our creative approach
                                    of any ideas to be fresh,
                                    unique and interesting,
                                    Beside the conventional
                                    treatment

                                </p>
                            </div>
                        </Box>
                    </Skeleton>
                    <Skeleton borderRadius={[5, 5, 7, 8, 10]}>
                        <Box className="boxing">
                            <div className="boxer">
                                <div className="iconing">
                                    <SettingsIcon className='icon' />
                                </div>
                            </div>
                            <div className="boxer">
                                <h1 className="titleBox">Strategic</h1>
                            </div>
                            <div className="boxer">
                                <p className="texting">
                                    Are your strategic partner, our main
                                    job is to
                                    analyse your case and ideas. then
                                    provide
                                    the best and proper way to reach
                                    that goal
                                </p>
                            </div>
                        </Box>
                    </Skeleton>
                    <Skeleton borderRadius={[5, 5, 7, 8, 10]}>
                        <Box className="boxing">
                            <div className="boxer">
                                <div className="iconing">
                                    <SettingsIcon className='icon' />
                                </div>
                            </div>
                            <div className="boxer">
                                <h1 className="titleBox">Insightful</h1>
                            </div>
                            <div className="boxer">
                                <p className="texting">
                                    "A successful event is
                                    when people can feel a
                                    personal connection to it"
                                </p>
                            </div>
                        </Box>
                    </Skeleton>
                </SimpleGrid>
            </div>
        </div >
    )
}

export default SkeletonVision