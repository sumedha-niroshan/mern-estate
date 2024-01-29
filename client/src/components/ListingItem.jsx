import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";

export default function ListingItem({ listings }) {
  return (
    <div className="bg-white transition-shadow hover:shadow-lg shadow-md overflow-hidden rounded-lg w-full sm:w-[330px]">
      <Link to={`/listing/${listings._id}`}>
        <img
          src={listings.imageUrls[0]}
          alt="	listing cover"
          className="h-[320px] sm:[220px] w-full object-cover hover:scale-105 "
        />
        <div className="p-3 flex flex-col gap-2">
          <p className="truncate text-lg font-semibold ">{listings.name}</p>
          <div className="flex items-center gap-1 w-full">
            <MdLocationOn className="w-4 h-4 text-green-700" />
            <p className="text-sm text-gray-600 truncate w-full">
              {listings.address}
            </p>
          </div>
          <p className="text-sm text-gray-600  line-clamp-2">
            {listings.description}
          </p>
          <p className="text-slate-500 mt-2 font-semibold items-center">
            {" "}
            $ {listings.offer
              ? listings.discountPrice
              : listings.regularPrice}{" "}
            {listings.type === "rent" && "/ month"}
          </p>
          <div className="text-slate-700 flex gap-5" >
            <div className="font-bold text-base">
              {listings.bedroom > 1
                ? `${listings.bedroom} beds`
                : `${listings.bedroom} bed`}
            </div>
            <div className="font-bold text-base">
              {listings.bathroom > 1
                ? `${listings.bathroom} baths`
                : `${listings.bathroom} bath`}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
