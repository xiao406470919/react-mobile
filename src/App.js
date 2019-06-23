import React, { Component,Fragment } from 'react';
import './style/App.css';
import MyLayout  from "./components/MyLayout";

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <Fragment>
        <MyLayout></MyLayout>
      </Fragment>
     );
  }
}
 
export default App;
