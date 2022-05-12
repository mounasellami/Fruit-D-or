import React from 'react';

const Rate = ({rating, setFilterByRate }) => {
    const stars = (s) => {
        let starsArray =[]
        for (let i = 1; i <= 5; i++) {
            if (i <= s) { starsArray.push(<span onClick={()=>setFilterByRate(i)}> ★ </span> ) } /*alt-codes start */
            else { starsArray.push(<span onClick={()=>setFilterByRate(i)}>☆</span>) }
        }
        return starsArray;
    }
  return ( <div> {stars(rating)} </div> )
}

Rate.defaultProps = {
    setFilterByRate: () => {}
};

export default Rate;
