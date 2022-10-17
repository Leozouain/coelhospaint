import back from '../../asssets/photos/about.jpg'
import Back from '../../Components/BackButtom'



export default function About() {
    return (
        <>
            <Back/>
            <div className=' mt-7 flex flex-col justify-center m-auto w-[95%] md:w-[90%] xl:w-4/6  h-full'>
                
                <div className="h-full bg-cover bg-no-repeat h-fit flex items-end justify-end mx- bg-center" style={{ backgroundImage: `url(${back})` }}>
                    <div className='container-md  w-full 2xl:w-2/6 xl:w-4/6 bg-gray-100/[0.8] xl:bg-gray-100/[0.6] flex px-3 md:px-9 py-14 flex-col  '>
                        <h1 className='text-4xl font-bold flex text-center justify-center mb-3'>About Us</h1>
                        <p className='text-xl'>
                            Coelho’s Building and Painting Company boasts nearly 20 years  experience providing  General Remodeling and Painting Services.
                            Since our humble beginnings in the Boston Area, we have  been able to grow and expand our business to  provide services throughout all of New England.  We take pride in our work and deliver top-quality results no matter your vision or project complexity. We specialize in kitchen and bathroom construction and remodeling while providing a host of additional construction services.   We consistently go above and beyond to make certain that you are 100% satisfied with your end result.
                        </p>
                    </div>

                </div>
            </div>
        </>
    )
}