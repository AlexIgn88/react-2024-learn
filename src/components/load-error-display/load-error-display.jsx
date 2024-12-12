import Loader from "../loader/loader.jsx";
import DownloadError from "../download-error/download-error.jsx";

//компонент LoadErrorDisplay показывает Loader, DownloadError либо контент страницы
const LoadErrorDisplay = ({
  data,
  isLoading,
  isFetching,
  isError,
  requestStatus,
  children,
}) => {
  //requestStatus для реализации через thunk
  //isLoading, isFetching, isError для реализации через RTK Query
  if (requestStatus === "pending" || isLoading || isFetching) {
    return (
      <main>
        <Loader />
      </main>
    );
  } else if (requestStatus === "rejected" || isError) {
    return (
      <main>
        <DownloadError />
      </main>
    );
  } else if (data) {
    return children;
  } else {
    return null;
  }
};

export default LoadErrorDisplay;
