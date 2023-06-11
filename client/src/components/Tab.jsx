import React from 'react'
import { useSnapshot } from 'valtio'

import state from '../store';
import { getContrastingColor } from '../config/helpers';


const Tab = ({ tab, isFilterTab, isActiveTab, handleClick }) => {
  const snap = useSnapshot(state);
  
  const generateStyle = () => {
    
      return {
        //backgroundColor: snap.color,
        color: getContrastingColor(snap.color)
      }
    
 
    
  }

  const activeStyles = isFilterTab && isActiveTab 
    ? { backgroundColor: snap.color, opacity: 0.5 }
    : { backgroundColor: "transparent", opacity: 1 }

  return (
    <div
      key={tab.name}
     
      className={`tab-btn font-bold font-mono ${isFilterTab ? 'rounded-full glassmorphism' : 'rounded-4'}`}
      onClick={handleClick}
      style={activeStyles}
    >
      <h3
       style={generateStyle()}>{tab.icon}</h3>
      {/* <img 
        src={tab.icon}
        alt={tab.name}
        className={`${isFilterTab ? 'w-2/3 h-2/3' : 'w-11/12 h-11/12 object-contain'}`}
      /> */}
    </div>
  )
}

export default Tab