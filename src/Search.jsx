import { useScrollTrigger } from '@material-ui/core';
import React, { useState } from 'react';
import Sresult from './Sresult';

const Search = () =>{
    const inputEvent = (event) => {
       const  data = event.target.value;
       setImg(data);
    };

    const [img ,setImg] = useState();

   return(
      <>
       <div className="searchbar">
         <input 
           type="text"
           onChange={inputEvent} 
           value={img}
           placeholder="Search Anything"
        />
        {img === "" ?null : <Sresult value ={img}/> }
       </div>
      </>
   );
};

export default Search;