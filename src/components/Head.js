import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
import { cacheResults } from "../utils/searchSlice";


const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowsuggestions] = useState(false);


  console.log("hello" , suggestions)

  const searchCache = useSelector((store)=> store.search)
  const dispatch = useDispatch()

  useEffect(() => {
    const timer = setTimeout(() =>{ 
      if(searchCache[searchQuery]){
        setSuggestions(searchCache[searchQuery])
      }else{
        getSearchSuggestion()
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const getSearchSuggestion = async () => {
    
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    //console.log(json[1]);
    setSuggestions(json[1]);
    

  
    // update cache
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };


  return (
    <div className="grid grid-flow-col shadow-lg p-2 m-2 ">
      <div className="flex col-span-1 ">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          alt="Menu"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0OBQgMAAWlpKQpJSaenZ309PUAAAAIAAD8/Pz5+fna2tqop6dvbW1oZmevrq4tKivFxMQYExRiYGC+vr7Dc4WrAAABB0lEQVR4nO3cS3LCMBAFQGIIIBPbhN/9jxqSyiIsTUnlydB9g1eSNV5MvdUKAAAAAAAAAAAAAAAAXtEwvscwDk3yHabSb2Loy/TRIOHUv8XRH+sHHMrSqR6U+hd1jHSE90P8lHC2/Lc0/0vzMy3WMdynxaFBwu+Jv4uh0cQHAAAAAAAAAIB59jG0ijdcT9sYTtcmK0PncumiuJRz/YD7bbf0ut4f3br+GvQt2PblrXrC3WbpUA/6sXrC/GeY/zvM/5aGmofHZiu0S//M/GoVDwAAAAAAAAAAZsjeuRerN1HL7hPy95fm76DNnzD/Lc3/0rxAJ3v+Xn0AAAAAAAAAAAAAAAD4T74AYhs1O+vt3ioAAAAASUVORK5CYII="
        />
        <a href="/">
          <img
            alt="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
            className="h-8 mx-4  "
          />
        </a>
      </div>
      <div className="col-span-10 px-10">
        <div>
          <input
            type="text"
            className="px-5 w-1/2 border border-gray-400 p-2 rounded-l-full  border-gray-400 "
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={()=> setShowsuggestions(true)}
            onBlur={()=> setShowsuggestions(false)}
          />
          <button className="border border-gray-400 py-2 px-5 rounded-r-full bg-gray-100">
            🔍
          </button>
        </div>
        {showSuggestions && (
          <div className="absolute bg-white py-2 px-2 w-[37rem] shadow-lg rounded-lg border border-gray-100">
            <ul>
              {suggestions.map((s) => {
                return (
                  <li
                    key={s}
                    className=" py-2 px-3  shadow-sm hover:bg-gray-200 cursor-pointer"
                    onClick={() => {
                      setSearchQuery(s);
                      setShowsuggestions(false);
                    }}
                  >
                    🔍{s}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          alt="user"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
  );
};

export default Head;
