import bath from '../../asssets/photos/bath.png'
import coelho from '../../asssets/photos/fei.jpg'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div className="flex flex-col md:flex-row w-5/6 justify-center gap-5 items-center m-auto mt-8 ">

           
            <div className="flex justify-center md:h-96  lg:h-fit">
                <div className="rounded-lg shadow-lg  max-w-sm">
                    <Link to="/services">
                        <img className="rounded-t-lg" src='https://picsum.photos/1600/1300?image=185' alt="" />
                    </Link>
                    <div className="p-6 flex flex-col ">
                        <h5 className="flex items-center m-auto text-gray-900 text-xl font-medium mb-2 overflow-hidden ">Services</h5>
                        <p className="text-gray-700 text-base mb-4 text-center ">
                            Pre-construction (Design development, budget analysis, project schedule)... 
                        </p>
                        <Link to='/services' className='flex justify-center'>
                        
                            <button type="button" className="  inline-block px-6 py-2.5 bg-gray-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-600 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out">See More</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex justify-center md:h-96 lg:h-fit">
                <div className="rounded-lg shadow-lg  max-w-sm">
                    <Link to="/portifolio">
                        <img className="rounded-t-lg" src="https://picsum.photos/1600/1300?image=155" alt="" />
                    </Link>
                    <div className="p-6 flex flex-col ">
                        <h5 className="flex items-center m-auto text-gray-900 text-xl font-medium mb-2">Portifolio</h5>
                        <p className="text-gray-700 text-base mb-4 text-center">
                            Our portfolio features pictures of some of our past projects.                        </p>
                        <Link to='/portifolio'  className='flex justify-center'>
                        
                            <button type="button" className="  inline-block px-6 py-2.5 bg-gray-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-600 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out">See More</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex justify-center md:h-96 lg:h-fit">
                <div className="rounded-lg shadow-lg  max-w-sm">
                    <Link to="/about">
                        <img className="rounded-t-lg" src='https://picsum.photos/1600/1300?image=121' alt="" />
                    </Link>
                    <div className="p-6 flex flex-col ">
                        <h5 className="flex items-center m-auto text-gray-900 text-xl font-medium mb-2">About Us</h5>
                        <p className="text-gray-700 text-base mb-4 text-center">
                            Coelho’s Building and Painting Company boasts nearly 20 years  experience ...
                            
                        </p>
                        <Link to='/about' className='flex justify-center'>
                        
                            <button type="button" className="  inline-block px-6 py-2.5 bg-gray-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-600 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out">See More</button>
                        </Link>
                    </div>
                </div>
            </div>


        </div>
    )
}