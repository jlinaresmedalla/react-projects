import useCounter from "../hooks/useCounter";
import Button from "../components/Button";

function CounterPage({initialCount}){
    const { count , increment} = useCounter(initialCount);

    return (
        <div>
            <h1>Current count is {count}</h1>
            <Button onClick={increment} secondary>
                Increment
            </Button>
        </div>
    )
}

export default CounterPage;