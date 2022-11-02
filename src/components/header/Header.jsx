import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./header.css";
import appImg from "../img/appimg.svg";
import startImg from "../img/starimg.svg";
import headerIcon1 from "../img/headerIcon1.png";
import headerIcon2 from "../img/headerIcon2.png";
import headerIcon3 from "../img/headerIcon3.png";
import logo from "../img/Logo.svg";
import searchBtn from "../img/searchBtn.png";
import sellerCenter from "../img/go.png";
import menu from "../img/menu.svg";

const Header = () => {
  const navigate = useNavigate();

  const logoClickHandler = () => {
    navigate("/");
  };
  const sellClickHandler = () => {
    navigate("/posts");
  };
  const mypageClickHandler = () => {
    navigate("/mypage");
  };
  return (
    <>
      <div className="headerWrap">
        <div className="miniMenuBar">
          <div className="miniMenu">
            <div className="leftMenu">
              <p>
                <img src={appImg} alt="app" />
                앱다운로드
              </p>
              <p>
                <img src={startImg} alt="star" />
                즐겨찾기
              </p>
            </div>
            <div className="rightMenu">
              <div className="login">
                <p>로그인/회원가입</p>
                <p>내상점</p>
              </div>
            </div>
          </div>
        </div>
        <header id="header">
          <div className="headerContainer">
            <div className="headerContent">
              <div>
                <p onClick={logoClickHandler}>
                  <img src={logo} alt="app" />
                </p>
              </div>
              <div className="searchBar">
                <div className="searchBarCon">
                  <input
                    type="search"
                    placeholder="상품명,지역명,@상점명 입력"
                  />
                  <button className="searchBtn">
                    <img src={searchBtn} alt="" />
                  </button>
                </div>
              </div>
              <div className="myMenu">
                <p onClick={sellClickHandler}>
                  <img src={headerIcon1} alt="" />
                  판매하기
                </p>
                <p onClick={mypageClickHandler}>
                  <img src={headerIcon2} alt="" />
                  내상점
                </p>
                <p className="last">
                  <img src={headerIcon3} alt="" />
                  번개톡
                </p>
              </div>
            </div>
            <div className="catagory">
              <button className="menu">
                <img src={menu} alt="" />
              </button>
              <p className="myStore">
                번개장터 판매자센터 <img src={sellerCenter} alt="" />
              </p>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
