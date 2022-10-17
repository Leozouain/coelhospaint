import {  useNavigate } from "react-router-dom"

export default function Back() {
    const navigate = useNavigate()
    

    return (
        
            <button onClick={() => navigate(-1)} className="text-lg    hover:underline hover:underline-offset-8 hover:font-bold hover:drop-shadow-xl hover:decoration-4 flex w-4/6 m-auto " >
            ⇚ Back
            </button>
    )}