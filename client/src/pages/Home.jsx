import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css/bundle";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import ListingItem from "../components/ListingItem";

const Home = () => {
  const [offerListing, setOfferListing] = useState([]);
  const [saleListing, setSaleListing] = useState([]);
  const [rentListing, setRentListing] = useState([]);
  SwiperCore.use([Navigation]);

  console.log(offerListing);

  useEffect(() => {
    const fetchOfferListing = async () => {
      try {
        const res = await fetch("/api/listing/get?offer=true&limit=4");
        const data = await res.json();
        setOfferListing(data);
        fetchRentListing();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchRentListing = async () => {
      try {
        const res = await fetch("/api/listing/get?type=rent&limit=4");
        const data = await res.json();
        setRentListing(data);
        fetchSaleListing();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSaleListing = async () => {
      try {
        const res = await fetch("/api/listing/get?type=sale&limit=4");
        const data = await res.json();
        setSaleListing(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchOfferListing();
  }, []);

  return (
    <div>
      {/* top */}
      <div className="flex flex-col gap-6 py-28 px-3 max-w-6xl mx-auto">
        <h1 className="text-slate-700 font-bold text-3xl lg:text-6xl ">
          Find you next <span className="text-slate-500">perfect</span> <br />
          place with ease
        </h1>
        <div className="text-gray-400 text-xs sm:text-sm">
          Ikman Estate is the best place to find your next perfect place to
          live. <br />
          We have a wide range of properties for you to choose from.
        </div>
        <Link
          to={"/search"}
          className="text-xs sm:text-sm text-blue-800 font-bold hover:underline"
        >
          Let's get stared...
        </Link>
      </div>

      {/* Swiper */}
      <Swiper navigation>
        {offerListing &&
          offerListing.length > 0 &&
          offerListing.map((listing) => (
            <SwiperSlide key={listing._id}>
              <div
                style={{
                  background: `url(${listing.imageUrls[0]})center no-repeat`,
                  backgroundSize: "cover",
                }}
                className="h-[500px]"
              ></div>
            </SwiperSlide>
          ))}
      </Swiper>

      {/* listing results for offer, sale and rent */}
      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10">
        {offerListing && offerListing.length > 0 && (
          <div>
            <div className="my-3">
              <h2 className="text-2xl font-semibold text-slate-600">
                Recent Offer
              </h2>
              <Link
                to={"/search?offer=true"}
                className="text-blue-800 text-sm hover:underline"
              >
                Show more offers
              </Link>
            </div>
            <div className="flex flex-wrap gap-4">
              {offerListing.map((listings) => (
                <ListingItem listings={listings} key={listings._id} />
              ))}
            </div>
          </div>
        )}

        {rentListing && rentListing.length > 0 && (
          <div>
            <div className="my-3">
              <h2 className="text-2xl font-semibold text-slate-600">
                Recent Places for rent
              </h2>
              <Link
                to={"/search?type=rent"}
                className="text-blue-800 text-sm hover:underline"
              >
                Show more places for rent
              </Link>
            </div>
            <div className="flex flex-wrap gap-4">
              {rentListing.map((listings) => (
                <ListingItem listings={listings} key={listings._id} />
              ))}
            </div>
          </div>
        )}

        {saleListing && saleListing.length > 0 && (
          <div>
            <div className="my-3">
              <h2 className="text-2xl font-semibold text-slate-600">
                Recent places for sale
              </h2>
              <Link
                to={"/search?offer=true"}
                className="text-blue-800 text-sm hover:underline"
              >
                Show more places for sale
              </Link>
            </div>
            <div className="flex flex-wrap gap-4">
              {saleListing.map((listings) => (
                <ListingItem listings={listings} key={listings._id} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
