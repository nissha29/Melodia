const Track = () => {
  const track = [
    {
      title: "Reflection",
      artist: "The NeighboUrhood",
      image: "https://i.ytimg.com/vi/x47TgeRJtH0/maxresdefault.jpg",
    },
    {
      title: "Sweater Weather",
      artist: "The NeighboUrhood",
      image:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1386028945i/19108192._UY630_SR1200,630_.jpg",
    },
  ];
  return (
    <div className="w-[60%] h-auto space-y-7 flex flex-col">
      {track.map((track, index) => (
        <div
          key={index}
          className="w-[580px] h-20 rounded-md bg-primary-indigo-light flex items-center space-x-4 p-2"
        >
          <img src={track.image} alt="" className="w-6 h-auto" />
        </div>
      ))}
    </div>
  );
};

export default Track;
