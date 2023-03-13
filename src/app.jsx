import './app.css'
import { Path } from '../../Path'

export function App() {

  return (
    <>
      <Path as="/local/$country" absolute>
        <div>choose a pão de forma</div>

      </Path>
      <Path as="/local/$country/panel" absolute>
        <h2>panel</h2>
        <h2>option1</h2>
        <h2>option2</h2>
      </Path>
    </>
  )
}
