import React from 'react'
import './menu-item.scss'

export const MenuItem = ({title, imageUrl, size}) => (
  <div className={"menu-item " + size}>
    <div style={{backgroundImage: `url(${imageUrl})`}} className="background-image"/>
    <div className = "content">
      <div className="title">{title.toUpperCase()}</div>
      <div className = "subtitle">SHOP NOW</div>
    </div>
  </div>  
)


