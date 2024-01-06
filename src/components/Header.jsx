import React, { useEffect, useState } from "react";
import Logo from "../assets/yt-logo.png";

import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useUserContext } from "../context/AddUserContext";
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Header = () => {
  const [searchVal, setSearchVal] = useState("");
  let [resData, setResData] = useState([]);
  let { user } = useUserContext();
  let [suggValues, setSuggValues] = useState(false);
  function handleSignOut() {
    // const auth = getAuth();
    signOut(auth)
      .then(() => {
        // user = null;
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  }

  async function ResVideoList() {
    let res = await useFetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=30&regionCode=IN&key=AIzaSyA5vUeSVcdo_thfktW3sl1pilgCO1KE8R0"
    );
    setResData(res.items);
  }

  // async function fetchData() {
  //   let data = await fetch(
  //     `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchVal}&key=AIzaSyA5vUeSVcdo_thfktW3sl1pilgCO1KE8R0`
  //   );
  //   let res = await data.json();
  //   setResData(res.items);
  // }

  useEffect(() => {
    // console.log(resData);
    let a = setTimeout(() => {
      if (searchVal.length >= 1) {
        // fetchData();
        ResVideoList();
      }
    }, 300);

    return () => {
      clearTimeout(a);
    };
  }, [searchVal]);
  console.log(resData);

  function searchHandler(e) {
    setSearchVal(e.target.value);
    setSuggValues(true);
  }

  return (
    <div className=" p-5 flex justify-between items-center">
      <div>
        <img src={Logo} width="100" height="100" alt="" />
      </div>
      <div className="flex">
        <input
          className="border border-gray-400 rounded-l-full w-[28.5rem] h-8 "
          type="text"
          name="Search"
          id=""
          value={searchVal}
          onChange={searchHandler}
          onFocus={() => {
            setSuggValues(true);
          }}
          onBlur={() => {
            setSuggValues(false);
          }}
        />
        <div className="border border-gray-400  h-8 w-[3rem] rounded-r-full"></div>
      </div>
      <div>{/* {map=>{}} */}</div>
      <div>
        {user && (
          <>
            <button onClick={handleSignOut} className=" bg-red-500 w-28 h-12">
              Sign Out
            </button>
            <div>
              {suggValues && (
                <div>
                  {resData.map((e) => (
                    <Link key={e.id} to={`watch?v=${e.id}`}>
                      <div>{e.snippet.title}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
