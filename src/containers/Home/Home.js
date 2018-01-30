/* eslint-disable */
import React, { Component } from 'react';
import styles from './home.scss';

class Home extends Component {
   render() {
     const {
       loading,
       results,
       saved
     } = this.props;

     console.log(saved);
     console.log(results);

     return (
       <div>
         Hello World
       </div>
     );
   }
 }

export default Home;
