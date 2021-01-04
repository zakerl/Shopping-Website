import React from 'react'
import "./menu-container.scss"
import {MenuItem} from '../menu-item/menu-item'

// const MenuContainer = ()=>(
//   <div className="menu-container">
//     <MenuItem title = "HATS" subtitle = "SHOP NOW" />
//     <MenuItem title = "JACKETS" subtitle = "SHOP NOW" />
//     <MenuItem title = "SNEAKERS" subtitle = "SHOP NOW" />
//     <MenuItem title = "WOMENS" subtitle = "SHOP NOW" />
//     <MenuItem title = "MENS" subtitle = "SHOP NOW" />
//   </div>
// )

class MenuContainer extends React.Component{
  constructor(){
    super();

    this.state = {
      "menus" : [
        {
          title: 'hats',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          linkUrl: 'shop/hats'
        },
        {
          title: 'jackets',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          linkUrl: 'shop/jackets'
        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          linkUrl: 'shop/sneakers'
        },
        {
          title: 'womens',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          size: 'large',
          linkUrl: 'shop/womens'
        },
        {
          title: 'mens',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          size: 'large',
          linkUrl: 'shop/mens'
        }
      ]
    }
  }
  render(){
    return(
      <div className="menu-container">
        {this.state.menus.map(({title,imageUrl, size},idx) => 
          <MenuItem key={idx} title = {title} imageUrl = {imageUrl} size={size}/>)
        }
      </div>
    )
  }
}

export default MenuContainer