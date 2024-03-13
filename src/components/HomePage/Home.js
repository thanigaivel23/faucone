import React, { useState } from 'react'
import { RiSearchLine } from "react-icons/ri";
import award from '../../img/6award.PNG'
import women from '../../img/women.PNG'
import gobal from '../../img/gobal.PNG'
import developing from '../../img/developing.PNG'
import enpowerment from '../../img/enpowerment.PNG'
import person from '../../img/person.png'
import car from '../../img/car.jpg'
import party1 from '../../img/party1.jpg'
import party2 from '../../img/party2.jpg'
import party3 from '../../img/party3.jpg'
import location from '../../img/location.PNG'
import { Drawer } from 'antd';
import { MdOutlineSegment } from "react-icons/md";
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaPeopleCarryBox } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";
import { RiSendPlaneLine } from "react-icons/ri";
import { PiUserCircleThin } from "react-icons/pi";
import { AiOutlineGlobal } from "react-icons/ai";
import { GrLinkNext } from "react-icons/gr";




const Navbar = () => {
    return (
        <>
            <div className='tw-py-1'>Company</div>

            <NavDropdown title='Industries' className='tw-py-1'>
                <NavDropdown.Item>Industries</NavDropdown.Item>
                <NavDropdown.Item>Industries</NavDropdown.Item>
                <NavDropdown.Item>Industries</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title='Our Brands' className='tw-py-1'>
                <NavDropdown.Item>Our Brands</NavDropdown.Item>
                <NavDropdown.Item>Our Brands</NavDropdown.Item>
                <NavDropdown.Item>Our Brands</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title='Services' className='tw-py-1'>
                <NavDropdown.Item>Services</NavDropdown.Item>
                <NavDropdown.Item>Services</NavDropdown.Item>
                <NavDropdown.Item>Services</NavDropdown.Item>
            </NavDropdown>

            <div className='tw-py-1'>Insights</div>
            <div className='tw-py-1'>Contact us</div>

            <div className='tw-bg-blue-200 tw-h-7 tw-w-7 tw-flex tw-items-center tw-justify-center tw-rounded-full tw-p-1 '><RiSearchLine className=' ' /></div>

            <select name="" id="" className='tw-hidden xl:tw-block tw-outline-none tw-py-1 tw-my-1 tw-px-2'>
                <option value="">English</option>
                <option value="">Tamil</option>
                <option value="">German</option>
            </select>
        </>

    )
}


