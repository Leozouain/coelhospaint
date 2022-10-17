import { ImageViewer } from "react-image-viewer-dv"

import { useState } from "react"

export default function Gallery() {
    const images = [
        "https://picsum.photos/1600/1500?image=1050",
        "https://picsum.photos/1600/1500?image=1051",
        "https://picsum.photos/1400/1300?image=1052",
        "https://picsum.photos/1300/1600?image=1053",
        "https://picsum.photos/1400/1600?image=1054",
        "https://picsum.photos/1600/1300?image=1055",
        "https://picsum.photos/1300/1600?image=1056",
        "https://picsum.photos/1200/1300?image=1057",
        "https://picsum.photos/1200/1300?image=539",
        "https://picsum.photos/1200/1300?image=80",
        "https://picsum.photos/1200/1300?image=56",
        "https://picsum.photos/1200/1300?image=36",
        "https://picsum.photos/1200/1300?image=980",
        "https://picsum.photos/1200/1300?image=568",
        "https://picsum.photos/1200/1300?image=366",

    ]

    const [data, setData] = useState({ img: '', i: 0 })


    const viewImage = (img, i) => {
        setData(img, i)
    }

    const imgAction = (action) => {
        let i = data.i
        if (action === 'next-img') {
            setData({ img: images[i + 1], i: i + 1 })
        }
        if (action === 'previous-img') {
            setData({ img: images[i - 1], i: i - 1 })
        }
    }


    return (
        <div className="flex justify-center w-full sm:w-5/6 m-auto mt-7">
            <div className="grid  gap-2 w-full m-2 sm:w-5/6 grid-cols-custom2 lg:grid-cols-custom " >

                {images.map((image, i) => (

                    <ImageViewer  >
                        <div className="flex justify-center ">
                            <img className="h-[150px] w-[150px] lg:h-[400px] lg:w-[400px] md:h-[250px] md:w-[250px] object-cover"
                                key={i}
                                src={image}
                                style={{  display: "block", cursor: 'pointer', boxShadow: "-1px 0px 0px" }}
                                onClick={() => viewImage(image, i)}
                            />
                        </div>
                    </ImageViewer>
                ))}


            </div>
        </div>

    )
}

























