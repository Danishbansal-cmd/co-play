"use client";
import { Footer } from "../UiComponents/footer";
import Header from "../UiComponents/header";
import { IoArrowBackOutline } from "react-icons/io5";
import Link from "next/link";
import { MdOutlineModeEdit } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { useState } from "react";


const initialData = [
  { id: 1, name: "Valorant", genre: "Battle royle", lastPlayed: "2 days ago" },
  { id: 2, name: "PUBG PC", genre: "Multiplayer", lastPlayed: "1 week ago" },
  { id: 3, name: "Chess", genre: "2 player", lastPlayed: "1 hour ago" },
  { id: 4, name: "8 ball pool", genre: "Multiplayer", lastPlayed: "20 hour ago" },
  { id: 5, name: "Clash of Clans", genre: "Single player", lastPlayed: "1 year ago" },
];

const ProfilePage = () => {

    const profileData = [
        {value: 34, context: "Lobbies Created"},
        {value: 12, context: "Games Played"},
    ];

      const [search, setSearch] = useState("");
  const [data, setData] = useState(initialData);

  const filteredData = data.filter(
    (row) =>
      row.name.toLowerCase().includes(search.toLowerCase()) ||
      row.genre.toLowerCase().includes(search.toLowerCase())
  );

  const removeRow = (id) => setData(data.filter((row) => row.id !== id));
    return (
        <>
            <Header />

            {/* the body section goes here */}
            <section className='flex flex-col justify-center items-center'>
                <div className='max-w-220 w-full flex flex-col items-start justify-center px-5 gap-8'>
                    <div></div>

                    <Link 
                        href=""
                        className='font-bold'>
                        <div className='border hover:bg-white hover:text-black border-white bg-transparent py-3 px-6 rounded-md flex justify-start items-center gap-5 cursor-pointer
                            active:scale-90 duration-100'>
                            <IoArrowBackOutline className="text-2xl" /> Back
                        </div>
                    </Link>

                    <div className='w-full flex flex-col items-start justify-center gap-4'>
                        <div className="relative w-full bg-black-shade-1 rounded-md">
                            <div className="h-72 w-full relative">
                                <div className="bg-cover bg-center bg-no-repeat w-full h-full rounded-t-md" style={{backgroundImage: `url(/assets/images/sunset-profile-background.avif)`}}></div>
                                <div className="absolute top-4 right-4 h-12 w-12 rounded-full flex items-center justify-center bg-black-shade-1
                                hover:bg-white hover:text-black active:scale-90 duration-100">
                                    <MdOutlineModeEdit className="text-2xl" />
                                </div>
                            </div>
                            <div className="flex flex-col justify-center items-center -mt-20 pb-5">
                                <div className="relative group h-40 w-40 rounded-full bg-white">
                                    <div className="w-full h-full rounded-full bg-center bg-no-repeat bg-contain"
                                    style={{backgroundImage: `url(/assets/images/danish.jpg)`}}></div>
                                    <div className="absolute top-0 left-0 w-full h-full rounded-full bg-[#00000085] group-hover:opacity-100 opacity-0
                                    flex flex-col items-center justify-center">
                                        <MdOutlineModeEdit className="text-5xl text-white" />
                                    </div>
                                </div>
                                <p className="text-3xl font-bold">Danish Bansal</p>
                                <p className="flex items-center" >
                                    Member Since Aug 23, 2025
                                    &nbsp;<GoDotFill />&nbsp;
                                    Bathinda, India
                                </p>
                            </div>
                        </div>

                        <div className="relative w-full grid grid-cols-2 gap-x-4">
                            {
                                profileData.map((item) => (
                                    <div className="bg-black-shade-1 rounded-md px-6 py-6 flex flex-col justify-center items-start">
                                        <p className="text-6xl font-bold text-white">{item.value}</p>
                                        <p>{item.context}</p>
                                    </div>
                                ))
                            }
                        </div>

                        <div className="relative w-full">
                            <div className="bg-black-shade-1 rounded-md p-6 flex flex-col items-start justify-center">
                                <p className="font-bold text-3xl">Favourite Games</p>

                                <div style={{ background: "#222", color: "#eee", minHeight: "100vh", padding: 30 }}>
      <input
        style={{
          fontSize: 22,
          padding: "12px 32px",
          borderRadius: 12,
          border: "2px solid #ccc",
          marginBottom: 20,
          width: 355,
          background: "#232323",
          color: "#eee"
        }}
        placeholder="Search Favourite Games"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <table style={{ width: "100%", background: "#222", borderRadius: 13, overflow: "hidden" }}>
        <thead style={{ background: "#232323" }}>
          <tr>
            <th style={{ padding: 10, textAlign: "left" }}> </th>
            <th style={{ padding: 10, textAlign: "left" }}>Index</th>
            <th style={{ padding: 10, textAlign: "left" }}>Name</th>
            <th style={{ padding: 10, textAlign: "left" }}>Genre</th>
            <th style={{ padding: 10, textAlign: "left" }}>Last Played</th>
            <th style={{ padding: 10, textAlign: "left" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row, idx) => (
            <tr key={row.id} style={{ borderTop: "1px solid #333" }}>
              <td style={{ padding: 10 }}>
                <input type="checkbox" />
              </td>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.genre}</td>
              <td>{row.lastPlayed}</td>
              <td>
                <button
                  style={{
                    background: "none",
                    border: "none",
                    color: "#fff",
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                  onClick={() => removeRow(row.id)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default ProfilePage;