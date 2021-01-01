import React from "react";

const ImageList = (props) => {
  const images = props.images.map(({ id, description, urls }) => {
    return (
      <div key={id}>
        <img src={urls.thumb} alt={description} />
      </div>
    );
  });

  return <div>{images}</div>;
};

export default ImageList;
