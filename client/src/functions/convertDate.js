function convertDate(date) {
    const originalDate = date;

    const newDate = new Date(originalDate);

    const year = newDate.getFullYear();
    const month = newDate.getMonth() + 1;
    const day = newDate.getDate();
    const hours = newDate.getHours();
    const minutes = newDate.getMinutes();

    const completeDate = `${day < 10 ? "0" : ""}${day}/${
        month < 10 ? "0" : ""
    }${month}/${year} ${hours < 10 ? "0" : ""} - ${hours}:${
        minutes < 10 ? "0" : ""
    }${minutes}`;

    return completeDate;
}

export { convertDate };
