import React from 'react';



function Item({item, clickItem}) {
   return (
    <li
    key={item.id}
    className="list-item"
    onClick={clickItem}
    value={item.name}
    >
    {item.name}
    </li>
);

}


export default Item;