import Image from "next/image";
import Wrapper from "./Wrapper";
import SectionHeader from "./SectionHeader";

export default function News({ news }: { news: any[] }) {
  // Convert date to relative time (e.g., "2 hours ago", "3 days ago")
  const getRelativeTime = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffSec = Math.floor(diffMs / 1000);
    const diffMin = Math.floor(diffSec / 60);
    const diffHour = Math.floor(diffMin / 60);
    const diffDay = Math.floor(diffHour / 24);
    const diffWeek = Math.floor(diffDay / 7);
    const diffMonth = Math.floor(diffDay / 30);
    const diffYear = Math.floor(diffDay / 365);

    if (diffYear > 0) {
      return `${diffYear} year${diffYear > 1 ? "s" : ""} ago`;
    } else if (diffMonth > 0) {
      return `${diffMonth} month${diffMonth > 1 ? "s" : ""} ago`;
    } else if (diffWeek > 0) {
      return `${diffWeek} week${diffWeek > 1 ? "s" : ""} ago`;
    } else if (diffDay > 0) {
      return `${diffDay} day${diffDay > 1 ? "s" : ""} ago`;
    } else if (diffHour > 0) {
      return `${diffHour} hour${diffHour > 1 ? "s" : ""} ago`;
    } else if (diffMin > 0) {
      return `${diffMin} minute${diffMin > 1 ? "s" : ""} ago`;
    } else {
      return "Just now";
    }
  };

  return (
    <Wrapper className="-mt-28 z-10 relative">
      <SectionHeader
        title="News"
        action={{ label: "View All", link: "/news" }}
      />

      {/* News grid displaying latest articles with images, titles, dates, tags, and summaries */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-2 md:gap-4 items-stretch sm:justify-center">
        {news.map((item, index) => (
          <div
            key={index}
            className="flex flex-col overflow-hidden rounded-xl bg-white/15 border border-white/20 hover:border-white/25 transition-all duration-300 hover:-translate-y-1 cursor-pointer w-full sm:w-1/3"
          >
            <div className="relative w-full aspect-16/6 sm:aspect-video overflow-hidden">
              <Image
                src={item.photo}
                alt={item.title}
                fill
                className="object-cover aspect-video select-none pointer-events-none"
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
              />
              {/* Tags */}
              <div className="absolute top-1 left-1 flex flex-wrap gap-1 md:gap-2">
                {item.tags.map((tag: any, index: number) => (
                  <div
                    key={index}
                    className="border border-white/25 rounded-full px-1.5 py-0.5 sm:px-3 sm:py-1 text-xs font-semibold text-white/90 bg-black/30 backdrop-blur-sm whitespace-nowrap"
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col flex-1 gap-2 sm:gap-4 p-4 justify-between">
              {/* Game, title, and summary */}
              <div className="flex flex-col gap-2">
                {/* Game and title */}
                <div className="flex flex-col gap-1">
                  {item.game && (
                    <h4 className="text-xs font-black text-gray-300 uppercase">
                      {item.game}
                    </h4>
                  )}
                  <h3 className="text-lg md:text-xl text-gray-100 font-semibold line-clamp-2">
                    {item.title}
                  </h3>
                </div>
                {/* Summary */}
                <p className="text-sm text-gray-300 line-clamp-3">
                  {item.summary}
                </p>
              </div>

              {/* Date */}
              <div className="flex flex-col gap-2">
                <p className="text-xs md:text-sm text-gray-400">
                  {getRelativeTime(item.publishedDate)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Wrapper>
  );
}
