import { ReactComponent as CopyIcon } from "./copy-icon.svg";

const Title = (props) => <div className="title">{props.label}</div>;

const Row = (props) => (
  <div className={`row ${props.className || ""}`}>{props.children}</div>
);

const FormText = (props) => {
  const { value, titleText, onCopy } = props;

  const copyValue = () => {
    onCopy(value)
  }
  
  return (
    <Row className="header grid grid-cols-3 gap-4">
      <Title label={titleText} />
      <div className="col-span-4 sm:col-span-2 boxAddress">
        <span className="addressValue">{value}</span>
        <div>
          <CopyIcon onClick={copyValue} />
        </div>
      </div>
    </Row>
  );
};

export default FormText;
