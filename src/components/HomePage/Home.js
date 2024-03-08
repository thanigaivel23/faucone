import React, { useEffect, useState } from 'react'
import { RiSearchLine } from "react-icons/ri";
import award from '../../img/6award.PNG';
import ReactFlagsSelect, { Us } from "react-flags-select";
import { useTranslation } from "react-i18next";

const Home = () => {
    const { t, i18n, ready } = useTranslation();
    const [selected, setSelected] = useState("US");
    useEffect(() => {
        i18n.changeLanguage(selected.toLowerCase());
    }, [selected])
    return (
        <>
            <Us />
            {/* nav bar */}
            <nav className='tw-bg-blue-50 tw-flex tw-items-center tw-justify-between tw-px-28 tw-py-6'>
                <div>
                    <p className='tw-font-abel tw-font-bold tw-text-2xl tw-tracking-widest tw-text-[#04a1d1]'>FAUCONE</p>
                </div>

                <div className='tw-hidden xl:tw-flex tw-items-center tw-gap-x-12 tw-text-gray-600'>

                    <select name="" id="" className='tw-bg-transparent tw-outline-none'>
                        <option value="">Company</option>
                        <option value="">Company</option>
                        <option value="">Company</option>
                    </select>

                    <select name="" id="" className='tw-bg-transparent tw-outline-none'>
                        <option value="">Industries</option>
                        <option value="">Industries</option>
                        <option value="">Industries</option>
                    </select>

                    <select name="" id="" className='tw-bg-transparent tw-outline-none'>
                        <option value="">Our Brands</option>
                        <option value="">Our Brands</option>
                        <option value="">Our Brands</option>
                    </select>

                    <select name="" id="" className='tw-bg-transparent tw-outline-none'>
                        <option value="">Services</option>
                        <option value="">Services</option>
                        <option value="">Services</option>
                    </select>

                    <div>Insights</div>
                    <div>Contact us</div>
                    <div className='tw-bg-blue-200 tw-h-7 tw-w-7 tw-flex tw-items-center tw-justify-center tw-rounded-full tw-p-1 '><RiSearchLine className=' ' /></div>

                    {/* <select name="" id="" className=' tw-outline-none tw-py-1 tw-px-2'>
                        <option value="">English</option>
                        <option value="">French</option>
                        <option value="">German</option>
                        <option value="">Spanish</option>
                        <option value="">Mailay</option>
                        <option value="">Dutch</option>
                        <option value="">Indonesian</option>
                        <option value="">Thai</option>
                        <option value="">Chinese</option>
                        <option value="">Japanese</option>
                    </select> */}
                    <ReactFlagsSelect
                        selected={selected}
                        onSelect={data => setSelected(data)}
                        countries={["US", "FR", "DE", "ES", "MY", "NL", "ID", "TH", "CN", "JP"]}
                        customLabels={
                            {
                                US: "English",
                                FR: "French",
                                DE: "German",
                                ES: "Spanish",
                                MY: "Malay",
                                NL: "Dutch",
                                ID: "Indonesian",
                                TH: "Thai",
                                CN: "Chinese",
                                JP: "Japanese"
                            }}
                        placeholder="Select Language"
                    />

                </div>

            </nav>















            {/* 1st section - powering brands */}
            <section className='tw-hidden xl:tw-flex tw-justify-center tw-items-center tw-flex-col tw-mt-24'>
                <p className='tw-tracking-[3px] tw-font-abel tw-text-gray-600 tw-text-4xl'>{t('home.hero_title')} <span className='tw-text-[#04a1d1] tw-font-bold'>BRANDS</span></p>
                <p className='tw-tracking-[3px] tw-font-abel tw-text-gray-600 tw-text-4xl'>CREATING <span className='tw-text-[#04a1d1] tw-font-bold'>ENTREPRENEURS</span></p>
                <p className='tw-bg-[#04a1d1] tw-h-0.5 tw-w-10 tw-mt-2'></p>
                <p className='tw-text-gray-600 tw-mt-4'>Faucone's mission is to create entrepreneurs, power brands, and</p>
                <p className='tw-text-gray-600'>build a meaningful future through advanced ideas.</p>
                <img src={award} alt="" className='tw-max-w-[50%] tw-mt-4' />
            </section>

            {/* 2nd section - blue box */}



        </>
    )
}

export default Home