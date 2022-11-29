import * as React from "react";
import "./App.scss";
import { useState, useEffect } from "react";
import { RouterContainer } from "./parts/Router/RouterContainer";

function App() {
    const [height, setHeight] = useState(0);
    const [searchableText, setSearchableText] = useState();

    useEffect(() => {
        setHeight(window.innerHeight);
    }, []);

    const onSearch = (text) => {
        setSearchableText(text);
    };

    return (
        <div
            className='App'
            style={{
                height: height,
            }}
        >
            <RouterContainer
                searchableText={searchableText}
                onSearch={onSearch}
            />
        </div>
    );
}

export default App;
