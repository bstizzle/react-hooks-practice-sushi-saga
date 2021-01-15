import React, {useState} from "react";

function Sushi({sushi, onSetPlates}) {

  const [isEaten, setIsEaten] = useState(false)

  function eatSushi(){
    setIsEaten(true)
    onSetPlates(sushi)
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={eatSushi}>
        {isEaten ? null : (
          <img
            src={sushi.img_url}
            alt={sushi.name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
