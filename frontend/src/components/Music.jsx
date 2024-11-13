const Music = () => {
  const Track = () => {
    return (
      <div className="w-[580px] h-20 rounded-md bg-primary-indigo-light"></div>
    );
  };
  return (
    <div className="">
      <h1 className="text-4xl text-primary-pink mb-8">Music</h1>
      <Track />
    </div>
  );
};

export default Music;
