import { Link } from "react-router-dom";

export default function Header({
  heading,
  paragraph,
  linkName,
  linkUrl="#"
}){
  return (
    <div className="mb-10">
      <div className="flex justify-center">
        <img 
          alt=""
          className="h-14 w-14"
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
        />
      </div>
      <h2 className="mt-6 text-center text-3xl font-bold tracking-tight">
        {heading}
      </h2>
      <p className="mt-2 text-center text-sm text-gray-500">
        {paragraph} { ' ' }
        <Link to={linkUrl} className="font-medium text-indigo-600 hover:text-indigo-500">
          {linkName}
        </Link>
      </p>
    </div>
  )
}