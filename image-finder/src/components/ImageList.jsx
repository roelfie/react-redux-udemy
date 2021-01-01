import React from "react";

const ImageList = (props) => {
  const images = props.images.map((img) => {
    return (
      <div key={img.id}>
        <img src={img.urls.thumb} alt={img.description} />
      </div>
    );
  });

  return <div>{images}</div>;
};

export default ImageList;
