import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import{Link} from 'react-router-dom'

export default function Contac({ listing }) {
  const [landload, setLandload] = useState(null);
  const [message, setMessage] = useState();

  const onChange = (e) => {
    setMessage(e.target.value);
  };

  useEffect(() => {
    const fetchLandload = async () => {
      try {
        const res = await fetch(`/api/user/${listing.useRef}`);
        const data = await res.json();
        setLandload(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchLandload();
  }, [listing.useRef]);
  return (
    <div>
      {landload && (
        <div  className="flex flex-col gap-2 mt-3">
        <p>
          Contac <span className="font-semibold">{landload.username}</span> for{" "}
          <span className="font-semibold">{listing.name}</span>
        </p>
        <textarea
        name="message"
        id="message"
        rows="2"
        value={message}
        onChange={onChange}
        placeholder="Enter your message here..."
        className="w-full border p-3 rounded-lg"
      />
      <Link
      to={`mailto:${landload.email}?subject=Regarding ${listing.name}&body=${message}`}
      className='bg-slate-700 text-white text-center p-3 uppercase rounded-lg hover:opacity-95'
      >
      Send Message
      </Link>
      </div>
      )}
      


    </div>
  );
}
