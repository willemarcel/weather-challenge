export const formatDateObject = (date, locale='en', timezone='UTC') => {
  const weekday = date.toLocaleDateString(locale, {weekday: 'long', timeZone: timezone});
  const day = date.toLocaleDateString(locale, {day: 'numeric', timeZone: timezone});
  const month = date.toLocaleDateString(locale, {month: 'long', timeZone: timezone});
  const time = date.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit', timeZone: timezone});

  return {
    weekday: weekday,
    day: `${day}. ${month}`,
    time: time
  };
};
