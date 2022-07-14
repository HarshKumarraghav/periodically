import React, { useState } from "react";
import { SearchIcon, GlobeAltIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { GitHub, HistoryEdu, Explore } from "@mui/icons-material";
import { useRouter } from "next/router";
const Header = () => {
  const router = useRouter();
  const [searchInput, setSearchInput] = useState("");
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-primary p-5 shadow-light-card md:px-10 ">
      {/* left div */}
      <div
        onClick={() => router.push("/periodictable")}
        className="relative my-auto flex h-10 cursor-pointer sm:items-center sm:justify-start items-center"
      >
        <h2 className="font-head text-primary-color text-md md:text-2xl lg:text-4xl border-2 p-2 rounded-xl shadow-light-card">
        <span className="hidden md:inline">🧬</span>Periodically
        </h2>
      </div>
      {/*  middle div - search*/}
      <div className="hidden md:hidden lg:flex items-center rounded-xl py-2 text-sm text-primary-white placeholder-primary-white lg:border-2 lg:shadow-light-card">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          placeholder={"search your element..."}
          className=" flex-grow bg-transparent pl-5 outline-none text-primary-white"
        />
        <SearchIcon className="hidden h-8 cursor-pointer rounded-full bg-primary-color p-2 text-white md:mx-2 md:inline-flex" />
      </div>
      <div className="lg:hidden flex items-center justify-around bg-primary-color rounded-xl border-2 p-2 shadow-light-card">
        <button className="md:inline text-primary-white">Expore</button>
        <Explore className="h-6 cursor-pointer text-primary-white" />
      </div>
      {/* right div */}
      <div className="flex items-center justify-end space-x-4 text-gray-500 ">
        <div className="hidden md:hidden lg:flex items-center justify-around  bg-primary-color rounded-xl lg:border-2 lg:p-2  ml-4 shadow-light-card">
          <button className=" md:inline text-primary-white">Expore</button>
          <Explore className="h-6 cursor-pointer text-primary-white" />
        </div>
        <div className="flex items-center rounded-xl border-2 p-2 shadow-light-card">
          <HistoryEdu className="h-6 cursor-pointer text-primary-white" />
          <button className=" hidden md:inline text-primary-white">
            History
          </button>
        </div>
        <Link
          href={"https://github.com/HarshKumarraghav/periodically_servers"}
          target="_parent"
        >
          <div className=" flex items-center rounded-xl border-2 p-2 shadow-light-card">
            <GitHub className="h-6 cursor-pointer text-primary-white" />
            <p className="hidden md:inline md:text-primary-white">Api docs</p>
          </div>
        </Link>
      </div>
      {/* {searchInput && (
      <div className="col-span-3 mx-auto flex flex-col">
        <DateRangePicker
          ranges={[selectionRange]}
          minDate={new Date()}
          rangeColors={['#FD5B61']}
          onChange={handleSelect}
        />
        <div className="item-center mb-4 flex border-b">
          <h2 className="flex-grow text-2xl font-semibold">
            Number of Guests
          </h2>
          <UserIcon className="h-5" />
          <input
            value={noOfGuests}
            onChange={(e) => setNoofGuest(e.target.value)}
            type="number"
            min={1}
            className="w-12 pl-2 text-red-400 outline-none"
          />
        </div>
        <div className="flex">
          <button onClick={search} className="flex-grow text-red-400">
            Search
          </button>
          <button className="flex-grow text-gray-500" onClick={resetInput}>
            Cancel
          </button>
        </div>
      </div>
    )} */}
    </header>
  );
};

export default Header;
