import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ChevronDown } from "lucide-react";

const YEARS = Array.from(
  { length: 9 },
  (_, i) => new Date().getFullYear() - 3 + i,
);

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const EVENT_TYPES = {
  TEST: {
    name: "Test",
    color: "bg-[#FB7D5B]/20 hover:bg-[#FB7D5B]/30",
    dotColor: "bg-[#FB7D5B]",
    textColor: "text-[#FB7D5B]",
  },
  ASSIGNMENT: {
    name: "Assignment",
    color: "bg-[#FCC43E]/20 hover:bg-[#FCC43E]/30",
    dotColor: "bg-[#FCC43E]",
    textColor: "text-[#FCC43E]",
  },
};

const SchoolCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState({});
  const [selectedDay, setSelectedDay] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0,
  ).getDate();

  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1,
  ).getDay();

  const handleDateClick = (day) => {
    setSelectedDay(day);
    setIsDialogOpen(true);
  };

  const handleEventSelect = (eventType) => {
    const dateKey = `${currentDate.getFullYear()}-${currentDate.getMonth()}-${selectedDay}`;
    setEvents((prev) => ({
      ...prev,
      [dateKey]: eventType,
    }));
    setIsDialogOpen(false);
    setSelectedDay(null);
  };

  const getEventForDate = (day) => {
    const dateKey = `${currentDate.getFullYear()}-${currentDate.getMonth()}-${day}`;
    return events[dateKey];
  };

  const renderCalendarDays = () => {
    const days = [];
    for (let i = 1; i <= daysInMonth; i++) {
      const event = getEventForDate(i);
      const eventClass = event ? EVENT_TYPES[event].color : "hover:bg-muted";

      // Calculate if it's a Sunday
      const date = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        i,
      );
      const isSunday = date.getDay() === 0;

      days.push(
        <Button
          key={i}
          variant="ghost"
          onClick={() => handleDateClick(i)}
          className={cn("relative aspect-square h-full w-full p-0", eventClass)}
          aria-label={`${i} ${currentDate.toLocaleString("default", {
            month: "long",
          })} ${currentDate.getFullYear()}`}
        >
          <span
            className={cn(
              "absolute left-1 top-1 text-sm",
              isSunday && "font-medium text-destructive",
            )}
          >
            {i}
          </span>
          {event && (
            <span
              className={cn(
                "absolute bottom-1 right-1 h-2 w-2 rounded-full",
                EVENT_TYPES[event].dotColor,
              )}
              aria-label={EVENT_TYPES[event].name}
            />
          )}
        </Button>,
      );
    }
    return days;
  };

  return (
    <div
      className="rounded-3xl border bg-card p-4 text-card-foreground shadow-sm md:p-6"
      role="region"
      aria-label="School Calendar"
    >
      <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <h2 className="text-2xl font-bold text-[#303972]">School Calendar</h2>

        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="min-w-[140px] justify-between">
              {currentDate.toLocaleString("default", {
                month: "long",
                year: "numeric",
              })}
              <ChevronDown className="ml-2 h-4 w-4 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-64 p-2" align="end">
            <div className="mb-2 font-medium">Month</div>
            <div className="grid grid-cols-3 gap-1">
              {MONTHS.map((month, index) => (
                <Button
                  key={month}
                  variant="ghost"
                  size="sm"
                  onClick={() =>
                    setCurrentDate(
                      new Date(currentDate.getFullYear(), index, 1),
                    )
                  }
                  className={cn(
                    "justify-center",
                    currentDate.getMonth() === index && "bg-muted",
                  )}
                >
                  {month.slice(0, 3)}
                </Button>
              ))}
            </div>
            <div className="mb-2 mt-4 font-medium">Year</div>
            <div className="grid grid-cols-3 gap-1">
              {YEARS.map((year) => (
                <Button
                  key={year}
                  variant="ghost"
                  size="sm"
                  onClick={() =>
                    setCurrentDate(new Date(year, currentDate.getMonth(), 1))
                  }
                  className={cn(
                    "justify-center",
                    currentDate.getFullYear() === year && "bg-muted",
                  )}
                >
                  {year}
                </Button>
              ))}
            </div>
          </PopoverContent>
        </Popover>
      </div>

      {/* Add Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogTitle>
            Select Event Type for {selectedDay}{" "}
            {currentDate.toLocaleString("default", { month: "long" })}
          </DialogTitle>
          <div className="flex flex-col gap-2">
            {Object.entries(EVENT_TYPES).map(([type, { name, color }]) => (
              <Button
                key={type}
                variant="ghost"
                onClick={() => handleEventSelect(type)}
                className={cn("justify-start", color)}
              >
                {name}
              </Button>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      {/* Calendar Grid */}
      <div className="mb-2 grid grid-cols-7 gap-1">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, index) => (
          <div
            key={day}
            className={cn(
              "text-center text-sm font-medium text-muted-foreground",
              index === 0 && "text-destructive",
            )}
          >
            {day}
          </div>
        ))}
      </div>

      <div
        className="grid grid-cols-7 gap-1"
        style={{
          gridTemplateRows: `repeat(${Math.ceil(
            (daysInMonth + firstDayOfMonth) / 7,
          )}, auto)`,
        }}
      >
        {Array(firstDayOfMonth)
          .fill(null)
          .map((_, index) => (
            <div
              key={`empty-${index}`}
              className="aspect-square"
              aria-hidden="true"
            />
          ))}
        {renderCalendarDays()}
      </div>

      {/* Legend */}
      <div className="mt-4 flex gap-4">
        {Object.entries(EVENT_TYPES).map(([type, { name, dotColor }]) => (
          <div key={type} className="flex items-center gap-2">
            <div className={cn("h-4 w-4 rounded", dotColor)} />
            <span className="text-sm text-muted-foreground">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SchoolCalendar;
