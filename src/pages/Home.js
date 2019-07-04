import React,{Component} from "react";

// import Footer from "../components/Footer/Footer.js";
// import HOC from "../components/HOC/index";
// import Directive from '../components/Directive/Directive'
import Searchbar from '../components/Searchbar/Searchbar';
import Panel from '../components/panel/panel';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Searchbar/>
        <Panel/>
        {/* <Directive/>
        <HOC />
        <Footer /> */}
      </div>
    );
  }
}
