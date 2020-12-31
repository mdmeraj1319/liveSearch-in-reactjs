import React from 'react';

const Sresult = (props) =>{
    const  img = `https://source.unsplash.com/300x200/?${props.value}`;
   return(
    <>
      <div>
        <img src ={img}  alt ="mj"/>
      </div>
    </>
   );
};

export default Sresult;