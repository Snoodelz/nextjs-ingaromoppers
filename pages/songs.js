import Image from "next/image";
import React from "react";
import Navbar from "../components/navbar";
import logo from "../img/moppersLogga.png";
import { createClient } from "next-sanity";
import { PortableText } from "@portabletext/react";

export default function Songs({ songs }) {
  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-md">
        <Image alt="Logo" src={logo} />
        <h1 className="text-center">OFFICIELLA SÅNGBOK</h1>
      </div>
      {songs.length > 0 && (
        <ul>
          {songs.map((song, index) => (
            <div
              key={song._id}
              tabIndex={song._id}
              className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box m-4 max-w-lg mx-auto"
            >
              <input type="checkbox" />

              <div className="collapse-title text-xl font-medium">
                {index + 1}. {song.title}
              </div>
              <div className="collapse-content">
                <em>Melodi: {song.melody}</em>
                <br />
                <br />
                <PortableText value={song.fancySongText} />
              </div>
            </div>
          ))}
        </ul>
      )}
    </>
  );
}

const client = createClient({
  projectId: "jbu3m9u0",
  dataset: "production",
  apiVersion: "2022-07-16",
  useCdn: false,
});

export async function getStaticProps() {
  const songs = await client.fetch(`*[_type == "song"]`);

  return {
    props: {
      songs,
    },
    revalidate: 10,
  };
}
