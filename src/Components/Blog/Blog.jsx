import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
const Blog = ({ category }) => {
    const {strCategory, strCategoryThumb, strCategoryDescription } = category
    return (
        <div className='card shadow-lg border-2 m-2 p-6 space-y-4 w-80 h-96'>
            <div className='bg-[#9cd9d8] flex justify-center items-center rounded-lg'>
                <img src={strCategoryThumb} alt="" className='w-40 h-36 ' />
            </div>
            <h4 className='text-2xl font-bold'>{strCategory}</h4>
            <p>{strCategoryDescription.slice(0, 50)}....</p>
            <NavLink to={`/blog/${strCategory}`}><button className='btn bg-[#9cd9d8]'>See details</button></NavLink>
        </div>
    );
};

Blog.propTypes = {
    category: PropTypes.object
};
export default Blog;