import { useLoaderData, useNavigate } from "react-router-dom";
import Meals from './Meals'

const MealDetails = () => {
    const meals = useLoaderData();
    const navigate = useNavigate();

    const handleBackButton = () => {
        navigate(-1)
    }
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-center justify-items-center items-center">
                {
                    meals.meals.map(meal => <Meals key={meal.idMeal} meal={meal}></Meals>)
                }
            </div>
            <div className="flex justify-center p-4">
            <button onClick={handleBackButton} className="btn bg-[#9cd9d8]">Go back</button>
            </div>
        </div>
    );
};

export default MealDetails;