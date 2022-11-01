import React from "react";
import bunjangQR from "../img/bunjangQR.png";
import bunjangImg from "../img/bunjangImg.jpeg";
import "./mainView.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __mainPost } from "../../redux/modules/postSlice";
const MainView = () => {
  const mainpost = useSelector((state) => state.postReducer.list);
  console.log(mainpost);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__mainPost());
  }, [dispatch]);

  return (
    <div>
      <div className="qrContainer">
        <img src={bunjangImg} className="bunjangImg"></img>
        <img src={bunjangQR} className="bunjangQR"></img>
      </div>
      <div className="prdListContainer">
        <div className="todayRec">
          <div className="title">오늘의 상품 추천</div>
        </div>
        <div className="prdContent">
          {mainpost !== undefined
            ? mainpost.map((x) => {
                <div className="item">
                  <div className="thumb">
                    <img src={x.media} />
                  </div>
                  <div className="prdInfo">
                    <p className="prdTitle">{x.title}</p>
                    <p className="price">
                      {x.price}
                      <span>원</span>
                      <span className="time">1시간 전</span>
                    </p>
                  </div>
                </div>;
              })
            : null}
          {/* <div className="item">
            <div className="thumb">
              <img src="" alt="" />
            </div>
            <div className="prdInfo">
              <p className="prdTitle">타이틀</p>
              <p className="price">
                10000<span>원</span>
                <span className="time">1시간 전</span>
              </p>
            </div>
          </div>
          <div className="item">
            <div className="thumb">
              <img src="" alt="" />
            </div>
            <div className="prdInfo">
              <p className="prdTitle">타이틀</p>
              <p className="price">
                10000<span>원</span>
                <span className="time">1시간 전</span>
              </p>
            </div>
          </div>
          <div className="item">
            <div className="thumb">
              <img src="" alt="" />
            </div>
            <div className="prdInfo">
              <p className="prdTitle">타이틀</p>
              <p className="price">
                10000<span>원</span>
                <span className="time">1시간 전</span>
              </p>
            </div>
          </div>
          <div className="item">
            <div className="thumb">
              <img src="" alt="" />
            </div>
            <div className="prdInfo">
              <p className="prdTitle">타이틀</p>
              <p className="price">
                10000<span>원</span>
                <span className="time">1시간 전</span>
              </p>
            </div>
          </div>
          <div className="item">
            <div className="thumb">
              <img src="" alt="" />
            </div>
            <div className="prdInfo">
              <p className="prdTitle">타이틀</p>
              <p className="price">
                10000<span>원</span>
                <span className="time">1시간 전</span>
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default MainView;
