import { BrowserRouter } from "react-router-dom"
import { MainComponent } from "./Components/MainComponent"
export const App = () => {
  return (
    <>
    <BrowserRouter>
      <MainComponent />
    </BrowserRouter>
    </>
  )
}