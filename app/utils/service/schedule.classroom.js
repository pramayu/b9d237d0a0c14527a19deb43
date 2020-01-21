export const getSchedule = () => {
    let current = new Date();
    let week    = [];

    for(let i = 1; i <= 7; i++) {
        let first = current.getDate() - current.getDay() + i;
        let day = new Date(current.setDate(first)).toISOString().slice(0, 10);
        week.push({
            fulldate    : day,
            date        : current.getDate()
        })
    }

    return week;
}