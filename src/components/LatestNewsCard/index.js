import { Link } from "react-router-dom";

export function LatestNewsCard({ data }) {
  return (
    <Link
      to="/detailedNews"
      className="relative h-full w-full filter sepia-100 group"
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%), url(${data.image})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div className="flex flex-col justify-end h-full p-5 text-white text-lg border border-text rounded-md transition-transform transform-gpu group-hover:filter-brightness-130">
        <p>{data.title}</p>
      </div>
    </Link>
  );
}