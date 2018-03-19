import React, { Component } from 'react';

class About extends Component {
    render(){
        return (
        <div>
        <Mario/>
        <Ram/>
        </div>
        );

    }
}
class Ram extends React.Component {
   render() {
      return (
         <div  class="bo">
         <img src="https://png.pngtree.com/element_origin_min_pic/16/06/19/235766b5cda99cb.jpg"/>
         </div>

      );
   }
}
class Mario extends React.Component {
   render() {
      return (
         <div class="row">
         <div class="col-sm-6">
          <h4>Contact Us!!!<br></br>
          0212261847</h4>
          </div>
          <div class="col-sm-6">
           <h4>Address<br></br>
           College Road<br></br>Pointpedro</h4>
           </div>
         </div>
         );
   }
}

export default About
