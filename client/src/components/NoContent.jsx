import { NoContentSVG } from "../svg";

const NoContent = () => {
  return (
    <>
      <img src={NoContentSVG} />
      <p className="px-6 text-gray-400 text-lg">
        You have not made any transactions.
        <br />
        Please make new transactions.
      </p>
    </>
  );
};

export default NoContent;
