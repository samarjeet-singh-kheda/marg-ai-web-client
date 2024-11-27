import Sidebar from "@/components/Sidebar";
import ClassPerformanceChart from "@/components/dashboard/ClassPerformanceChart";
import Banner from "@/components/dashboard/Banner";
import Header from "@/components/Header";
import TopPerformingStudentsCard from "@/components/dashboard/TopPerformingStudentsCard";
import SchoolCalendar from "@/components/dashboard/SchoolCalendar";
import {
  classData,
  topStudents,
  recentStudents,
  documents,
  tests,
  classProgress,
} from "@/data/data";
import RecentStudentsCard from "@/components/dashboard/RecentStudentsCard";
import DocumentListCard from "@/components/dashboard/DocumentListCard";
import TestListCard from "@/components/dashboard/TestListCard";
import StudentProgressCard from "@/components/dashboard/StudentProgressCard";

function HomePage() {
  return (
    <>
      {/**
       *
       * Side Bar
       *
       */}
      <Sidebar />

      {/**
       *
       * Main content
       *
       */}
      <div className="ml-[16.975rem] bg-[#F3F4FF]">
        <Header title="Dashboard" />

        <main className="mx-4 pb-8">
          {/**
           *
           * Banner
           *
           */}
          <Banner />

          {/**
           *
           * Row 1
           *
           */}
          <div className="m-4 grid grid-cols-3 gap-4">
            {/* Chart */}
            <ClassPerformanceChart data={classData} />

            {/* Student Progress */}
            <StudentProgressCard classProgress={classProgress} />

            {/* Top Performing */}
            <TopPerformingStudentsCard students={topStudents} />
          </div>

          {/**
           *
           * Row 2
           *
           */}
          <div className="m-4 grid grid-cols-[60%_40%] gap-4">
            {/* School Calendar */}
            <SchoolCalendar />

            {/* Recent Students */}
            <RecentStudentsCard recentStudents={recentStudents} />
          </div>

          {/**
           *
           * Row 3
           *
           */}
          <div className="m-4 grid grid-cols-[1fr_2fr] gap-4">
            {/* Documents */}
            <DocumentListCard documents={documents} />

            {/* Tests */}
            <TestListCard tests={tests} />
          </div>
        </main>
      </div>

      {/* TODO: Schedule */}
    </>
  );
}

export default HomePage;
