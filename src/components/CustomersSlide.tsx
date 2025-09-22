import React from "react";
import Slider from "react-slick";

const images = ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png']

function CustomersSlide()
{
    return <Slider className="w-full mt-8" dots={true} infinite={true} slidesToShow={6} responsive={[{
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }]}>
        {images.map(image => <div className="flex items-center justify-center">
            <a href="https://ged.digitalizasantana.com.br" target="_blank" key={image} className="bg-[#13C194] w-32 h-32 rounded-lg flex items-center justify-center">
                <img className="w-24 h-24" src={import.meta.env.BASE_URL + 'customers/' + image} />
            </a>
        </div>)}
    </Slider>
}

export default CustomersSlide