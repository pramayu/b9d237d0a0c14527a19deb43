export const agendaEvent = (year, month) => {
    const monthIndex = month - 1;
    const monthtxt = ['januari','februari','maret','april','mei','juni','juli','agustus','september','oktober','november','desember'];
    const names = [ 'sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat' ];
    const date = new Date(year, monthIndex, 1);
    const result = [];
    while (date.getMonth() == monthIndex) {
      result.push({
        'monthtxt'  : monthtxt[monthIndex],
        'daytxt'    : names[date.getDay()],
        'daynum'    : date.getDate(),
        'monthnum'  : date.getMonth(),
        'year'      : date.getFullYear()
      });
      date.setDate(date.getDate() + 1);
    }
    return result;
};