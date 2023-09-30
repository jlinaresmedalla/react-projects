/* import useCounter from "../hooks/useCounter"; */
import Panel from "../components/Panel";
import Button from "../components/Button";
import { useReducer } from "react";
/* import { useState } from "react"; */

const INCREMENT_COUNT = "increment";
const DECREMENT_COUNT = "decrement";
const SET_VALUE_TO_ADD = "change_value_to_add";
const ADD_VALUE = "add-value";

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT_COUNT:
      return {
        ...state,
        count: state.count - 1,
      };
    case SET_VALUE_TO_ADD:
      return {
        ...state,
        valueToAdd: action.payload,
      };
    case ADD_VALUE:
      return {
        ...state,
        count: state.count + state.valueToAdd,
        valueToAdd: 0,
      };
    default:
      return state;
  }
};

function CounterPage({ initialCount }) {
  /*     const { count , increment} = useCounter(initialCount); */
  /*     const [count,setCount] = useState(initialCount);
    const [valueToAdd, setValueToAdd] = useState(0); */
  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0,
  });

  const increment = () => {
    /*         setCount(count+1); */
    dispatch({
      type: INCREMENT_COUNT,
    });
  };
  const decrement = () => {
    /*         setCount(count-1); */
    dispatch({
      type: DECREMENT_COUNT,
    });
  };
  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;
    /*         setValueToAdd(value); */
    dispatch({
      type: SET_VALUE_TO_ADD,
      payload: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    /*         setCount(count + valueToAdd);
        setValueToAdd(0); */
    dispatch({
      type: ADD_VALUE,
    });
  };

  return (
    <Panel className="m-3">
      <h1 className="text-lg">Current count is {state.count}</h1>
      <div className="flex flex-row">
        <Button onClick={increment} secondary>
          Increment
        </Button>
        <Button onClick={decrement} secondary>
          Decrement
        </Button>
      </div>
      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input
          value={state.valueToAdd || ""}
          onChange={handleChange}
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
        />
        <Button primary>Add it!</Button>
      </form>
    </Panel>
  );
}

export default CounterPage;
