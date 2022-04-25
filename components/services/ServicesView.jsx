import React from 'react'
import { List, ListItem, ListIcon, SimpleGrid, Box } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { BsDot } from "react-icons/bs";

const ServicesView = () => {
    return (
        <div className="serviceMain">
            <SimpleGrid columns={[1, 1, 2, 2]} className=" container-provide" spacing={[5, 5, 5, 10, 10]}>
                <Box className="image-first">
                    <Image
                        src='web-design.gif'
                        className='image'
                    />
                </Box>
                <Box className='description1'>
                    <List spacing={3} className='box'>
                        <ListItem>
                            <h1 className='font'>Web App Developer</h1>
                        </ListItem>
                        <ListItem>
                            <p className='text-part'>
                                We are an official partner of the two most
                                popular ERP software (Acumatica and Odoo).
                                With our more than 10 years of experience
                                of our consultants, implementing customized
                                Enterprise Resource Management (ERP) System
                                which will streamline and transform
                                your business into data and financial
                                driven business. To success and sustain
                                this completed digital transformation,
                                our full stack of technology development
                                and ERP specialists team can assure that
                                the data from parts of your business
                                will be centralized:
                            </p>
                        </ListItem>
                        <ListItem className='text-part'>
                            <ListIcon className='text-part' as={BsDot} />
                            Thmey Village, Svay Dangkum Siem Reap
                        </ListItem>

                        <ListItem className='text-part'>
                            <ListIcon className='text-part' as={BsDot} />
                            info@go-globaltech.com
                        </ListItem>

                        <ListItem className='text-part'>
                            <ListIcon className='text-part' as={BsDot} />
                            063 50 66 999/017 511 168
                        </ListItem>
                    </List>
                </Box>
                <Box className='image-1'>
                    <Image
                        className='image'
                        src='home-gif.gif'
                    />
                </Box>
                <Box className='description1'>
                    <List spacing={3} className='box'>
                        <ListItem>
                            <h1 className='font'>Desktop App Development</h1>
                        </ListItem>
                        <ListItem>
                            <p className='text-part'>
                                The web-based application refers to any software
                                or application program that uses a web browser.
                                Such an application is essential for creating
                                dynamic or interactive website and business
                                management application. We specialize in creating
                                dynamic business web-based applications, using a
                                variety of languages and development tools including
                                PHP, Python, NodeJs, Javascript, AngularJS, Laravel,
                                CodeIgniter and Bootstrap.
                            </p>
                        </ListItem>
                        <ListItem className='text-part'>
                            <ListIcon className='text-part' as={BsDot} />
                            Collaborative Applications
                        </ListItem>
                        <ListItem className='text-part'>
                            <ListIcon className='text-part' as={BsDot} />
                            Utilities and Plug-Ins
                        </ListItem>

                        <ListItem className='text-part'>
                            <ListIcon className='text-part' as={BsDot} />
                            System Apps and Services
                        </ListItem>
                        <ListItem className='text-part'>
                            <ListIcon className='text-part' as={BsDot} />
                            Multimedia Applications
                        </ListItem>
                        <ListItem className='text-part'>
                            <ListIcon className='text-part' as={BsDot} />
                            Network Applications
                        </ListItem>
                    </List>
                </Box>
                <Box className='image-2'>
                    <Image
                        className='image'
                        src='home-gif.gif'
                    />
                </Box>

                <Box className="image-first">
                    <Image
                        className='image'
                        src='ui ux animate.gif'
                    />
                </Box>
                <Box className='description1'>
                    <List spacing={3} className='box'>
                        <ListItem>
                            <h1 className='font'>Web App Developer</h1>
                        </ListItem>
                        <ListItem>
                            <p className='text-part'>
                                Mobile Applications are the trend
                                right now and with the growing use of
                                technology in our every life, the mobile
                                application is the best way to connect with
                                your customers. You can keep your customer
                                up to date through notification and remind
                                them of your service.We have experience working
                                with IOS and Android. We build both separately so
                                that the application adapts perfectly to the device.
                                We are capable to develop the following mobile applications:
                            </p>
                        </ListItem>
                        <ListItem className='text-part' >
                            <ListIcon className='text-part' as={BsDot} />
                            Fill up the form and our Team will get back to you within 24
                            ours.space limitations.
                        </ListItem>
                        <ListItem className='text-part'>
                            <ListIcon className='text-part' as={BsDot} />
                            Thmey Village, Svay Dangkum Siem Reap
                        </ListItem>

                        <ListItem className='text-part'>
                            <ListIcon className='text-part' as={BsDot} />
                            info@go-globaltech.com
                        </ListItem>
                        <ListItem className='text-part'>
                            <ListIcon className='text-part' as={BsDot} />
                            063 50 66 999/017 511 168
                        </ListItem>
                    </List>
                </Box>
                <Box className='image-5'>
                    <Image
                        src='b1.3.gif'
                        className='image'
                    />
                </Box>
                <Box className='description1'>
                    <List spacing={3} className='box'>
                        <ListItem>
                            <h1 className='font'>System Administration</h1>
                        </ListItem>
                        <ListItem>
                            <p className='text-part'>
                                Our graphic design team is skilled in the
                                art of communicating, styling, and problem-solving
                                through the use of fonts and images. We use various
                                methods to combine words, symbols, and image in order
                                to create a visual representation of your idea and
                                your individual message.
                                Our Skills include logo design and branding, the creation
                                of hard-copy publications, posters, billboards, sign,
                                advertising as well as product and packaging. Our graphic
                                design team is also responsible for your website's mock-up.
                            </p>
                        </ListItem>
                        <ListItem className='text-part'>
                            <ListIcon className='text-part' as={BsDot} />
                            Unix and windows knowing various types of operation systems is
                            always a plus
                        </ListItem>

                        <ListItem className='text-part'>
                            <ListIcon className='text-part' as={BsDot} />
                            Virtualization you don't need to know how to create a hypervisor,
                            but some knowledge helps
                        </ListItem>

                        <ListItem className='text-part'>
                            <ListIcon className='text-part' as={BsDot} />
                            Containers be familiar with the different platforms and services
                            on the market
                        </ListItem>
                    </List>
                </Box>
                <Box className='image-6'>
                    <Image
                        src='b1.3.gif'
                        className='image'
                    />
                </Box>
            </SimpleGrid>
        </div >
    )
}

export default ServicesView