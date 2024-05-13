import { useRouteError } from "react-router-dom";

const Error = () => {
    const routeError = useRouteError();
    console.log(routeError)
    return (
        <div>
            <h1>{routeError.status}</h1>
            <h2>{routeError.statusText}</h2>
        </div>
    );
}

export default Error;