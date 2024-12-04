import { format } from "date-fns";
import { useState } from "react";

function UpcomingActivitiesCard({ upcomingActivities }) {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleViewMore = () => {
    setVisibleCount((prevCount) => (prevCount <= 3 ? 5 : 3));
  };

  return (
    <div className="mx-8 mb-4 rounded-3xl border bg-card p-4 text-card-foreground shadow-sm md:p-6">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-2xl font-bold text-[#303972]">Upcoming Events</h3>
        <button
          onClick={handleViewMore}
          className="text-sx font-bold text-[#4D44B5] hover:text-[#4D44B5]/80"
        >
          {visibleCount <= 3 ? "See All" : "See Less"}
        </button>
      </div>

      <ul className="flex flex-col gap-4">
        {upcomingActivities.slice(0, visibleCount).map((activity) => (
          <li
            className="flex items-center gap-16 rounded-xl bg-[#F3F4FF] p-6 shadow-sm transition-all hover:shadow-md"
            key={activity.id}
          >
            <p className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#4D44B5] px-12 py-4 text-xl font-semibold text-[#FFF]">
              {format(new Date(activity.date), "dd")}
            </p>

            <div className="flex-1">
              <h3 className="mb-1 text-base font-bold text-[#333]">
                {activity.title}
              </h3>
              <p className="line-clamp-1 text-base font-semibold text-[#4D44B5]">
                {activity.meetingLink}
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="h-3 w-3 rounded-full bg-[#4D44B5]" />
              <p className="text-sm font-semibold text-[#8A8A8A]">
                {activity.startTime} - {activity.endTime}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UpcomingActivitiesCard;
