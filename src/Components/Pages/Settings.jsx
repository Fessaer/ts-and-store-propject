import { Context } from '../Store';
import React, {useContext} from 'react'
import { Button } from 'antd';
import update from 'immutability-helper';
// import update from 'react-addons-update'; // ES6

let nummer = 0
// type globalState: {}
function Settings() {
    let [globalState, inSetState] = useContext(Context);
    // type numType: string | undefined
    console.log(globalState)
    const handleButtonApp = () => {
      nummer = nummer + 1
      const state1 = globalState;
      const state2 = update(state1, {'num':  {$set: nummer}});
      // inSetState({...globalState, 'num': nummer})
      inSetState(state2)
    }
    const handleButtonApp2 = () => {
      nummer = nummer + 1
      const state1 = globalState;
      const state2 = update(state1, {'test':  {$set: nummer}});
      // inSetState({...globalState, 'num': nummer})
      inSetState(state2)
    }
    console.log('settings')
  return (
    <div>
      SETTINGS
      <div className="App">
        <Button onClick={handleButtonApp} type="primary">Button Home + 1</Button>
      </div >
      <div className="App2" style={{padding: 10}}>
        <Button type="primary" onClick={handleButtonApp2}>Button Lib</Button>
      </div>
    </div>
  )
}

Settings.propTypes = {

}

export default Settings

