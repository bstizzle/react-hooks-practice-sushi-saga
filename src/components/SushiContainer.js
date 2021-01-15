import React, {useState} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({sushis, onSetPlates}) {
  const [firstIndex, setFirstIndex] = useState(0)
  const [lastIndex, setLastIndex] = useState(4)

  const sushiDisplay = sushis.map((sushi) => {
      return <Sushi key={sushi.id} sushi={sushi} onSetPlates={onSetPlates} />
    }).slice(firstIndex, lastIndex)

  function clickMore(){
    setFirstIndex(firstIndex + 4)
    setLastIndex(lastIndex + 4)
  }

  return (
    <div className="belt">
      {sushiDisplay}
      <MoreButton onClickMore={clickMore}/>
    </div>
  );
}

export default SushiContainer;
