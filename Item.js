import React from 'react';



function Item({item, clickItem}) {
   return (
    <li
    key={item.id}
    className="list-item"
    onClick={clickItem}
    value={item.name}
    count={item.amount}
    >
    {item.name}
    </li>
);

}

function Item2({item}) {
    return (
     <li
     key={item.id}
     className="list-item"
     value={item.name}
     count={item.amount}
     >
     {item.name} x {item.amount}
     </li>
 );
 
 }


export {Item, Item2}
