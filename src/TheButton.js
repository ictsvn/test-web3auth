import { ReactComponent as LoadingIcon } from "./loading-icon.svg";
const TheLoading = ({ loading = false, mainName, subName, onAction }) => {
  return (
    <button
      className="buttonForm flex items-center justify-center"
      disabled={loading}
      type="button"
      onClick={onAction}
    >
      {loading ? (
        <div className="mr-1 flex items-center">
          <LoadingIcon />
        </div>
      ) : null}
      {loading ? subName : mainName}
    </button>
  );
};

export default TheLoading;
