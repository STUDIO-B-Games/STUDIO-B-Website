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
      <div className="flex flex-col sm:flex-row gap-6 pb-4 scrollbar-hide">
        {news.map((item, index) => (
          <div
            key={index}
            className="flex sm:flex-col w-full rounded-xl overflow-hidden bg-white/5 border border-white/10 hover:border-white/25 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
          >
            <div className="relative sm:w-full min-w-2/5 max-w-2/5 sm:max-w-full sm:h-60 md:h-72 lg:h-96">
              <Image
                src={item.photo}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-col gap-4 sm:gap-0 p-4 h-full justify-between">
              {/* Info */}
              <div className="">
                {item.game && (
                  <h4 className="text-xs font-black text-gray-300 uppercase">
                    {item.game}
                  </h4>
                )}
                <h3 className="text-lg md:text-xl text-gray-100 font-semibold mb-2 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-300 line-clamp-3">
                  {item.summary}
                </p>
              </div>

              {/* Date and Tags */}
              <div className="sm:-mt-20 md:-mt-26 lg:-mt-36 flex flex-col gap-2">
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag: any, index: number) => (
                    <div
                      key={index}
                      className="border border-white/50 rounded-full px-3 py-1 text-xs"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
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
