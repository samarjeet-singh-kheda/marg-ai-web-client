import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import SchoolCalendar from "@/components/SchoolCalendar";
import ScheduleCard from "@/components/events/ScheduleCard";
import UpcomingActivitiesCard from "@/components/events/UpcomingActivitiesCard";
import { upcomingActivities } from "@/data/data";
import TeacherScheduleCalendar from "@/components/events/TeacherScheduleCalendar";

function EventsPage() {
  return (
    <>
      <Sidebar />
      <div className="ml-[16.975rem] bg-[#F3F4FF]">
        <Header title="Events" />
      </div>

      <div className="ml-[16.975rem] bg-[#F3F4FF]">
        <div className="mx-8 mb-4 grid grid-cols-[40%_60%] gap-4">
          {/* Today's Schedule */}
          <ScheduleCard />

          {/* School Calendar */}
          <SchoolCalendar />

          {/* Upcoming Events */}
        </div>
        <UpcomingActivitiesCard upcomingActivities={upcomingActivities} />

        {/* My Calendar */}
        <TeacherScheduleCalendar />
      </div>
    </>
  );
}

export default EventsPage;
