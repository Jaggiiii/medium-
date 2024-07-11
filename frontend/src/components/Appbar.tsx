import { Avatar } from "../pages/blogcard"
import { Link } from "react-router-dom"
export const Appbar=()=>{
  return <div className="border-b flex justify-between px-10 py-4 border-blue-300">
      <div className="cursor-pointer hover:underline hover:text-blue-600"> 
       <Link to ={'/blogs'}>
           Medium 
       </Link> 
        </div>
      <div>
        <Link to={'/publish'}>
      <button type="button" className=" mr-4 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Publish</button>
      </Link>
         <Avatar name={"jagadeesh"}/></div>
  </div>
}