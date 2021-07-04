import React, {useContext} from 'react'
import { Context } from '../Store';



function Home(props: any) {
  let [globalState]: any = useContext(Context);
  const { num } = globalState
  console.log('home')
  return (
    <div>
      HOME {num !== undefined ? num : 'null'}
    </div>
  )
}

Home.propTypes = {

}

export default Home

