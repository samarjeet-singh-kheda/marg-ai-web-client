import LanguageSelector from "@/components/LanguageSelector";
import Sidebar from "@/components/Sidebar";
import TeacherAvatar from "@/components/TeacherAvatar";

function ResultsAnalyticsPage() {
  return (
    <>
      <Sidebar />
      <header className="ml-[16.975rem] flex items-center justify-between bg-[#F3F4FF] px-10 py-6">
        <h1 className="text-4xl font-bold text-[#303972]">Results Analytics</h1>
        <div className="flex items-center gap-12">
          <LanguageSelector />
          <TeacherAvatar />
        </div>
      </header>
    </>
  );
}

export default ResultsAnalyticsPage;
