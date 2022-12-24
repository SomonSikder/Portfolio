import React from "react";
import Slider from "react-slick";
import Card from "./Card";

import project1 from "../asset/images/project1.png";
import project2 from "../asset/images/project2.png";
import project3 from "../asset/images/project3.png";
import project4 from "../asset/images/project4.png";
import project5 from "../asset/images/project5.png";
import project6 from "../asset/images/project6.png";
import project7 from "../asset/images/project7.png";
import project8 from "../asset/images/project8.png";

const ProjectSlider = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 5000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div style={{ width: "400px" }}>
        <div className="flex justify-center items-center gap-2 my-2">
          <div>
            <Card
              img={project1}
              link={"https://somonsikder.github.io/bootstrap-website/"}
              code={"https://github.com/SomonSikder/bootstrap-website"}
            ></Card>
          </div>
          <div>
            <Card
              img={project2}
              link={"https://papaya-croquembouche-cdd8cd.netlify.app"}
              code={"https://github.com/SomonSikder/pizza-delivery-react-app"}
            ></Card>
          </div>
        </div>
        <div className="flex justify-center items-center gap-2 my-2">
          <div>
            <Card
              img={project3}
              link={"https://ema-john-7403a.web.app/"}
              code={"https://github.com/SomonSikder/react-emma-john-shop"}
            ></Card>
          </div>
          <div>
            <Card
              img={project4}
              link={"https://somonsikder.github.io/colorFood/"}
              code={"https://github.com/SomonSikder/colorFood"}
            ></Card>
          </div>
        </div>
      </div>
      <div style={{ width: "400px" }}>
        <div className="flex justify-center items-center gap-2 my-2">
          <div>
            <Card
              img={project5}
              link={"https://affectionate-feynman-432c76.netlify.app/"}
              code={"https://github.com/SomonSikder/react-worker-hireing"}
            ></Card>
          </div>
          <div>
            <Card
              img={project6}
              link={"https://somonsikder.github.io/penguin-fashion-tailwind/"}
              code={"https://github.com/SomonSikder/penguin-fashion-tailwind"}
            ></Card>
          </div>
        </div>
        <div className="flex justify-center items-center gap-2 my-2">
          <div>
            <Card
              img={project7}
              link={"https://starlit-toffee-d72e56.netlify.app/"}
              code={"https://github.com/SomonSikder/M360ICT_react_test"}
            ></Card>
          </div>
          <div>
            <Card
              img={project8}
              link={"https://olive-house-e466d.web.app/"}
              code={
                "https://github.com/SomonSikder/olive_house_client_site_react_app"
              }
              code2={
                "https://github.com/SomonSikder/olive_house_server_site_nodejs"
              }
            ></Card>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default ProjectSlider;
