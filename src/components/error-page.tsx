import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <>
      <h3>Oops! Page not found</h3>
      <i>{error.statusText || error.messge}</i>
    </>
  );
};

export default ErrorPage;
