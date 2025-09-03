import dayjs from "dayjs";

type Format = "MMM D";
export const formatDate = (date: Date | string, format: Format) => {
  return dayjs(date).format(format);
};
