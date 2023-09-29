import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import NewsContainer from "./Components/NewsContainer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  constructor(){
    super();
    this.state={
      mode:"light",
      text:"black"
    }
  }
  toggleMode = () =>{
    this.setState(
      this.state.mode==="light"?{mode:"dark",text:"white"}:{mode:"light",text:"black"}
      )
  }
  render() {
    return (
      <div>
        <Router>
        <Navbar tittle="News-Monkey" mode={this.state.mode} color={this.state.text} toggleMode={this.toggleMode} />
        
          <Routes>
            <Route exact path="/" element= {<NewsContainer key="general" category="general" mode={this.state.mode} color={this.state.text} />} ></Route>
            <Route exact path="/Entertainment" element= {<NewsContainer key="entertainment" category="entertainment" mode={this.state.mode} color={this.state.text} />} ></Route>
            <Route exact path="/Business"element= {<NewsContainer key="business" category="business" mode={this.state.mode} color={this.state.text} />} ></Route>
            <Route exact path="/Sports" element= {<NewsContainer key="sports" category="sports" mode={this.state.mode} color={this.state.text} />}></Route>
            <Route exact path="/Science" element= {<NewsContainer key="science" category="science" mode={this.state.mode} color={this.state.text} />}></Route>
            <Route exact path="/Technology" element= {<NewsContainer key="technology" category="technology" mode={this.state.mode} color={this.state.text} />}></Route>
            <Route exact path="/Health" element= {<NewsContainer key="health" category="health" mode={this.state.mode} color={this.state.text} />}></Route>
          </Routes>
        </Router>
      </div>
    );
  }
}
