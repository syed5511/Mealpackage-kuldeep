import getDaysYears from "./getDaysYears";

const days = [
  "Saturday",
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
];

const getMergedList = () => {
  const daysList = getDaysYears();
  return daysList.map((item) => ({
    ...item,
    ...days.find((_) => _ === item.day_string),
  }));
};

export default getMergedList;
