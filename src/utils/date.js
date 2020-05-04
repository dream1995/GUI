/**
 * 时间转换
 **/
const weekArray = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];

const currentMonth = (date) => {
  let currentDate = new Date(date);
  let year = currentDate.getFullYear();
  let month = currentDate.getMonth() + 1;
  let MonthNumber = new Date(year, month, 0).getDate();
  return MonthNumber;
};

const isToday = (date, day) => {
  let beforDay = new Date(date, day);
  beforDay.setDate(day);
  beforDay.setHours(0);
  beforDay.setMinutes(0);
  beforDay.setSeconds(0);
  beforDay.setMilliseconds(0);
  let nowDay = new Date();
  nowDay.setHours(0);
  nowDay.setMinutes(0);
  nowDay.setSeconds(0);
  nowDay.setMilliseconds(0);
  return beforDay.valueOf() === nowDay.valueOf();
};

const getWeek = (date, day) => {
  let currentDay = new Date(date);
  currentDay.setDate(day);
  return weekArray[currentDay.getDay()];
};

const getMonth = (date) => {
  if (!date) return [];
  let m = new Date(date).getMonth() + 1;
  let monthNumber = currentMonth(date);
  let data = [];
  for (let i = 1; i <= monthNumber; i++) {
    data.push({
      'index': i,
      'day': `${m}-${i > 9 ? i : '0' + i}`,
      'week': getWeek(date, i),
      'current': isToday(date, i)
    });
  }
  ;
  return {data, monthNumber};
};

export {
  getMonth
};
