import {Menu} from "./@core/components/Menu";
import { ProductPresentation } from "./views/Product/ProductPresentation";
import { ProductContextWrapper } from "@core/contexts/ProductContext";

function App() {
    return (
        <ProductContextWrapper>
            <div className={"md:w-[80%] md:mx-auto"}>
                <Menu />
                <ProductPresentation />
            </div>
        </ProductContextWrapper>
    )
}

export default App;