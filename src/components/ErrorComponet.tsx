import { isRouteErrorResponse, useRouteError } from 'react-router-dom'

const ErrorComponent = () => {
  const error = useRouteError();
  let errorMessage: string;

  if (isRouteErrorResponse(error)) {
    errorMessage = error.data?.message || error.statusText;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === 'string') {
    errorMessage = error;
  } else {
    console.error(error);
    errorMessage = 'Unknown error';
  }

  return (
    <div>
      <h1>Error: {errorMessage} </h1>
    </div>
  )
}

export default ErrorComponent
