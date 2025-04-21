import React from "react";

function ImageSlider() {
  const imageSlider = [...Array(8).keys()];


  return (
    <div className=" w-full flex">
      {imageSlider.map((slide) => (
        <div className={`w-[500px] `}>
           {/* {createColor(slide + 1)}  */}
           <img src={`../../images/airplane${slide}.PNG`} alt={slide} className=" object-cover bg-amber-500"/>
            {slide}
            </div>
      ))}
    </div>
  );
}

export default ImageSlider;
