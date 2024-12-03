/* eslint-disable react/prop-types */
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function StudentProgressCard({ classProgress }) {
  return (
    <div className="w-full rounded-2xl bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-semibold text-[#2E3A59]">
        Class Progress
      </h2>
      <div className="max-h-[400px] overflow-y-auto pr-2">
        <div className="grid grid-cols-2 gap-6">
          {classProgress.map((item) => (
            <div key={item.class} className="text-center">
              <div className="mx-auto w-24">
                <CircularProgressbar
                  value={item.completionRate}
                  text={`${item.completionRate}%`}
                  styles={buildStyles({
                    textSize: "24px",
                    pathColor: "#4F46E5",
                    textColor: "#1F2937",
                  })}
                />
              </div>
              <p className="mt-2 font-semibold text-[#2E3A59]">{item.class}</p>
              <p className="text-sm text-[#8A8A8A]">
                {item.completed}/{item.total} Students
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StudentProgressCard;
