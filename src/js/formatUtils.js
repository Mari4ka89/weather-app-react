const formatTime = (time) => {
  if (time < 10) {
    time = `0${time}`;
  }

  return time;
};

export const formatDate = (timestamp) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let date = new Date(timestamp);
  let dayNumber = date.getDay();
  let hours = formatTime(date.getHours());
  let minutes = formatTime(date.getMinutes());

  return `${days[dayNumber]} ${hours}:${minutes}`;
};

export const formatForecastDay = (timestamp) => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let date = new Date(timestamp);
  let dayNumber = date.getDay();

  return days[dayNumber];
};
