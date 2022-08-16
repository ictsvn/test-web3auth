import { ReactComponent as LoadingIcon } from "./loading-icon.svg";
const Button = ({ loading = false, label, onAction }) => {
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
      {label}
    </button>
  );
};

export default Button;
