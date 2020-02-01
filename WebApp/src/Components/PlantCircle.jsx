import React, { useLayoutEffect } from 'react';
import circle from '../Media/plant-circle.svg';
import openCircle from '../Media/open-circle.svg'
import plus from '../Media/plant-plus.png';
import Typing from './Typing';
import Delayed from './Delayed';

const PlantCircle = ({label, x, y, radius, startY, gridHeight}) => {

  const plantStyle = {
    position: 'absolute',
    left: x - radius,
    top: y - radius,
    width: radius * 2,
    height: radius * 2
  };

  const openCircleStyle = {
    position: 'absolute',
    left: x - (radius * 2.4 / 2),
    top: y - (radius * 2.4 / 2),
    width: radius * 2.4,
    height: radius * 2.4,
    animation: 'spin 1s linear 2 forwards'
  };

  const openCircleImg = {
    width: radius * 2.4,
    height: radius * 2.4, 
    transform: 'rotate(' + (radius * x) % 360 + 'deg)'
  }

  const plusStyle = {
    position: 'absolute',
    left: x - 10,
    top: y - 10,
    width: 20,
    height: 20
  };

  return (
    <div>
      <style>{`
              @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }

              .fade-in {
                opacity: 1;
                animation-name: fadeInOpacity;
                animation-iteration-count: 1;
                animation-timing-function: ease-in;
                animation-duration: 2s;
              }
              
              @keyframes fadeInOpacity {
                0% {
                  opacity: 0;
                }
                100% {
                  opacity: 1;
                }
              }
          `}</style>
      <div className="fade-in">
        <div className={'rotating-circle'} style={openCircleStyle}><img src={openCircle} style={openCircleImg} /></div>
        <img src={circle} style={plantStyle} />
        <img src={plus} style={plusStyle} />
    </div>
    <Delayed waitBeforeShow={2000}><Typing dataText={[label]} x={x} y={y} radius={radius} {...[startY, gridHeight]} /></Delayed>
  </div>);
}

export default PlantCircle;