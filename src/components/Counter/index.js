import { useDispatch } from "react-redux";
import { addValue, subValue } from "../../store/modules/counter/actions";
import { Button } from "../styled";

const Counter = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Button onClick={() => dispatch(addValue(1))}>Adicionar</Button>
      <Button onClick={() => dispatch(subValue(1))}>Remover</Button>
    </>
  );
};

export default Counter;
