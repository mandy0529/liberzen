import React from 'react';

const Detail = () => {
  return (
    <div className="box">
      <div className="detail-info product">
        <h1 className="detail-info-title">
          제품 특성
          <span className="box-product">Product attribute</span>
        </h1>
        <img src="img/detail-1.png" alt="detail1" className="detail-img" />
        <div className="detail-info">
          일상의 자유로움을 추구하는 현대 여성들을 겨냥 <br />
          모든 연령층을 아우르는 폭넓은 제품군 구성 <br />
          여성의 부드러움을 강조하는 실루엣, 포용력을 갖춘 디자인 <br />
          자극성 없는 소재를 사용해 질감에 대한 거부감 최소화 <br />
          품위와 활동성 함께 구현한 현대적 스타일
        </div>
      </div>
      <div className="detail-info label">
        <h1 className="detail-info-title">
          제품 구성
          <span className="box-product">Label </span>
        </h1>
        <img src="img/detail-2.png" alt="detail2" className="detail-img" />
        <div className="detail-label">
          <div className="detail-label_list">
            <h1 className="box-product title">Black Label</h1>
            <h3 className="detail-info_list">자연적 친화성 강조</h3>
          </div>
          <div className="detail-label_list">
            <h1 className="box-product title">Beige Label</h1>
            <h3 className="detail-info_list">현대적 실용성 강조</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
