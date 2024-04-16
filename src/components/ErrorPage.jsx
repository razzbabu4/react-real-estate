import { Helmet } from "react-helmet-async";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="flex flex-col gap-10 justify-center items-center min-h-screen">
            <Helmet>
                <title>Real Estate | Error</title>
            </Helmet>
            <h1 className="text-7xl">Error</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <Link to='/' className="border p-4 rounded-lg bg-green-200">Go Back to Home</Link>
        </div>
    );
}

export default ErrorPage