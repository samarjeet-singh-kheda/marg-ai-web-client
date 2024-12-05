import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

function StudentsPage() {
  return (
    <>
      <Sidebar />
      <div className="ml-[16.975rem] bg-[#F3F4FF]">
        <Header title="Students" />
      </div>

      <div className="ml-[16.975rem] bg-[#F3F4FF]">
        <div className="mx-4 grid grid-cols-[40%_60%] gap-4">
          <div className="flex flex-col">
            {/* Class dropdown */}

            {/* Student dropdown */}

            {/* Student list */}
          </div>

          {/* Student progress list */}
        </div>
      </div>
    </>
  );
}

export default StudentsPage;
