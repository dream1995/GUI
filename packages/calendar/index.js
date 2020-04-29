import GCalendar from './src/calendar';

GCalendar.install = function(Vue) {
  Vue.component(GCalendar.name, GCalendar);
};

export default GCalendar;
