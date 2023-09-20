import PropTypes from 'prop-types'
const Meals = ({ meal }) => {
    const { strMeal, strMealThumb } = meal;
    return (
        <div>
            <div className='card shadow-lg border-2 m-2 p-6 space-y-4 w-60 h-60'>
                <div className='bg-[#9cd9d8] flex justify-center items-center rounded-lg'>
                    <img src={strMealThumb} alt="" className='w-24 h-24 p-2 rounded-lg' />
                </div>
                <h4 className='font-bold p-4'>{strMeal}</h4>
            </div>
        </div>
    );
};

Meals.propTypes = {
    meal:PropTypes.object
}
export default Meals;