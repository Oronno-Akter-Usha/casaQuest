import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex flex-col justify-center items-center text-center h-screen">
      {/* <h2 className="font-bold text-3xl mb-3 text-[#260273]">Oops!</h2> */}
      {error.status === 404 && (
        <div className="mt-10">
          <img
            className="md:h-[400px]"
            src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg?size=626&ext=jpg&uid=R144923444&ga=GA1.2.1361538331.1710675042&semt=sph"
            alt=""
          />
          <Link to={"/"}>
            <p className="text-xl mb-3 text-[#6b1cff]">Go Back Home</p>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ErrorPage;
