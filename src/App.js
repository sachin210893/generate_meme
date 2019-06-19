import React from 'react';
import Header from './Header.js'
import Footer from './Footer.js'

import './App.css';
import { memberExpression } from '@babel/types';
import Gallery from './Gallery.js';


export default class App extends React.Component {
  constructor(){
    super();
    this.state={

    }
  }
  render(){
    return (
      <div>
        <Header />
        <Gallery />
        <Footer />
      </div>
    );
  }
  
}

