// create a provider
import Context from "Context";
import Component1 from "./Context"

export default function App () {
    const authenticatedUser = "venkat";
    return<Context.Provider value = {authenticatedUser}>
        <h1>App Component</h1>
        <Component1 />
    </Context.Provider>
}