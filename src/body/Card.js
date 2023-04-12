import React from 'react';

export default function Card(props) {
  // eslint-disable-next-line no-unused-vars

  return (
    <div className="card container">
      {/* <div className="title">{props.brand}</div> */}
      <img src={props.logo} alt="logo" />
      <div className="sale1">{props.offer1}</div>
      {props.brand === 'r&b' || props.brand === 'his & hers'
        ? <div className="sale2" style={{ color: '#fff' }}>{props.offer2}</div>
        : <div className="sale2">{props.offer2}</div>}

      <div className="terms" style={{ direction: "ltr" }}>تطبق الشروط والأحكام*</div>
      <a
        className="shop-now-a"
        href={props.link}
        target="_blank"
        rel="noreferrer"
      >
        <div className="btn-div">
          <span>تسوق الاّن</span>
          <i className="fa-solid fa-tags"></i>
        </div>
      </a>

    </div>
  );
}
