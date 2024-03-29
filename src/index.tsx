import {BrowserRouter} from "react-router-dom";
import {createRoot} from "react-dom/client";
import {ThemeProvider} from "app/providers/ThemeProvider";
import App from "app/App";


const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <BrowserRouter>

        <ThemeProvider>
            <App/>
        </ThemeProvider>
    </BrowserRouter>
);