import { render } from '@testing-library/react';
import React from "react";
import axios from 'axios';
import "./directory.component.scss";
import MenuItem from '../menu-item/menu-item.component'
import {sections} from '../../data/sections-data'


export default class Directory extends React.Component {

  state = {
    products: []
  }

  componentDidMount(){
    axios.get('https://fakestoreapi.com/products?limit=5')
    .then(res=>{
      console.log(res.data);
      // const products = res.json();
      this.setState({products : res.data});
    })
    .catch(error => {
      console.error('There was some error!', error);
      // console.log(res);
    });
  }



  render() {
    return (
      <div className="directory">
        <table>
          { this.state.products.map(({id, ...otherSectionProps}) => (
              <MenuItem id={id} {...otherSectionProps}/>
          ))}
        </table>
      </div>
    );
  }
}
