import React from "react";

export const Tile = ({ item }) => {

  const values = Object.values(item);
  const firstItem = values.shift();
  const valuesMap = values.map((value, i) => {
    return <p className='tile' key={i}>{value}</p>
  })

  return (
    <div className="tile-container">
      <p className='tile-title' key='title'>{firstItem}</p>
      {valuesMap}
    </div>
  );
};
