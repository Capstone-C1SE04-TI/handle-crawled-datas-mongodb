const convertUnixTimestampToNumber = (unixTimestamp) => {
    const date = new Date(unixTimestamp * 1000);

    const year =
        date.getFullYear() < 10
            ? "0" + date.getFullYear()
            : "" + date.getFullYear();
    const month =
        date.getMonth() + 1 < 10
            ? "0" + (date.getMonth() + 1)
            : "" + (date.getMonth() + 1);
    const day =
        date.getDate() < 10 ? "0" + date.getDate() : "" + date.getDate();
    const hour =
        date.getHours() < 10 ? "0" + date.getHours() : "" + date.getHours();
    const minute =
        date.getMinutes() < 10
            ? "0" + date.getMinutes()
            : "" + date.getMinutes();
    const second =
        date.getSeconds() < 10
            ? "0" + date.getSeconds()
            : "" + date.getSeconds();

    const formattedTimeStr = `${year}${month}${day}${hour}${minute}${second}`;
    const formattedTimeNumber = Number(formattedTimeStr);

    return formattedTimeNumber;
};

const getTodayDay = () => {
    const date = new Date();

    const year =
        date.getFullYear() < 10
            ? "0" + date.getFullYear()
            : "" + date.getFullYear();
    const month =
        date.getMonth() + 1 < 10
            ? "0" + (date.getMonth() + 1)
            : "" + (date.getMonth() + 1);
    const day =
        date.getDate() < 10 ? "0" + date.getDate() : "" + date.getDate();

    return Number(`${year}${month}${day}`);
};

const getThisMonthYear = () => {
    const date = new Date();

    const year =
        date.getFullYear() < 10
            ? "0" + date.getFullYear()
            : "" + date.getFullYear();
    const month =
        date.getMonth() + 1 < 10
            ? "0" + (date.getMonth() + 1)
            : "" + (date.getMonth() + 1);

    return Number(`${year}${month}`);
};

const getNearest7Days = () => {
    const unixTimestampToNumber = (unixTimestamp) => {
        const date = new Date(unixTimestamp);

        const year =
            date.getFullYear() < 10
                ? "0" + date.getFullYear()
                : "" + date.getFullYear();
        const month =
            date.getMonth() + 1 < 10
                ? "0" + (date.getMonth() + 1)
                : "" + (date.getMonth() + 1);
        const day =
            date.getDate() < 10 ? "0" + date.getDate() : "" + date.getDate();

        return Number(`${year}${month}${day}`);
    };

    const dates = [6, 5, 4, 3, 2, 1, 0].map((i) => {
        const d = new Date();
        d.setDate(d.getDate() - i);
        return unixTimestampToNumber(d);
    });

    return dates;
};

// ERROR
const getNearest12Months = () => {
    const date = new Date();

    const year =
        date.getFullYear() < 10
            ? "0" + date.getFullYear()
            : "" + date.getFullYear();
    const month =
        date.getMonth() + 1 < 10
            ? "0" + (date.getMonth() + 1)
            : "" + (date.getMonth() + 1);
    const day =
        date.getDate() < 10 ? "0" + date.getDate() : "" + date.getDate();

    return Number(`${year}${month}${day}`);
};

const scientificNotationEToLongStringNumber = (x) => {
    if (Math.abs(x) < 1.0) {
        var e = parseInt(x.toString().split("e-")[1]);
        if (e) {
            x *= Math.pow(10, e - 1);
            x = "0." + new Array(e).join("0") + x.toString().substring(2);
        }
    } else {
        var e = parseInt(x.toString().split("+")[1]);
        if (e > 20) {
            e -= 20;
            x /= Math.pow(10, e);
            x += new Array(e + 1).join("0");
        }
    }

    return x;
};

module.exports = {
    convertUnixTimestampToNumber,
    getTodayDay,
    getNearest7Days,
    getThisMonthYear,
    getNearest12Months,
    scientificNotationEToLongStringNumber
};
