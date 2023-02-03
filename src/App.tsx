import {Menu} from "./@core/components/Menu";
import { ProductPresentation } from "./views/Product/ProductPresentation";
import { ProductContextWrapper } from "@core/contexts/ProductContext";

function App() {
    return (
        <ProductContextWrapper>
            <Menu />
            <ProductPresentation />
        </ProductContextWrapper>
    )
}

export default App;