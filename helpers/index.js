const _ = require("lodash");

const randomFirestoreDocumentId = () => {
    const validCharacters =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split(
            "",
        );
    const length = 20;
    return _.sampleSize(validCharacters, length).join("");
};

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

module.exports = { randomFirestoreDocumentId, convertUnixTimestampToNumber };
