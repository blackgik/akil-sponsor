export const dateFilters = ({ duration, from, to, todayTime }) => {
  let today;
  let timeDiff;

  switch (duration) {
    case '1':
      const yesterdayAgo =
        new Date(new Date().setDate(new Date().getDate() - 1)).setHours(-1, 0, 0, 0) +
        1000 * 60 * 60;
      const now = new Date();
      const midnight = now.setHours(-1, 0, 0, 0) + 1000 * 60 * 60 - 1000;
      today = new Date(midnight).toJSON();
      timeDiff = new Date(yesterdayAgo).toJSON();

      break;
    case '7':
      today = new Date(new Date().getTime() + 1000 * 60 * 60).toJSON();
      const oneWeekAgo =
        new Date(new Date().setDate(new Date().getDate() - 7)).setHours(-1, 0, 0, 0) +
        1000 * 60 * 60;
      timeDiff = new Date(oneWeekAgo).toJSON();

      break;
    case '30':
      today = new Date(new Date().getTime() + 1000 * 60 * 60).toJSON();
      const oneMonthAgo =
        new Date(new Date().setMonth(new Date().getMonth() - 1)).setHours(-1, 0, 0, 0) +
        1000 * 60 * 60;
      timeDiff = new Date(oneMonthAgo).toJSON();

      break;

    case '90':
      today = new Date(new Date().getTime() + 1000 * 60 * 60).toJSON();
      const threeMonths =
        new Date(new Date().setDate(new Date().getDate() - 90)).setHours(0, 0, 0, 0) +
        1000 * 60 * 60;
      timeDiff = new Date(threeMonths).toJSON();
      break;

    case '180':
      today = new Date(new Date().getTime() + 1000 * 60 * 60).toJSON();
      const sixMonths =
        new Date(new Date().setDate(new Date().getDate() - 180)).setHours(0, 0, 0, 0) +
        1000 * 60 * 60;
      timeDiff = new Date(sixMonths).toJSON();
      break;

    case '365':
      today = new Date(new Date().getTime() + 1000 * 60 * 60).toJSON();
      const oneYearAgo =
        new Date(new Date().setDate(new Date().getDate() - 365)).setHours(0, 0, 0, 0) +
        1000 * 60 * 60;
      timeDiff = new Date(oneYearAgo).toJSON();
      break;

    default:
      today = new Date(new Date().getTime() + 1000 * 60 * 60).toJSON();
      const timeAge =
        new Date(new Date().setDate(new Date().getDate() - 365)).setHours(0, 0, 0, 0) +
        1000 * 60 * 60;
      timeDiff = new Date(timeAge).toJSON();
      break;
  }

  if (from) {
    to = to || new Date();
    today = new Date(new Date(to).getTime() + (1000 * 60 * 60 * 24 - 1000 * 60 + 59000)).toJSON();
    timeDiff = new Date(new Date(from).getTime()).toJSON();
  }

  if (todayTime === 'true') {
    const now = new Date();
    const midnight = now.setHours(-1, 0, 0, 0) + 1000 * 60 * 60;

    today = new Date(new Date().getTime() + 1000 * 60 * 60).toJSON();
    timeDiff = new Date(midnight).toJSON();
  }

  today = new Date(today);
  timeDiff = new Date(timeDiff);

  return { today, timeDiff };
};
