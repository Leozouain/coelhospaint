
import Back from "../../Components/BackButtom"
import Gallery from "../Gallery"




export default function Portifolio() {


    return (
        <div className="">
            {/* <Link  className="text-lg    hover:underline hover:underline-offset-8 hover:font-bold hover:drop-shadow-xl hover:decoration-4 flex w-4/6 m-auto " >
            ⇚ Back
            </Link> */}
            <Back />
            <p className="text-4xl font-bold flex text-center justify-center ">
                Gallery
            </p>
            <Gallery/>
         
   


        </div>
    )
}