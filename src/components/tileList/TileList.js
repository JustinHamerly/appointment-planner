import React from "react";
import {Tile} from '../tile/Tile'

export const TileList = ({tileArray}) => {
  return (
    tileArray.map((item, i) => <Tile key={i} item={item}/>)
  );
};
