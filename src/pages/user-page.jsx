import LanguageSelector from "@/components/LanguageSelector";
import Sidebar from "@/components/Sidebar";

function UserPage() {
  return (
    <>
      <Sidebar />
      <header className="ml-[16.975rem] flex items-center justify-between bg-[#F3F4FF] px-10 py-6">
        <h1 className="text-4xl font-bold text-[#303972]">User Profile</h1>
        <LanguageSelector />
      </header>
    </>
  );
}

export default UserPage;