const Home = () => {

    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);

    };

    return (
        <>
            {/*1st section - nav bar */}
            <nav className='tw-bg-blue-50 tw-flex tw-items-center tw-justify-between tw-px-5 xl:tw-px-28 tw-py-6'>

                {/* res nav bar */}
                <button onClick={showDrawer} className='xl:tw-hidden'>
                    <MdOutlineSegment className='tw-text-3xl' />
                </button>

                <Drawer title={false} onClose={onClose} open={open} placement='left' width={300}>
                    <div className='tw-text-gray-600 '>
                        <Navbar />
                    </div>
                </Drawer>




                {/* name */}
                <div>
                    <p className='tw-font-abel tw-font-bold tw-text-2xl tw-tracking-[3px] tw-text-[#5db6f1]'>FAUCONE</p>
                </div>


                {/* navbar */}
                <div className='tw-hidden xl:tw-flex tw-items-center tw-gap-x-12 tw-text-gray-600'>
                    <Navbar />
                </div>

                {/*res languages  */}
                <div className='xl:tw-hidden tw-bg-white tw-rounded-full tw-border-2 tw-w-8 tw-h-8 tw-flex tw-justify-center tw-items-center tw-border-[#5db6f1] tw-font-bold tw-text-sm '>
                    En
                </div>

            </nav>

            {/* 2nd section - powering brands */}
            <section className='tw-flex tw-justify-center tw-items-center tw-flex-col tw-mt-24'>
                <p className='tw-tracking-[3px] tw-font-abel tw-text-gray-600 tw-text-2xl md:tw-text-4xl'>POWERING <span className='tw-text-[#5db6f1] tw-font-bold'>BRANDS</span></p>
                <p className='tw-tracking-[3px] tw-font-abel tw-text-gray-600 tw-text-2xl md:tw-text-4xl'>CREATING <span className='tw-text-[#5db6f1] tw-font-bold'>ENTREPRENEURS</span></p>
                <p className='tw-bg-[#5db6f1] tw-h-0.5 tw-w-10 tw-mt-6'></p>
                <p className='tw-text-gray-500 tw-mt-6 tw-text-center px-4 tw-text-sm sm:tw-text-base tw-font-bold md:tw-hidden'>Faucone's mission is to create entrepreneurs, power brands, and build a meaningful future through advanced ideas.</p>
                <div className='tw-hidden md:tw-block tw-text-center tw-font-bold tw-text-gray-500 tw-mt-4'>
                    <p>Faucone's mission is to create entrepreneurs, power brands, and</p>
                    <p>build a meaningful future through advanced ideas.</p>
                </div>

                <img src={award} alt="" className='tw-max-w-[90%] md:tw-max-w-[60%] lg:tw-max-w-[50%] tw-mt-4' />
            </section>

            {/* 3rd section - blue box */}
            <section className='tw-border-4 tw-border-[#5db6f1] tw-rounded-xl tw-w-[90%] lg:tw-w-[70%] tw-mx-auto lg:tw-mt-10'>

                <header className='tw-flex tw-items-center tw-px-14 tw-justify-between tw-overflow-scroll'>
                    <div className='tw-my-6'>
                        <p><FaPeopleCarryBox className='tw-text-5xl' /></p>
                        <p className='tw-text-gray-500 tw-text-lg'>Our <br /> <span className='tw-text-[#48a0db] tw-text-2xl tw-font-medium'>Vision</span></p>
                        <p className='tw-bg-[#5db6f1]  tw-h-0.5 tw-w-10'></p>
                    </div>

                    <div className='tw-my-6'>
                        <p><FaPeopleCarryBox className='tw-text-5xl' /></p>
                        <p className='tw-text-gray-400 tw-text-lg'>Our <br /> <span className='tw-text-gray-600 tw-text-2xl tw-font-medium'>Mission</span></p>
                    </div>

                    <div className='tw-my-6'>
                        <p><FaPeopleCarryBox className='tw-text-5xl' /></p>
                        <p className='tw-text-gray-400 tw-text-lg'>Our <br /> <span className='tw-text-gray-600 tw-text-2xl tw-font-medium'>Values</span></p>
                    </div>

                    <div className='tw-my-6'>
                        <p><FaPeopleCarryBox className='tw-text-5xl' /></p>
                        <p className='tw-text-gray-400 tw-text-lg'>Our <br /> <span className='tw-text-gray-600 tw-text-2xl tw-font-medium'>Goal</span></p>
                    </div>

                    <div className='tw-my-6'>
                        <p><FaPeopleCarryBox className='tw-text-5xl' /></p>
                        <p className='tw-text-gray-400 tw-text-lg'>Our <br /> <span className='tw-text-gray-600 tw-text-2xl tw-font-medium'>Motto</span></p>
                    </div>

                </header>

                <div>
                    <p className=' lg:tw-w-2/5 tw-px-8 lg:tw-px-14 tw-py-5  tw-text-gray-500 tw-text-sm tw-font-bold '>Our vision is to create brands, business solution and training for entrepreneurs and businesses, so that they can expand their business to a higher level in the ever- changing business environment</p>

                </div>
            </section>

            {/* 4th section - faucone formula */}
            <section className=' tw-flex tw-items-center tw-justify-center tw-flex-col'>
                <p className='tw-font-abel tw-text-gray-500 tw-text-center tw-tracking-[3px] tw-text-2xl md:tw-text-4xl tw-mt-14 '>THE FAUCONE <span className='tw-text-[#5db6f1] tw-font-bold'>FORMULA</span></p>
                <p className='tw-bg-[#5db6f1] tw-h-0.5 tw-w-10 tw-mt-4 tw-mx-auto'></p>
                <img src={person} alt="" className='tw-w-40 tw-mx-auto tw-mt-4' />
                <p className='tw-text-center tw-text-sm md:tw-text-base tw-px-5 tw-mt-4 tw-text-gray-600 md:tw-w-[60%] lg:tw-w-[40%]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, illum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, dolorem.</p>
            </section>

            {/* 5th section - contribute to the socity */}
            <section className='tw-py-16 tw-bg-blue-50 tw-mt-24 tw-pr-2'>

                <div className=' tw-flex tw-justify-center tw-items-center tw-flex-col '>
                    <p className='tw-tracking-[3px] tw-font-abel tw-text-gray-600 tw-text-2xl md:tw-text-4xl'>OUR <span className='tw-text-[#5db6f1] tw-font-bold'>CONTRIBUTION</span></p>
                    <p className='tw-tracking-[3px] tw-font-abel tw-text-gray-600 tw-text-2xl md:tw-text-4xl'>TO THE <span className='tw-text-[#5db6f1] tw-font-bold'>SOCITY</span></p>
                    <p className='tw-bg-[#5db6f1] tw-h-0.5 tw-w-10 tw-mt-6'></p>

                </div>

                <div className='tw-grid tw-grid-cols-2 lg:tw-grid-cols-4 tw-pl-2  tw-mt-10 lg:tw-w-[70%] tw-mx-auto'>
                    <div className=''>
                        <img src={enpowerment} alt="" className='tw-w-28 tw-h-24' />
                        <p className='px-4 tw-text-[#5db6f1] tw-font-bold tw-text-xl'>Women Empowerment</p>
                        <p className='tw-px-2 tw-pl-6 tw-text-gray-500 tw-text-sm tw-font-bold tw-pt-14 sm:tw-pt-6 tw-line-clamp-5 lg:tw-line-clamp-none'>Access to internet, allows women to receive training which opens the door to other essential skills,<br /><br />
                            An investment that yields a range of benefits that affect not just women but also their families and communities as a whole.<br /><br />
                            Enccrage women to create their own businesses, which would benefits both developing countries financially.</p>

                    </div>

                    <div className=''>
                        <img src={gobal} alt="" className='tw-w-28 tw-h-24' />
                        <p className='px-4 tw-text-[#5db6f1] tw-font-bold tw-text-xl'>Drivers of Startup Ecosystem</p>
                        <p className=' tw-px-1  tw-pl-6 tw-text-gray-500 tw-text-sm tw-font-bold tw-pt-6 tw-line-clamp-5 lg:tw-line-clamp-none'>The startup ecosystem is a collection Of individuals, companies, and associated organisations that work together to build and scale startups. Startup ecosystems are frequently developed in a very small geographic region with a centre Of gravity. such as a university or a cluster Of technology enterprises. Faucone is a major player in the Startup Ecosystem.</p>

                    </div>

                    <div className='tw-mt-14 lg:tw-mt-0'>
                        <img src={women} alt="" className='tw-w-28 tw-h-24' />
                        <p className='px-4 tw-text-[#5db6f1] tw-font-bold tw-text-xl'>Women Entreprenurship</p>
                        <p className='tw-pl-6 tw-text-gray-500 tw-text-sm tw-font-bold tw-pt-6 tw-line-clamp-5 lg:tw-line-clamp-none'>The increasing presence of women as entrepreneurs has led to significant business and economic growth in the country. Women-owned business enterprises are playing a prominent role in society by generating employment opportunities in the country, brining in demographic shifts and inspiring the next generation of women founders.</p>

                    </div>

                    <div className='tw-mt-14 lg:tw-mt-0'>
                        <img src={developing} alt="" className='tw-w-28 tw-h-24' />
                        <p className='px-4 tw-text-[#5db6f1] tw-font-bold tw-text-xl'>Developing Gig Economy</p>
                        <p className='tw-pl-6 tw-text-gray-500 tw-text-sm tw-font-bold tw-pt-6 tw-line-clamp-5 lg:tw-line-clamp-none'>GIG Economy - India's gig workforce, estimated to be at 77 lakh in 2020-2021, is a expected to go up 2.35 crore by 2029-30. Faucone supports and provides opportunities for GIG Economy</p>
                    </div>

                </div>

            </section>

            {/* 6th section - to the socity */}
            <section className='tw-mb-20 tw-mt-7 tw-flex tw-items-center tw-justify-center tw-flex-col'>
                <p className='tw-font-abel tw-text-gray-500 tw-text-center tw-tracking-[3px] tw-text-2xl md:tw-text-4xl tw-mt-14 '>TO THE <span className='tw-text-[#5db6f1] tw-font-bold'>SOCITY</span></p>
                <p className='tw-bg-[#5db6f1] tw-h-0.5 tw-w-10 tw-mt-4 tw-mx-auto'></p>

                <main className='tw-grid tw-grid-cols-2 md:tw-grid-cols-3 lg:tw-grid-cols-4 tw-mx-5 tw-gap-4 lg:tw-gap-6 tw-mt-10 lg:tw-w-[80%]'>

                    <div className='md:tw-flex tw-items-center  tw-rounded-md tw-shadow-md'>
                        <img src={enpowerment} alt="" className='tw-w-16 tw-m-2' />
                        <p className='tw-text-xs tw-font-bold tw-text-gray-500 tw-p-2'>-Multi-Dimensional Branding and Marketing</p>
                    </div>

                    <div className='md:tw-flex tw-items-center  tw-rounded-md tw-shadow-md'>
                        <img src={enpowerment} alt="" className='tw-w-16 tw-m-2' />
                        <p className='tw-text-xs tw-font-bold tw-text-gray-500 tw-p-2'>360. Advertising Solutions</p>
                    </div>

                    <div className='md:tw-flex tw-items-center  tw-rounded-md tw-shadow-md'>
                        <img src={enpowerment} alt="" className='tw-w-16 tw-m-2' />
                        <p className='tw-text-xs tw-font-bold tw-text-gray-500 tw-p-2'>Brand Transformation</p>
                    </div>

                    <div className='md:tw-flex tw-items-center  tw-rounded-md tw-shadow-md'>
                        <img src={enpowerment} alt="" className='tw-w-16 tw-m-2' />
                        <p className='tw-text-xs tw-font-bold tw-text-gray-500 tw-p-2'>Scalling Technology for Development</p>
                    </div>

                    <div className='md:tw-flex tw-items-center  tw-rounded-md tw-shadow-md'>
                        <img src={enpowerment} alt="" className='tw-w-16 tw-m-2' />
                        <p className='tw-text-xs tw-font-bold tw-text-gray-500 tw-p-2'>Interlinking Business Concept</p>
                    </div>

                    <div className='md:tw-flex tw-items-center  tw-rounded-md tw-shadow-md'>
                        <img src={enpowerment} alt="" className='tw-w-16 tw-m-2' />
                        <p className='tw-text-xs tw-font-bold tw-text-gray-500 tw-p-2'>1:1 Business Coaching</p>
                    </div>

                    <div className='md:tw-flex tw-items-center  tw-rounded-md tw-shadow-md'>
                        <img src={enpowerment} alt="" className='tw-w-16 tw-m-2' />
                        <p className='tw-text-xs tw-font-bold tw-text-gray-500 tw-p-2'>Innovative Entrepreneurship Process</p>
                    </div>

                    <div className='md:tw-flex tw-items-center  tw-rounded-md tw-shadow-md'>
                        <img src={enpowerment} alt="" className='tw-w-16 tw-m-2' />
                        <p className='tw-text-xs tw-font-bold tw-text-gray-500 tw-p-2'>Implementing a Quality Business Process</p>
                    </div>

                    <div className='md:tw-flex tw-items-center  tw-rounded-md tw-shadow-md'>
                        <img src={enpowerment} alt="" className='tw-w-16 tw-m-2' />
                        <p className='tw-text-xs tw-font-bold tw-text-gray-500 tw-p-2'>Revenue 10X</p>
                    </div>

                    <div className='md:tw-flex tw-items-center  tw-rounded-md tw-shadow-md'>
                        <img src={enpowerment} alt="" className='tw-w-16 tw-m-2' />
                        <p className='tw-text-xs tw-font-bold tw-text-gray-500 tw-p-2'>Career Planning and Development</p>
                    </div>

                    <div className='md:tw-flex tw-items-center  tw-rounded-md tw-shadow-md'>
                        <img src={enpowerment} alt="" className='tw-w-16 tw-m-2' />
                        <p className='tw-text-xs tw-font-bold tw-text-gray-500 tw-p-2'>Startup Investor Connect</p>
                    </div>

                    <div className='md:tw-flex tw-items-center  tw-rounded-md tw-shadow-md'>
                        <img src={enpowerment} alt="" className='tw-w-16 tw-m-2' />
                        <p className='tw-text-xs tw-font-bold tw-text-gray-500 tw-p-2'>Developing a Hybrid Work Model</p>
                    </div>
                </main>
            </section>

            {/* 7th section - golbe location */}
            <section className=' tw-flex tw-items-center tw-justify-center'>
                <img src={location} alt="" />
            </section>

            {/* 8th section - press release */}
            <section className='tw-mb-10 tw-mt-10 tw-flex tw-items-center tw-justify-center tw-flex-col tw-bg-gradient-to-b tw-from-sky-400 tw-to-teal-600' >
                <p className='tw-font-abel tw-text-white tw-text-center tw-tracking-[3px] tw-text-2xl md:tw-text-4xl tw-mt-14 tw-font-thin'>PRESS <span className='tw-text-white tw-font-semibold'>RELEASES</span></p>
                <p className='tw-bg-white tw-h-0.5 tw-w-10 tw-mt-4 tw-mx-auto'></p>

                <main className='tw-mt-10 tw-grid tw-grid-cols-1  lg:tw-grid-cols-4 tw-gap-x-10 tw-px-10 lg:tw-px-0 lg:tw-pl-24 '>
                    <div className='tw-mb-20 tw-border-4 tw-border-[#5db6f1] tw-p-5 tw-bg-white tw-rounded-xl tw-shadow-md'>
                        <img src={car} alt="" className='tw-h-52 tw-w-72 tw-border-4 tw-border-[#5db6f1] tw-rounded-xl ' />
                        <p className='tw-font-bold tw-line-clamp-2 tw-mt-3 tw-text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit Numquam, qui.</p>
                        <p className='tw-mt-2 tw-text-gray-400 tw-flex tw-items-center tw-gap-x-2 tw-text-sm'><FaRegClock className='tw-text-base' /> February 27, 2024</p>
                        <p className='tw-mt-2 tw-text-gray-700 tw-text-sm tw-line-clamp-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis deserunt atque voluptas nobis assumenda pariatur omnis nisi blanditiis eius tempora laboriosam molestiae asperiores sit, corrupti ipsum eum adipisci similique? Perferendis!</p>
                    </div>

                    <div className='tw-hidden lg:tw-block tw-mb-20 tw-border-4 tw-border-[#5db6f1] tw-p-5 tw-bg-white tw-rounded-xl tw-shadow-md'>
                        <img src={car} alt="" className='tw-h-52 tw-w-72 tw-border-4 tw-border-[#5db6f1] tw-rounded-xl ' />
                        <p className='tw-font-bold tw-line-clamp-2 tw-mt-3 tw-text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit Numquam, qui.</p>
                        <p className='tw-mt-2 tw-text-gray-400 tw-flex tw-items-center tw-gap-x-2 tw-text-sm'><FaRegClock className='tw-text-base' /> February 27, 2024</p>
                        <p className='tw-mt-2 tw-text-gray-700 tw-text-sm tw-line-clamp-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis deserunt atque voluptas nobis assumenda pariatur omnis nisi blanditiis eius tempora laboriosam molestiae asperiores sit, corrupti ipsum eum adipisci similique? Perferendis!</p>
                    </div>

                    <div className='tw-hidden lg:tw-block tw-mb-20 tw-border-4 tw-border-[#5db6f1] tw-p-5 tw-bg-white tw-rounded-xl tw-shadow-md'>
                        <img src={car} alt="" className='tw-h-52 tw-w-72 tw-border-4 tw-border-[#5db6f1] tw-rounded-xl ' />
                        <p className='tw-font-bold tw-line-clamp-2 tw-mt-3 tw-text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit Numquam, qui.</p>
                        <p className='tw-mt-2 tw-text-gray-400 tw-flex tw-items-center tw-gap-x-2 tw-text-sm'><FaRegClock className='tw-text-base' /> February 27, 2024</p>
                        <p className='tw-mt-2 tw-text-gray-700 tw-text-sm tw-line-clamp-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis deserunt atque voluptas nobis assumenda pariatur omnis nisi blanditiis eius tempora laboriosam molestiae asperiores sit, corrupti ipsum eum adipisci similique? Perferendis!</p>
                    </div>

                    <div className='tw-hidden lg:tw-block tw-mb-20 tw-border-4 tw-border-[#5db6f1] tw-p-5 tw-bg-white tw-rounded-xl tw-shadow-md'>
                        <img src={car} alt="" className='tw-h-52 tw-w-72 tw-border-4 tw-border-[#5db6f1] tw-rounded-xl ' />
                        <p className='tw-font-bold tw-line-clamp-2 tw-mt-3 tw-text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit Numquam, qui.</p>
                        <p className='tw-mt-2 tw-text-gray-400 tw-flex tw-items-center tw-gap-x-2 tw-text-sm'><FaRegClock className='tw-text-base' /> February 27, 2024</p>
                        <p className='tw-mt-2 tw-text-gray-700 tw-text-sm tw-line-clamp-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis deserunt atque voluptas nobis assumenda pariatur omnis nisi blanditiis eius tempora laboriosam molestiae asperiores sit, corrupti ipsum eum adipisci similique? Perferendis!</p>
                    </div>


                </main>
            </section>

            {/* 9th section - popular events */}
            <section className=' tw-mb-20'>

                <div className='tw-flex tw-items-center tw-justify-center tw-flex-col'>
                    <p className='tw-font-abel tw-text-gray-500 tw-text-center tw-tracking-[3px] tw-text-2xl md:tw-text-4xl tw-mt-14 '>POPULAR <span className='tw-text-[#5db6f1] tw-font-bold'>EVENTS</span></p>
                    <p className='tw-bg-[#5db6f1] tw-h-0.5 tw-w-10 tw-mt-4 tw-mx-auto'></p>
                </div>

                <main className='tw-grid tw-grid-cols-1 lg:tw-grid-cols-3 tw-mt-12 tw-gap-x-24 tw-mx-5   lg:tw-mx-20'>
                    <div className='tw-flex '>
                        <img src={party1} alt="" className='tw-h-32 tw-w-32 tw-rounded-md ' />
                        <div className='tw-pl-4  tw-grid '>
                            <p className='tw-text-gray-700 tw-text-sm tw-font-bold'>Multi-Dimensional Branding and Marketing</p>
                            <p className=' tw-text-[#5db6f1] tw-font-bold tw-text-xs tw-flex tw-items-center tw-gap-x-2 '><FaRegClock className='tw-text-base' />Saturday - 6:00 PM</p>
                            <p className=' tw-text-gray-400 tw-font-bold tw-text-xs tw-flex tw-items-center tw-gap-x-2 '><RiSendPlaneLine className='tw-text-base' />Po'ina Restaurant & Lounge</p>
                            <p className=' tw-text-[#5db6f1] tw-font-bold tw-text-xs tw-flex tw-items-center tw-gap-x-2 '><AiOutlineGlobal className='tw-text-base' />Abbey Chun & Heather Stoltz</p>
                            <p className=' tw-text-gray-500 tw-font-bold tw-text-xs tw-flex tw-items-center tw-gap-x-2 '><PiUserCircleThin className='tw-text-xl tw-font-extrabold' />26 followers</p>

                        </div>
                    </div>
                    <div className='tw-hidden lg:tw-flex  '>
                        <img src={party2} alt="" className='tw-h-32 tw-w-32 tw-rounded-md ' />
                        <div className='tw-pl-4  tw-grid '>
                            <p className='tw-text-gray-700 tw-text-sm tw-font-bold'>Multi-Dimensional Branding and Marketing</p>
                            <p className=' tw-text-[#5db6f1] tw-font-bold tw-text-xs tw-flex tw-items-center tw-gap-x-2 '><FaRegClock className='tw-text-base' />Saturday - 6:00 PM</p>
                            <p className=' tw-text-gray-400 tw-font-bold tw-text-xs tw-flex tw-items-center tw-gap-x-2 '><RiSendPlaneLine className='tw-text-base' />Po'ina Restaurant & Lounge</p>
                            <p className=' tw-text-[#5db6f1] tw-font-bold tw-text-xs tw-flex tw-items-center tw-gap-x-2 '><AiOutlineGlobal className='tw-text-base' />Abbey Chun & Heather Stoltz</p>
                            <p className=' tw-text-gray-500 tw-font-bold tw-text-xs tw-flex tw-items-center tw-gap-x-2 '><PiUserCircleThin className='tw-text-xl tw-font-extrabold' />26 followers</p>

                        </div>
                    </div>
                    <div className='tw-hidden lg:tw-flex   '>
                        <img src={party3} alt="" className='tw-h-32 tw-w-32 tw-rounded-md ' />
                        <div className='tw-pl-4  tw-grid '>
                            <p className='tw-text-gray-700 tw-text-sm tw-font-bold'>Multi-Dimensional Branding and Marketing</p>
                            <p className=' tw-text-[#5db6f1] tw-font-bold tw-text-xs tw-flex tw-items-center tw-gap-x-2 '><FaRegClock className='tw-text-base' />Saturday - 6:00 PM</p>
                            <p className=' tw-text-gray-400 tw-font-bold tw-text-xs tw-flex tw-items-center tw-gap-x-2 '><RiSendPlaneLine className='tw-text-base' />Po'ina Restaurant & Lounge</p>
                            <p className=' tw-text-[#5db6f1] tw-font-bold tw-text-xs tw-flex tw-items-center tw-gap-x-2 '><AiOutlineGlobal className='tw-text-base' />Abbey Chun & Heather Stoltz</p>
                            <p className=' tw-text-gray-500 tw-font-bold tw-text-xs tw-flex tw-items-center tw-gap-x-2 '><PiUserCircleThin className='tw-text-xl tw-font-extrabold' />26 followers</p>

                        </div>
                    </div>
                </main>
            </section>

            {/* 10th section - WORK TOGETHER */}
            <section className='tw-mb-40 '>
                <div className='tw-flex tw-items-center tw-justify-center tw-flex-col'>
                    <p className='tw-font-abel tw-text-gray-500 tw-text-center tw-tracking-[3px] tw-text-2xl md:tw-text-4xl tw-mt-14 '>LET'S WORK <span className='tw-text-[#5db6f1] tw-font-bold'>TOGETHER!</span></p>
                    <p className='tw-bg-[#5db6f1] tw-h-0.5 tw-w-10 tw-mt-4 tw-mx-auto'></p>
                </div>

                <main className='lg:tw-flex lg:tw-mx-10 tw-mt-12 lg:tw-justify-between lg:tw-gap-x-16   '>
                    {/*left*/}
                    <form className='tw-mx-7 lg:tw-w-[32%]  '>
                        <input type="text" placeholder='Full Name' className='tw-outline-none tw-border-b-2 placeholder:tw-text-sm placeholder:tw-font-bold placeholder:tw-text-gray-500 tw-pl-3 tw-pb-2 tw-w-[90%]' /><br />
                        <input type="text" placeholder='Email ID' className='tw-outline-none tw-border-b-2 placeholder:tw-text-sm placeholder:tw-font-bold placeholder:tw-text-gray-500 tw-pl-3 tw-pb-2 tw-mt-7 tw-w-[90%]' /><br />
                        <input type="number" placeholder='Phone No.' className='tw-outline-none tw-border-b-2 placeholder:tw-text-sm placeholder:tw-font-bold placeholder:tw-text-gray-500 tw-pl-3 tw-pb-2 tw-mt-7 tw-w-[90%]' /><br />
                        <input type="text" placeholder='Position applying for' className='tw-outline-none tw-border-b-2 placeholder:tw-text-sm placeholder:tw-font-bold placeholder:tw-text-gray-500 tw-pl-3 tw-pb-2 tw-mt-7 tw-w-[90%]' /><br />
                        <input type="file" className='tw-hidden' id='resume' /><br />
                        <label htmlFor="resume" className='tw-outline-dashed tw-outline-2 tw-outline-gray-500 tw-font-semibold tw-text-gray-500 tw-text-center tw-rounded-md tw-mx-5 tw-py-2 tw-mt-7 tw-border-2 tw-border-blue-100 tw-w-[90%]'>Resume</label><br />
                        <button className=' tw-text-center tw-rounded-md tw-mx-5 tw-py-3 tw-mt-10 tw-text-white tw-font-semibold tw-bg-[#5db6f1] tw-w-[90%]'>Submit</button>
                    </form>

                    {/*right*/}
                    <div className='tw-hidden lg:tw-block  tw-w-[60%]  tw-mr-16'>
                        <div className='tw-flex tw-items-center tw-justify-between'>
                            <p className='tw-text-gray-500 tw-text-sm tw-font-bold'>See how we can help to overcome your challenges</p>
                            <p className='tw-flex tw-items-center tw-justify-center tw-text-[#56a9ed] tw-font-bold tw-gap-x-4'>See All Job <span><GrLinkNext className='tw-font-bold tw-text-xl' /></span></p>
                        </div>

                        <div>
                            <p className='tw-text-gray-600 tw-text-sm tw-font-bold'>Marketing/Growth <span className='tw-pl-1 tw-text-[#56a9ed]'>3 Open Roles</span></p>
                            <div>
                            <p>Impact Campaigns Associate</p>
                            <p></p>
                            </div>
                            <p>Saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae earum rerum hic tenetur</p>
                        </div>



                    </div>
                </main>
            </section>









        </>
    )
}

export default Home