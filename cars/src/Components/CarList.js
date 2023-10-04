import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { removeCar } from "../store";

function CarList () {
    const dispatch = useDispatch();
    const {cars , name} = useSelector(({form, cars: { data , searchTerm }}) => {
        const filteresCars = data.filter((car)=>car.name.toLowerCase().includes(searchTerm.toLowerCase()));
    
        return {
            cars: filteresCars,
            name: form.name
        }
    });

    const handleCarDelete = (car) => {
        dispatch(removeCar(car.id));
    }

    const renderedCars = cars.map((car)=>{
        const bold = name && car.name.toLowerCase().includes(name.toLowerCase());

        return (<div key={car.id} className={`panel ${bold && 'bold'}`}>
            <p>{car.name} - ${car.cost}</p>
            <button className="button is-danger" onClick={()=>handleCarDelete(car)}>
                Delete
            </button>
        </div>);
    })
    
    return (
        <div>
            <div className="car-list">
                {renderedCars}
                <hr />
            </div>
        </div>
    )


}

export default CarList;