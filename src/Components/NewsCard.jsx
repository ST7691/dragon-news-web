import { FaBookmark, FaShareAlt, FaEye, FaStar } from "react-icons/fa";
import { format } from "date-fns";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const {
    id,
    title,
    image_url,
    details,
    total_view,
    rating,
    author,
    others,
  } = news;

  return (
    <div className="card bg-base-100 shadow-md mb-6">

      {/* Header */}
      <div className="flex items-center justify-between bg-base-200 px-4 py-3 rounded-t-lg">
        <div className="flex items-center gap-3">
          <img
            src={author?.img}
            alt={author?.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h4 className="font-semibold text-sm">{author?.name}</h4>
            <p className="text-xs text-gray-500">
              {author?.published_date
                ? format(new Date(author.published_date), "yyyy-MM-dd")
                : ""}
            </p>
          </div>
        </div>

        <div className="flex gap-3 text-lg text-gray-500">
          <FaBookmark className="cursor-pointer hover:text-primary" />
          <FaShareAlt className="cursor-pointer hover:text-primary" />
        </div>
      </div>

      {/* Body */}
      <div className="card-body p-4">
        <h2 className="card-title text-lg font-bold">{title}</h2>

        <figure className="mt-3">
          <img
            src={image_url}
            alt={title}
            className="rounded-md w-full"
          />
        </figure>

        <p className="text-sm text-gray-600 mt-3">
          {details.length > 220
            ? details.slice(0, 220) + "..."
            : details}
          <Link to={`/news-details/${id}`} className="text-primary font-semibold cursor-pointer">
            {" "}Read More
          </Link>
        </p>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-4 pb-4 text-sm">
        <div className="flex items-center gap-1 text-orange-500">
          <FaStar />
          {rating?.number}
          {others?.is_trending && (
            <span className="badge badge-warning badge-sm ml-2">
              Trending
            </span>
          )}
        </div>

        <div className="flex items-center gap-1 text-gray-500">
          <FaEye />
          {total_view}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
