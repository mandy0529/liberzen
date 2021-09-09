import React from 'react';
import {FaFacebookSquare, FaInstagram} from 'react-icons/fa';

const Info = () => {
  return (
    <footer className="footer">
      <div className="icon-box">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.facebook.com/Liberzen/?ref=nf&hc_ref=ARSUhTBLxKht4m1rAoNEy8wIGe0d_vvtd99aVgyJ31CY6nDFRfsuJOipFv39oN8aEP0&__tn__=%3C-R"
        >
          <FaFacebookSquare className="facebook-icon icon" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/liberzen/"
        >
          <FaInstagram className="instagram-icon icon" />
        </a>
      </div>
      <div className="liberzen-address">
        <h3>서울시 중구 퇴계로 80길 42 승부빌딩 2층</h3>
        <h3>T : 02-2254-2361</h3>
      </div>
      <h1 className="copyright">
        © 2021 LIBERZEN. Copyright All rights reserved
      </h1>
    </footer>
  );
};

export default Info;
