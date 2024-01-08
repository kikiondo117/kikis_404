import { Link } from "@remix-run/react";

export function SetCard({
  url,
  img,
  target,
}: {
  url: string;
  img: string;
  target?: string;
}) {
  const handleSegmentTrack = (url: string) => {
    // @ts-ignore
    analytics.track("Set video", {
      video: url,
      section: "DJ Sets",
    });
  };

  return (
    <Link
      onClick={() => handleSegmentTrack(url)}
      target={target ?? "_blank"}
      to={url}
      className="md:w-64 w-60 h-60"
    >
      <img className="w-full h-full" src={img} alt="" />
    </Link>
  );
}
