import * as React from "react";
import "./App.scss";
import { useState, useEffect } from "react";
import { RouterContainer } from "./parts/Router/RouterContainer";

function App() {
    const [height, setHeight] = useState(0);

    useEffect(() => {
        setHeight(window.innerHeight);
    }, []);

    return (
        <div
            className='App'
            style={{
                height: height,
            }}
        >
            <RouterContainer />
        </div>
    );
}

export default App;
