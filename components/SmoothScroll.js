import  Scrollbar  from 'smooth-scrollbar';
import {useEffect} from 'react';
  
  const Scroll = () => {

    const options = {
      damping : 0.02,
      thumbMinSize: 1
    }
  
      useEffect(() => {
  
      Scrollbar.init(document.body, options);   
  
      return () => {
         if (Scrollbar) Scrollbar.destroy(document.body)
      }  },[])

    return null;
}

export default Scroll;