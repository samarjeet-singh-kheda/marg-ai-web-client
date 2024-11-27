function TestListCard({ tests }) {
  return (
    <div className="w-full rounded-3xl bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-[#333]">Tests</h2>
        <button className="text-sm font-bold text-[#4D44B5] hover:text-[#4D44B5]/80">
          See All
        </button>
      </div>

      <div className="flex flex-col gap-6">
        {tests.map((test) => (
          <div key={test.id} className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-xl bg-[#F0F7FF] p-2 text-center text-xl font-semibold text-[#4D44B5]">
              {test.class}
            </div>

            <div className="flex-1">
              <h3 className="mb-1 font-medium text-gray-800">{test.title}</h3>
              <p className="line-clamp-1 text-sm text-[#8A8A8A]">
                {test.message}
              </p>
            </div>

            <p className="text-xs font-bold text-[#8A8A8A]">{test.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TestListCard;
