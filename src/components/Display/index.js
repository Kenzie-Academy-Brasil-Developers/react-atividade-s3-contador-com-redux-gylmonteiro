import { useSelector } from "react-redux";

const Display = () => {
  const result = useSelector((state) => state.result);

  return (
    <div>
      <h1>{result}</h1>
    </div>
  );
};

export default Display;
