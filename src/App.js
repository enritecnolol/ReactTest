import React, { Component } from 'react';
import PropTypes from 'prop-types'

import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

import items from './data/menu';

class App extends Component {
    static  propTypes = {
        children: PropTypes.object.isRequired
    };

    render() {
        const  { children } = this.props;
        return(
          <div className="App">
             <Header title="Test" items={items}/>
             <Content body={children} />
             <Footer copyright="&copy; Testing footer"/>
          </div>
        );
    }
}

export default App;
