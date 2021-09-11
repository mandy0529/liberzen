import React from 'react';

const Photo = ({
  urls: {regular},
  alt_description,
  likes,
  user: {
    name,
    portfolio_url,
    profile_image: {medium},
  },
}) => {
  console.log(likes, name);
  return (
    <article className="photo">
      <h1>hello</h1>
      <img src={regular} alt={alt_description} />
      <div className="photo-info">
        <div>
          <h4>{name}</h4>
          <p>{likes} likes</p>
        </div>
        <a href={portfolio_url}>
          <img src={medium} alt="" className="user-img" />
        </a>
      </div>
    </article>
  );
};

export default Photo;
