import React, { useState } from 'react'
import { RiSearchLine } from "react-icons/ri";
import award from '../../img/6award.PNG'
import women from '../../img/women.PNG'
import gobal from '../../img/gobal.PNG'
import developing from '../../img/developing.PNG'
import enpowerment from '../../img/enpowerment.PNG'
import person from '../../img/person.png'
import { Drawer } from 'antd';
import { MdOutlineSegment } from "react-icons/md";
import NavDropdown from 'react-bootstrap/NavDropdown';


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


            {/* 4th section - faucone formula */}
            <section className=' tw-flex tw-items-center tw-justify-center tw-flex-col'>
                <p className='tw-font-abel tw-text-gray-500 tw-text-center tw-tracking-[3px] tw-text-2xl md:tw-text-4xl tw-mt-14 '>THE FAUCONE <span className='tw-text-[#5db6f1] tw-font-bold'>FORMULA</span></p>
                <p className='tw-bg-[#5db6f1] tw-h-0.5 tw-w-10 tw-mt-4 tw-mx-auto'></p>
                <img src={person} alt="" className='tw-w-40 tw-mx-auto tw-mt-4' />
                <p className='tw-text-center tw-text-sm md:tw-text-base tw-px-5 tw-mt-4 tw-text-gray-600 md:tw-w-[60%] lg:tw-w-[40%]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, illum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, dolorem.</p>
            </section>

            {/* 5th section - contribute to the socity */}

            <section className='tw-mb-40 tw-py-16 tw-bg-blue-50 tw-mt-24'>
                <div className=' tw-flex tw-justify-center tw-items-center tw-flex-col '>
                    <p className='tw-tracking-[3px] tw-font-abel tw-text-gray-600 tw-text-2xl md:tw-text-4xl'>OUR <span className='tw-text-[#5db6f1] tw-font-bold'>CONTRIBUTION</span></p>
                    <p className='tw-tracking-[3px] tw-font-abel tw-text-gray-600 tw-text-2xl md:tw-text-4xl'>TO THE <span className='tw-text-[#5db6f1] tw-font-bold'>SOCITY</span></p>
                    <p className='tw-bg-[#5db6f1] tw-h-0.5 tw-w-10 tw-mt-6'></p>


                </div>
                <div className='tw-grid tw-grid-cols-2 lg:tw-grid-cols-4 px-2'>
                    <div className='tw-border-4'>
                        <img src={enpowerment} alt="" className='tw-w-28' />
                        <p className='px-4 tw-text-[#5db6f1] tw-font-bold tw-text-xl'>Women Empowerment</p>

                    </div>

                    <div className='tw-border-4'>
                        <img src={gobal} alt="" className='tw-w-28' />
                        <p className='px-4 tw-text-[#5db6f1] tw-font-bold tw-text-xl'>Drivers of Startup Ecosystem</p>

                    </div>

                    <div className='tw-border-4'>
                        <img src={women} alt="" className='tw-w-28' />
                        <p className='px-4 tw-text-[#5db6f1] tw-font-bold tw-text-xl'>Women Entreprenurship</p>

                    </div>

                    <div className='tw-border-4'>
                        <img src={developing} alt="" className='tw-w-28' />
                        <p className='px-4 tw-text-[#5db6f1] tw-font-bold tw-text-xl'>Developing Gig Economy</p>

                    </div>

                </div>

            </section>






        </>
    )
}

export default Home