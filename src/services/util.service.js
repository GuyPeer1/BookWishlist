
export function makeId(length = 5) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

export function getDayName(date, locale) {
    date = new Date(date)
    return date.toLocaleDateString(locale, { weekday: 'long' })
}

export function getMonthName(date) {

    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ]
    return monthNames[date.getMonth()]
}

export function getSeason(date) {
    const month = date.getMonth();

    if (month === 11 || month === 0 || month === 1) {
        return 'Winter';
    } else if (month >= 2 && month <= 4) {
        return 'Spring';
    } else if (month >= 5 && month <= 7) {
        return 'Summer';
    } else {
        return 'Autumn';
    }
}