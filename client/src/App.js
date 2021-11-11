import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import StoreService from "./services/StoreService";

const store = StoreService.setup();

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div className="container">
                    test
                </div>
            </BrowserRouter>
        </Provider>
    );
};

export default App;