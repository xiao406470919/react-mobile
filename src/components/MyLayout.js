import React from "react";
import { TabBar } from "antd-mobile";

class MyLayout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      console.log(this.props);
    return (
      <div
        style={{ position: "fixed", height: "100%", width: "100%", top: 0 }}
      >
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
        >
          <TabBar.Item
            title="首页"
            key="Home"
            icon={<span className="iconfont icon-home" />}
            selectedIcon={<span className="iconfont icon-home" />}
            selected={this.props.match.url === "/"}
            onPress={() => {
              this.props.history.push("/");
            }}
            data-seed="logId"
          >
            {this.props.match.url === "/" ? this.props.children : null}
          </TabBar.Item>
          <TabBar.Item
            icon={<span className="iconfont icon-gouwuche" />}
            selectedIcon={<span className="iconfont icon-gouwuche" />}
            title="购物车"
            key="cart"
            badge={1}
            selected={this.props.match.url === "/cart"}
            onPress={() => {
              this.props.history.push("/cart");
            }}
            data-seed="logId1"
          >
            {this.props.match.url === "/cart" ? this.props.children : null}
          </TabBar.Item>
          <TabBar.Item
            icon={<span className="iconfont icon-weibiaoti2fuzhi12" />}
            selectedIcon={
              <span className="iconfont icon-weibiaoti2fuzhi12" />
            }
            title="我的"
            key="Mine"
            selected={this.props.match.url === "/mine"}
            onPress={() => {
              this.props.history.push("/mine");
            }}
          >
            {this.props.match.url === "/mine"?this.props.children:null}
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

export default MyLayout;
