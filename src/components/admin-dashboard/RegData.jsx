// import React from 'react'
import { MdFileUpload } from "react-icons/md";
import Logo from "../../assets/collegeLogo.png"
import { FILES, NUMBERS_DATA, PERSONAL_DATA, SECONDARY_DATA } from '../../damyData/RData';

const Register = () => {
    const HandleImge = (e) => {
        const selected = e.target.files[0]
    }
    return (

        <section className="bg-white max-w-[1291px] mx-auto w-full p-10" >

            {/* header section */}
            <div className='flex flex-row-reverse mb-6 items-center justify-end mx-4 ml-16'>
                <img
                    src={Logo}
                    alt="logo"
                    className=" w-20 object-cover mt-2"
                />

            </div>
            <div className="mb-3 border-b-[2px] border-solid border-orange-500 inset-x-[0] mx-auto w-[90%]" />



            <div className='flex flex-row-reverse justify-between  mb-6 mx-20'>
                <div></div>
                <h1 className='font-bold text-3xl text-orange-500 text-center mt-3'>الإنتساب للكلية </h1>
                <div className="overflow-hidden w-32 h-40 border-[3px] border-solid border-orange-500 mt-4 flex flex-col items-center justify-center rounded-3xl">
                    <div className='w-full h-[70%] bg-gray-200  rounded-xl overflow-hidden flex flex-col items-center justify-center'>
                        {/* <img className='w-[80%] h-[80%]' src={profile} alt="" id='img' /> */}
                    </div>
                    <input type="file" id='input' name='image-upload' accept='image/*' className='hidden' />

                    <div type='file' className=' flex items-center w-[80%] my-auto bg-orange-500 rounded-md text-center p-1'>
                        <label htmlFor="input" className='font-bold text-sm w-full h-full cursor-pointer'>
                            اختر صورة
                        </label>
                        <MdFileUpload />

                    </div>
                </div>
            </div>

            {/* section personal data */}
            <div className='flex justify-center'>

                <div className='grid grid-cols-2 gap-4 items-center w-[80%] mb-6 mr-10'>
                    {
                        PERSONAL_DATA.map((input) => (
                            <div key={input.id} className='mb-3 flex-1 flex flex-row-reverse items-center justify-evenly '>
                                <label htmlFor={input.id} className='font-bold w-1/2 text-right pr-10'>{input.name}</label>
                                <div className='w-1/2 text-right'>XXXXXXXX</div>
                            </div>
                        ))
                    }

                </div>

            </div>
            <div className='flex flex-col items-center justify-center '>
                <label htmlFor="IDN" className='font-bold mb-3 '>الرقم الوطني </label>
                <div className='w-1/2 text-center text-2xl '>X X X X X X X X X X X X </div>
            </div>


            <div className="my-16 border-b-[2px] border-solid border-orange-500 inset-x-[0] mx-auto w-[90%]" />


            {/* section numbers */}
            <div className='flex justify-center'>
                <div className='grid grid-cols-2 gap-4  items-center my-auto w-[80%] mr-10'>
                    {
                        NUMBERS_DATA.map((input) => (
                            <div key={input.id} className='mb-3 flex flex-row-reverse items-center justify-evenly'>
                                <label htmlFor={input.id} className='font-bold text-right w-1/2 pr-10'>{input.name}</label>
                                <div className='w-1/2 text-right'>XXXXXXXXX</div>
                            </div>
                        ))
                    }

                </div>

            </div>
            <div className="my-16 border-b-[2px] border-solid border-orange-500 inset-x-[0] mx-auto w-[90%]" />


            {/* section secondary certificate */}
            <div className='flex justify-center'>
                <div className='grid grid-cols-2 gap-4 items-center my-auto w-[80%] mr-10'>
                    {
                        SECONDARY_DATA.map((input) => (
                            <div key={input.id} className='mb-3 flex flex-row-reverse items-center justify-evenly '>
                                <label htmlFor={input.id} className='font-bold text-right w-1/2 pr-10'>{input.name}</label>
                                <div className='w-1/2 text-right pr-2'>XXXXXXXXXX</div>
                            </div>
                        ))
                    }

                </div>

            </div>
            <div className="my-16 border-b-[2px] border-solid border-orange-500 inset-x-[0] mx-auto w-[90%]" />


            {/* section Filles */}
            <div className='flex justify-center'>
                <div className='flex flex-col justify-evenly gap-5 w-[80%] '>
                    {
                        FILES.map((input) => (
                            <div key={input.id} className='flex flex-row-reverse items-center justify-evenly'>
                                <label htmlFor={input.id} className='font-bold text-right w-2/5'>{input.name}</label>
                                <p className='font-bold text-right w-2/5'><a href="#" className=''>معاينة الملف</a></p>
                                {/* <input id={input.id} type={input.type} /> */}
                            </div>
                        ))
                    }

                </div>
            </div>

            <div className="mt-16 mb-6 border-b-[2px] border-solid border-orange-500 inset-x-[0] mx-auto w-[90%]" />

            <div className='flex items-center justify-center flex-row gap-10'>
                {/* <p> بنقرك على الزر أدناه سيتم تسجيلك مبدئيا في الكلية</p> */}
                <button className="p-3 text-white bg-orange-500  font-bold rounded-full w-40 shadow-md hover:bg-orange-600">قبول</button>
                <button className="p-3 text-white bg-orange-500  font-bold rounded-full w-40 shadow-md hover:bg-orange-600">رفض</button>

            </div>
            <div className="mt-16 mb-6 border-b-[2px] border-solid border-orange-500 inset-x-[0] mx-auto w-[90%]" />


        </section>
    )
}

export default Register