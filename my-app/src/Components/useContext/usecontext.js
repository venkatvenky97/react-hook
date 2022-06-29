
// useContext hook implement to consumer

import React, { useContext } from "react";
import { Context } from "./App";

export default function Component3 () {
    const authUserName = useContext(Context);
    return (
        <div>
            <h2>Authenticated userName {authUserName}</h2>
        </div>
    )
}