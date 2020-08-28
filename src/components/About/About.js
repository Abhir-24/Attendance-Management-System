import React, { Component } from 'react';
import title from '../../images/title.jpeg';
import './about.scss';

export default class About extends Component {
  render() {
    return (
      <div className='about'>
        <div className="part">
          <h1>About the Workshop</h1><br /><br />
          <img className="title-img" src={title} alt="title-img"/><br /><br />
          <p>In this workshop we will learn the basics of HTML, CSS and Javascript</p>
          <p>and explore some of the cool and amazing projects that can be built using these languages</p>
        </div>
      </div>
    )
  }
}
