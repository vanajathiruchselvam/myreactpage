import React, { Component } from 'react';

class Home extends Component {
    render(){
        return (<div>
        <Vanaja/>
        <Panel/>
        </div>
        );

    }
}
class Vanaja extends React.Component {
   render() {
      return (
         <div>
            <h1 className="title">Cake Besties</h1>


         </div>
      );
   }
}
class Panel extends React.Component {
   render() {
      return (
      <div class="container">
      <h2 className="pt">Globally Cake Designs</h2>
        <div class="panel panel-default">
          <div class="panel-heading"><b>OUR MARKETS</b></div>
          <div class="panel-body">

          <div className="row">
            <div className="col-sm-4">
            <div class="panel panel-default">
  <div class="panel-heading pf">SriLanka</div>
  <div class="panel-body"><img src="http://www.crumbsanddoilies.co.uk/cakes_files/disco_unicorn_cake.jpg" class="img-responsive"/></div>
  <div class="panel-footer pf"><a href="#">GO IN ...></a></div>
</div>
            </div>
            <div className="col-sm-4">
            <div class="panel panel-default">
  <div class="panel-heading pf">Canada</div>
  <div class="panel-body "><img src="http://weddingcakesuppliers.info/wp-content/uploads/cakes-fotos-images-of-cakes-best-25-drip-cakes-ideas-on-pinterest-beautiful.jpg" class="img-responsive"/></div>
  <div class="panel-footer pf"><a href="#">GO IN ...></a></div>
</div>
            </div>
            <div className="col-sm-4">
            <div class="panel panel-default">
  <div class="panel-heading pf">London</div>
  <div class="panel-body "><img src="https://cdna2.zoeysite.com/Adzpo594RQGDpLcjBynL1z/cache=expiry:31536000/compress/https://s3.amazonaws.com/zcom-media/sites/a0i0L00000QyjfRQAR/media/mediamanager/NEW-CAKES3.jpg" class="img-responsive"/></div>
  <div class="panel-footer pf"><a href="#">GO IN ...></a></div>
</div>
            </div>
          </div>

          </div>
          </div>
      </div>
      );
   }
}

export default Home
