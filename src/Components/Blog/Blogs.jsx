import { useLoaderData } from "react-router-dom";
import Blog from "./Blog";

const Blogs = () => {
    const mealBlogs = useLoaderData();
    console.log(mealBlogs.categories.length)
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  justify-center items-center justify-items-center gap-6 py-4 lg:py-12 px-8 lg:px-12">
        {
            mealBlogs.categories.map(category => <Blog key ={category.idCategory} category ={ category}></Blog>)
        }
        </div>
    );
};

export default Blogs;