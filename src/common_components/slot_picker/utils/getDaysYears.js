import moment from "moment";

const getDesiredData = (date, today = false, active = false) => ({
  day_number: date.format("DD"),
  month_string: date.format("MMMM"),
  day_string: date.format("dddd"),
  today,
  active,
});

const getSevenDays = (date) => {
  const result = [];
  result.push(getDesiredData(date, true, true));
  for (let i = 0; i < 6; i++) {
    result.push(getDesiredData(date.add(1, "day")));
  }
  return result;
};

const getDaysYears = () => getSevenDays(moment());

export default getDaysYears;
