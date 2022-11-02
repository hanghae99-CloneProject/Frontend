import React from "react";
import "./mypageView.css";

const MyPageView = () => {
  return (
    <div className="wrap-mypage">
      <div className="my-info">
        <div className="info-top">
          <div className="square-info">
            <div className="square-email">kkjh9960@gmail.com</div>
            <div className="info-email">kkjh9960@naver.com</div>
          </div>
        </div>
        <div className="info-bottom">
          <div className="button-info">상품</div>
          <div className="my-sell-list">
            {/* {배열} */}
            {/* {x.map((추출값)=> (
            <div className="item">
              <div className="thumb">
                <img src="" alt="" />
              </div>
              <div className="prdInfo">
              <p className="prdTitle">타이틀</p>
              <p className="price">
              10000<span>원</span>
              <span className="location">인천광역시 남동구 송도</span>
              </p>
              </div>
            </div>
          ))} */}
            <div className="item">
              <div className="thumb">
                <img src="" alt="" />
              </div>
              <div className="prdInfo">
                <p className="prdTitle">타이틀</p>
                <p className="price">
                  10000<span>원</span>
                  <span className="location">인천광역시 남동구 송도</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPageView;
