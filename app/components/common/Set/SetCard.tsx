export function SetCard({
  id,
  img,
  date,
}: {
  id: string;
  img: string;
  date: string;
}) {
  const handleSegmentTrack = ({ id }: { id: string }) => {
    // @ts-ignore
    analytics.track("Set video", {
      id,
      section: "DJ Sets",
    });
  };

  return (
    <div
      className="md:w-64 w-60 h-60"
      onClick={() => handleSegmentTrack({ id })}
    >
      <img className="w-full h-full" src={img} alt="" />
      <p className="py-4 text-center">{date} </p>
    </div>
  );
}
