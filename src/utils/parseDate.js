const parseDate = (content) => {
    const re = /\d{1,2}\/\d{1,2}\/\d{2,4}/gi;
    const re2 = /\d{1,2}\.\d{1,2}\.\d{2,4}/gi;
    const res = content.match(re);
    const res2 = content.match(re2);

    if (res) {
        return res
            .filter((e) => new Date(e).toString() !== "Invalid Date")
            .join(", ");
    }
    if (res2) {
        return res2
            .filter((e) => new Date(e).toString() !== "Invalid Date")
            .join(", ");
    }
    return "";
};

export default parseDate;
