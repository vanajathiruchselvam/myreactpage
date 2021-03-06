import React, { Component } from 'react';
import { render } from 'react-dom';
// Import routing components
//import {Router, Route} from 'react-router';
import { BrowserRouter,Switch, Route } from 'react-router-dom';

// Import custom components
import Main from './common/main.component.jsx'
import Home from './common/home.component.jsx'
import About from './common/about.component.jsx'
import Car from './car/car.component.jsx'
import CarDetail from './car/car-detail.component.jsx'

const data = [
    {
      id: 1,
      name: 'BlackCake',
      Year: 'MarioGee',
      Model: 'BlackCake',
      make: '100',
      media: 'https://www.bakingo.com/sites/default/files/black-forest-cake-A.jpg',
      price: '5000/='

    }, {
        id: 2,
        name: 'strawberry',
        Year: 'GoodyBakery',
        model: 'strawberry',
        make: '50',
        media: 'https://images-gmi-pmc.edge-generalmills.com/76d146fc-add9-41e0-8b1f-c6e5ff98e490.jpg',
        price: '2500/='

    }, {
        id: 3,
        name: 'vanilla',
        year: 'BragetyBakery',
        model: 'vanilla',
        make: '55',
        media: 'http://hpbirthday.net/wp-content/uploads/2015/12/beautiful-and-heartfelt-birthday-wishes-that-can-make-your-teacher-touched-1.jpeg',
        price: '5600/='
    }, {
        id: 4,
        name: 'Lovablecake',
        year: 'MachoBakery',
        model: 'Lovablecake',
        make: '77',
        media: 'https://www.mrbrownbakery.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/c/h/chocolate.jpg',
        price: '6000/='
    }, {
        id: 5,
        name: 'BlackBerry',
        year: 'shoulBakery',
        model: 'BlackBerry',
        make: '25',
        media: 'https://www.willcookforsmiles.com/wp-content/uploads/2012/05/DSC_1192-edited.jpg',
        price: '5500/='

  }];
render(
    <BrowserRouter>

      <Main>
            <Route exact path="/" component={Home}/>
            <Route path="/cakes" render={(props) => (<Car {...props} data={data}/>)}/>
            <Route path="/cakes/:id" render={(props) => (<CarDetail {...props} data={data}/>)}/>
            <Route path="/about" component={About}/>
      </Main>

    </BrowserRouter>,
    document.getElementById('container')
);
