import {Menu} from "./@core/components/Menu";
import { ProductPresentation } from "./views/Product/ProductPresentation";
import { ProductContextWrapper } from "@core/contexts/ProductContext";

function App() {
    return (
        <ProductContextWrapper>
            <div className={"md:w-[1440px] md:mx-auto"}>
                <Menu />
                <ProductPresentation />
            </div>
        </ProductContextWrapper>
    )
}

export default App;