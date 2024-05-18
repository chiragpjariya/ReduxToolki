import { Provider } from "react-redux"
import { store } from "./storage/store"
import InsetData from "./component/InsetData"
function App() {
 

  return (
    <>
      <Provider store={store}>
        <InsetData/>
      </Provider>
    </>
  )
}

export default App
