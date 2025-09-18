import { useState } from "react";
import { songs, playlists, artists } from "./myMusic"

export default function Mysangeet() {

    const [selectedArtistId, setSelectedArtistId] = useState(1);

    const filterSongsByArtist = (artistId) => {
        return songs.filter(song => song.artistId === artistId);
    };

    const filteredSongs = filterSongsByArtist(selectedArtistId);



    const filterSongs = songs.filter(song => song.artistId === 3);
    console.log("filtered songs by artist", filterSongs);

    const shortSongs = songs.filter(song => song.duration <= 180);
    console.log(shortSongs)



//     const songsInPlaylist = songs.filter(song =>
//    filteredSongsByPlaylist?.songIds?.includes(song.id)
//  )
    // 5. Total play time of all songs in "My Favorites" playlist
    
//    const playList = playlists.find(playlist=>{
//       return playlist.name === "My Favorites"
//    })

//    const TotalDuration = playList.songIds.reduce((total,current)=>{
//         const song = songs.find((song)=>{
//             song.id === current
//         });
//         return total + song.duration ;
//    });

//    console.log(TotalDuration);

   // Step 1: Find the "My Favorites" playlist
    const myFavoritesPlaylist = playlists.find(playlist => playlist.name === "Party Hits");
    
    // Step 2: Get all song IDs from that playlist
    const songIdsInPlaylist = myFavoritesPlaylist.songIds;
    
    // Step 3: Calculate total duration by adding up each song's duration
    const totalPlayTimeInSeconds = songIdsInPlaylist.reduce((runningTotal, currentSongId) => {
      const currentSong = songs.find(song => song.id === currentSongId);
      return runningTotal + currentSong.duration;
    }, 0);
    
    console.log("5. Total play time of all songs in My Favorites playlist:", totalPlayTimeInSeconds);

    return (
        <>
            <div>
                <label>Search Bar</label>
                <input style={{ width: '50%', margin: '20px' }} />
            </div>
            <div style={{ display: 'flex', width: '980px', flexWrap: 'wrap', gap: '10px', justifyContent: 'center', alignItems: 'center' }} className="cards ">
                {songs.map((song, index) => {
                    return <div style={{ border: ' 1px solid', width: '150px', height: '100px', padding: '5px' }}>
                        <h3 key={index}>{song.title}</h3>
                        <p>{song.artistId}</p>
                    </div>
                })}
                <div>
                    <h2>Filter songs by Artist</h2>
                    <select onChange={(e) => setSelectedArtistId(Number(e.target.value))}>
                        {artists.map(artist => (
                            <option key={artist.id} value={artist.id}>{artist.name}</option>
                        ))}
                    </select>

                    {filteredSongs.map(song => (
                        <div key={song.id}>{song.title}</div>
                    ))}
                    {artists.map((artist, index) => {
                        return <div>
                            <h2>{artist.name}</h2>
                        </div>
                    })}
                </div>
                <div>
                    {playlists.map((playlist, index) => {
                        return <div>
                            <h2>{playlist.name}</h2>
                        </div>
                    })}
                </div>



                  
            </div>
        </>
    )
}








// import { useState } from "react";
// import { songs, playlists, artists } from "./myMusic";

// export default function Mysangeet() {
//     const [artistSearchTerm, setArtistSearchTerm] = useState("");
//     const [selectArtistID, setSelectArtistID] = useState(null);

//     // Filter artists based on search term
//     const filteredArtists = artists.filter(artist =>
//         artist.name.toLowerCase().includes(artistSearchTerm.toLowerCase())
//     );

//     // Filter songs by selected artist ID
//     const filteredSongs = selectArtistID
//         ? songs.filter(song => song.artistId === selectArtistID)
//         : songs;  // Show all songs by default

//     return (
//         <>
//             <div>
//                 <label>Search Artist by Name:</label>
//                 <input
//                     style={{ width: '50%', margin: '20px' }}
//                     value={artistSearchTerm}
//                     onChange={(e) => setArtistSearchTerm(e.target.value)}
//                     placeholder="Type artist name..."
//                 />
//             </div>

//             <div style={{ margin: '10px' }}>
//                 <h2>Artist Suggestions:</h2>
//                 {filteredArtists.map(artist => (
//                     <div
//                         key={artist.id}
//                         onClick={() => setSelectArtistID(artist.id)}
//                         style={{
//                             cursor: 'pointer',
//                             padding: '5px',
//                             border: '1px solid gray',
//                             marginBottom: '5px',
//                             width: '200px'
//                         }}
//                     >
//                         {artist.name}
//                     </div>
//                 ))}
//             </div>

//             <h2 style={{ marginTop: '20px' }}>Filtered Songs:</h2>
//             <div style={{
//                 display: 'flex',
//                 width: '980px',
//                 flexWrap: 'wrap',
//                 gap: '10px',
//                 justifyContent: 'center',
//                 alignItems: 'center'
//             }} className="cards">
//                 {filteredSongs.map((song, index) => (
//                     <div key={index} style={{
//                         border: '1px solid',
//                         width: '150px',
//                         height: '100px',
//                         padding: '5px'
//                     }}>
//                         <h3>{song.title}</h3>
//                         <p>Artist ID: {song.artistId}</p>
//                     </div>
//                 ))}
//             </div>

//             <div>
//                 <h2>All Artists:</h2>
//                 {artists.map((artist, index) => (
//                     <div key={index}>
//                         <h3>{artist.name}</h3>
//                     </div>
//                 ))}
//             </div>

//             <div>
//                 <h2>All Playlists:</h2>
//                 {playlists.map((playlist, index) => (
//                     <div key={index}>
//                         <h3>{playlist.name}</h3>
//                     </div>
//                 ))}
//             </div>
//         </>
//     );
// }






/* 

Step 3: The reduce() loop processes each song:
First iteration:

currentSongId = 1004
currentSong = { id: 1004, title: "7 rings", duration: 180 }
runningTotal = 0 + 180 = 180

Second iteration:

currentSongId = 1006
currentSong = { id: 1006, title: "Shape of You", duration: 240 }
runningTotal = 180 + 240 = 420

Third iteration:

currentSongId = 1010
currentSong = { id: 1010, title: "Love Story", duration: 230 }
runningTotal = 420 + 230 = 650

Fourth iteration:

currentSongId = 1012
currentSong = { id: 1012, title: "Drivers License", duration: 220 }
runningTotal = 650 + 220 = 870
 */