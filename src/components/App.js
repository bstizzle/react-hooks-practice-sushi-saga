import React, {useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([])
  const [plates, setPlates] = useState([])
  const [wallet, setWallet] = useState(100)

  useEffect(() => {
    fetch(API)
      .then(resp => resp.json())
      .then(data => setSushis(data))
  }, [])

  function handleSetPlates(eatenSushi){
    if(wallet - eatenSushi.price < 0){
      alert("You're broke! No more sushi.")
    }else {
      setPlates([...plates, eatenSushi])
      setWallet(wallet - eatenSushi.price)
    }
  }

  return (
    <div className="app">
      <SushiContainer sushis={sushis} onSetPlates={handleSetPlates} />
      <Table plates={plates} wallet={wallet}/>
    </div>
  );
}

export default App;
