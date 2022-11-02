import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __mainGet } from "../../redux/modules/postSlice";
import "./viewPostView.css";

const ViewPostView = () => {
  const view = useSelector((state) => state.postReducer.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__mainGet());
  }, [dispatch]);

  const changeClickHandler = () => {};
  const deleteClickHandler = () => {};

  return (
    <>
      {/* {post_target &&  */}
      <React.Fragment>
        <div className="DetailMainContainer">
          <div className="SellInfo">
            <div className="ImgBox">
              <img src={view.img} width="400px" height="400px"></img>
            </div>
            <div className="InfoBox">
              <div className="ProductContentsBox">
                <div className="ViewTitle">
                  <h2>{view.title}</h2>
                </div>
                <div className="PriceBox">
                  <p>
                    <span>{view.price}</span>원
                  </p>
                </div>
                <div className="IconsBox">
                  <img
                    src="Favorate"
                    style={{
                      fontSize: 20,
                      margin: "5px 10px",
                      color: "#CCCCCC",
                    }}
                  />
                  <img
                    src="Visible"
                    style={{
                      fontSize: 25,
                      margin: "5px 10px",
                      color: "#CCCCCC",
                    }}
                  />
                </div>
                <div className="PrdP">
                  <span>상품상태</span>
                  <p>{view.state}</p>
                </div>
                <div className="PrdP">
                  <span>교환여부</span>
                  <p>{view.trade}</p>
                </div>
                <div className="PrdP">
                  <span>거래지역</span>
                  <p>{view.local}</p>
                </div>
              </div>
              <div className="ButtonBox">
                <button className="ChangeButton" onClick={changeClickHandler}>
                  수정하기
                </button>
                <button className="DeleteButton" onClick={deleteClickHandler}>
                  삭제하기
                </button>
              </div>
            </div>
          </div>

          {/* <WrapTab>
              <ProductInfoTab {...props}/>
          </WrapTab> */}

          <div className="WrapInfo">
            <div className="SelectInfoBar">
              <button className="ProductInfoButton"></button>
            </div>
            <div className="WrapSelectInfo">
              <div className="ProductInfo">
                <p>상품정보</p>

                <br></br>
                <br></br>
                <div>{view.content}</div>
              </div>
              <div className="PrdInfo">
                <div className="PrdLocal">
                  <div>
                    <img src=""></img>
                    <p>거래지역</p>
                  </div>
                  <div>{view.local}</div>
                </div>
                <div className="PrdCategory">
                  <div>
                    <img src=""></img>
                    <p>카테고리</p>
                  </div>
                  <div>{view.category}</div>
                </div>
                <div className="PrdTag">
                  <div>
                    <img src=""></img>
                    <p>상품태그</p>
                  </div>
                  <div>{view.tag}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* {is_chatmodal ? 
            <ChatModal
              close={closeChatModal}
              {...props}
              detail_id={detail_id}
              // chat_list={chat_list}
              // is_chat={is_chat}
              // is_me={is_me}
              // user_info={user_info}
            />
            : null} */}
      </React.Fragment>
    </>
  );
};
// Detail.defaultProps = {

// };

export default ViewPostView;
