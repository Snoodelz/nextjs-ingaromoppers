import React from "react";
import { getAllSongs } from "../pages/api/api";

export async function getStaticProps({ preview = false }) {
  let allSongs = (await getAllSongs(preview)) ?? [];

  return {
    props: { preview, allSongs },
  };
}

export default function Song({ allSongs }) {
  return (
    <div>
      {allSongs.map((song) => (
        <div
          key={song.sys.id}
          tabIndex={song.sys.id}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box m-4 max-w-lg mx-auto"
        >
          <input type="checkbox" />

          <div className="collapse-title text-xl font-medium">{song.title}</div>
          <div className="collapse-content">
            <em>{song.melody}</em>
            <br />
            <br />
            <p>{song.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
