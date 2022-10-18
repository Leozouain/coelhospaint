import Back from "../../Components/BackButtom";
import Input from 'react-phone-number-input/input'
import { useState } from "react";



export default function Contact() {
    const [value, setValue] = useState()
    return (
        <>
            <Back/>
            <div className="w-5/6  mt-5 flex flex-col justify-center m-auto ">
                {/* <!-- component --> */}
                <h1 className="text-4xl font-bold flex text-center justify-center ">
                    Contact Us
                </h1>
                <div>
                    <p className="flex justify-center text-center mt-5 font-bold ">
                        75 Franklin St, Stoneham, MA 02180
                        <br />emailexemple@something.com<br />
                        (978) 999 - 9999
                    </p>
                </div>
                <div className="flex items-center justify-center p-12">
                    {/* <!-- Author: FormBold Team -->
                <!-- Learn More: https://formbold.com --> */}
                    <div className="mx-auto w-full max-w-[550px]">
                        <form action="mailto:leozouain@gmail.com" method="POST" >
                            <div className="mb-5">
                                <label
                                    for="name"
                                    className="mb-3 block text-base font-medium text-black"
                                >
                                    Full Name
                                </label>
                                <input required
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Full Name"
                                    className=" w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-gray-700 focus:shadow-md"
                                />
                            </div>
                            <div className="mb-5">
                                <label
                                    for="phone"
                                    className="mb-3 block text-base font-medium text-black"
                                >
                                    Phone
                                </label>
                               <>
                               </>
                               <Input className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-gray-700 focus:shadow-md'
                                country="US"
                                value={value}
                                onChange={setValue}/>
                                
                               
                               
                               
                                {/* <input required
                                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                                    type="tel"
                                    name="phone"
                                    id="phone"
                                    placeholder="123-456-7890"
                                    className=" w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-gray-700 focus:shadow-md"
                                /> */}
                            </div>
                            <div className="mb-5">
                                <label
                                    for="email"
                                    className="mb-3 block text-base font-medium text-black"
                                >
                                    Email Address
                                </label>
                                <input required
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="example@domain.com"
                                    className=" w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-gray-700 focus:shadow-md"
                                />
                            </div>
                            <div className="mb-5">
                                <label
                                    for="subject"
                                    className="mb-3 block text-base font-medium text-black"
                                >
                                    Subject
                                </label>
                                <input required
                                    type="text"
                                    name="subject"
                                    id="subject"
                                    placeholder="Enter your subject"
                                    className=" w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-gray-700 focus:shadow-md"
                                />
                            </div>
                            <div className="mb-5">
                                <label
                                    for="message"
                                    className="mb-3 block text-base font-medium text-black"
                                >
                                    Message
                                </label>
                                <textarea required
                                    rows="4"
                                    name="message"
                                    id="message"
                                    placeholder="Type your message"
                                    className=" w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-gray-700 focus:shadow-md"
                                ></textarea>
                            </div>
                            <div>
                                <button
                                    className="m-auto flex hover:shadow-form hover:bg-gray-600 rounded-md bg-gray-500 py-3 px-8 text-base font-semibold text-white outline-none"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}