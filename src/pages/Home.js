import React, { Component, Fragment } from "react";
import { getGoods } from "../Api";
import { Carousel } from "antd-mobile";

class Home extends Component {
  state = {
    sliderlist: [],
    toplist: [],
    imgHeight: 176
  };
  componentDidMount() {
    getGoods().then(res => {
      console.log(res);
      if (res.status === 0) {
        this.setState({
          sliderlist: res.message.sliderlist,
          toplist: res.message.toplist
        });
      }
    });
  }
  render() {
    return (
      <Fragment>
        <Carousel autoplay infinite>
          {this.state.sliderlist.map(val => (
            <a
              key={val.id}
              href="#"
              style={{
                display: "inline-block",
                width: "100%",
                height: this.state.imgHeight
              }}
            >
              <img
                src={val.img_url}
                alt=""
                style={{ width: "100%", verticalAlign: "top" }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event("resize"));
                  this.setState({ imgHeight: "auto" });
                }}
              />
            </a>
          ))}
        </Carousel>
        <div className="recommend_goods">
          <div className="recommend_goods_title">推荐商品</div>
          <div className="recommend_goods_content">
            {this.state.toplist.map(v => (
              <a
                key={v.id}
                href="javascript:;"
                className="recommend_goods_item"
              >
                <div className="recommend_img_wrap">
                  <img src={v.img_url} alt="" />
                </div>
                <div className="recommend_goods_name">
                  <p>{v.title}</p>
                </div>
              </a>
            ))}
          </div>
          <style jsx>{`
            .recommend_goods_title{
                padding:10px;
                background-color:#f5f5f9;
                color:#666
            }
            .recommend_goods_content{
                .recommend_goods_item{
                    display:flex;
                    .recommend_img_wrap{
                        flex:1;
                        padding:20px;
                        img{}
                    }
                    .recommend_goods_name{
                        flex:6;
                        display:flex;
                        align-items:center;
                        font-size:14px;
                        overflow:hidden;
                        p{
                            text-overflow:ellipsis;
                            overflow:hidden;
                            white-space:nowrap;
                        }
                    }
                }
            }
          `}</style>
        </div>
      </Fragment>
    );
  }
}

export default Home;
