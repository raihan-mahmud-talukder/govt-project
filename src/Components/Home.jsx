import { Cart } from "./Home/Cart"
import { Features } from "./Home/Features"
import { Info } from "./Home/Info"
import { Main } from "./Home/Main"

export const Home = () => {
    return (
        <main>
            <Main />
            <Features />
            <Info />
            <Cart />
        </main>
    )
}