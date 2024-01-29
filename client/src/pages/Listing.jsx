import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css/bundle";
import { IoLocation } from "react-icons/io5";
import { FaBed } from "react-icons/fa6";
import { FaBath } from "react-icons/fa6";
import { FaParking } from "react-icons/fa";
import { MdChair } from "react-icons/md";
import { useSelector } from "react-redux";
import Contac from "../components/Contac";

export default function Listing() {
  SwiperCore.use([Navigation]);
  const params = useParams();
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { currentUser } = useSelector((state) => state.user);
  const [contac, setContac] = useState(false);

  useEffect(() => {
    const fetchListing = async () => {
      try {
        setListing(true);
        const res = await fetch(`/api/listing/get/${params.listingId}`);
        const data = await res.json();
        if (data.success === false) {
          setError(true);
          setLoading(false);
          return;
        }
        setListing(data);
        setLoading(false);
        setError(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };

    fetchListing();
  }, [params.listingId]);

  return (
    <main>
      {loading && <p className="text-center my-7 text-2xl">Loading....</p>}
      {error && (
        <p className="text-center my-7 text-2xl">Something went wrong!</p>
      )}

      {listing && !loading && !error && (
        <div>
          <Swiper navigation>
            {listing.imageUrls.map((url) => (
              <SwiperSlide key={url}>
                <div
                  className="h-[550px]"
                  style={{
                    background: `url(${url}) center no-repeat`,
                    backgroundSize: "cover",
                  }}
                ></div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="max-w-[650px] mx-auto mt-7 m-7 gap-8">
            <h1 className="text-2xl font-semibold my-3 ">
              {listing.name} - ${listing.regularPrice} Per Month
            </h1>

            <div className="flex items-center">
              <IoLocation className="fill-green-700" />
              <p>{listing.address}</p>
            </div>
            <div className="flex mt-5 gap-8">
              <p className="text-white uppercase bg-red-700  text-lg p-3 text-center max-w-[200px] rounded-lg w-full">
                {listing.type === "rent" ? "For Rent" : "For sale"}
              </p>
              {listing.offer && (
                <p className="text-white   uppercase bg-green-700  text-lg p-3 text-center max-w-[200px] rounded-lg w-full">
                  $ {+listing.regularPrice - listing.discountPrice} off
                </p>
              )}
            </div>
            <div className="mt-4 text-sm">
              <p>
                <span className="font-semibold text-black">
                  Description - {"  "}
                </span>
                {listing.description}
              </p>
            </div>
            <ul className="mt-6 flex gap-6 text-green-900 font-semibold text-base flex-wrap">
              <li className="flex items-center gap-1 whitespace-nowrap  ">
                <FaBed className="text-lg" />
                {listing.bedroom > 1
                  ? `${listing.bedroom} Beds `
                  : ` ${listing.bedroom} Bed`}
              </li>
              <li className="flex items-center gap-1 whitespace-nowrap  ">
                <FaBath className="text-lg" />
                {listing.bedroom > 1
                  ? `${listing.bathroom}  Bathrooms `
                  : ` ${listing.bathroom} Bathroom`}
              </li>
              <li className="flex items-center gap-1 whitespace-nowrap  ">
                <FaParking className="text-lg" />
                {listing.bedroom ? "Parking Spot" : "No Parking "}
              </li>
              <li className="flex items-center gap-1 whitespace-nowrap  ">
                <MdChair className="text-lg" />
                {listing.furnished ? "Furnished" : "No Furnished "}
              </li>
            </ul>
            {currentUser && listing.useRef !== currentUser._id && !contac && (
              <button onClick={()=>setContac(true)} className="bg-slate-700 text-white rounded-md uppercase hover:opacity-90 w-full p-3 mt-3">
                Contact landload
              </button>
            )}
            {contac && <Contac listing={listing}/>}
          </div>
        </div>
      )}
    </main>
  );
}
