import React from "react";
import { Image } from "react-bootstrap";

const SingleGallery = ({ image = "" }) => {
  return (
    <li className="animated fadeInUp">
      <div className="gallery-one__img-box">
        <Image src={require(`../../assets/images/gallery/${image}`).default.src} alt="" />
        <div className="gallery-one__iocn">
          <a href={`../../assets/images/gallery/${image}`}>
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </li>
  );
};

export default SingleGallery;
