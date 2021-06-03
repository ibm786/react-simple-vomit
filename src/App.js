//imports areused to bring pther modules, components and files in so that they can be used in this file
// this is the es6+ way of doing the following const react=require('react)

import React, { Component } from 'react';
// this brings in react and the component class into the file from react
import './App.css';
//this brings in the  the styling in the app.css folder
import Header from './Header';
// this imports the header component from the file its created in
import SectionMain from './SectionMain';
// this imports the section main component from the file its created in
import Aside from './Aside';
// this imports the aside component from the file its created in
import Footer from './Footer';
// this imports the footer component from the file its created in



class App extends Component {
  // we extend the component class with app and specify methods that arent inherited below

  render() {
 // the render metho is called to dynamically generate html by using the components below, a div with class of App 
    return (
      <div className="App">
        <Header backColor="green" width="50%"></Header>
      // a header component is created with a background color of green and a awidth of 50% of the parent container(the div with a class root in the index.html file)
        <SectionMain></SectionMain>
      // creates a sectionmain component
        <Aside></Aside>
      // creates and aside component
        <Footer></Footer>
      //creates a footer component
      </div>
    );
  }
