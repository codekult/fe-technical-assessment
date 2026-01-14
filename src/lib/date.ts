import {
  fromUnixTime,
  formatDistanceToNow,
  isYesterday,
  isToday,
} from "date-fns";

export function getTimeAgo(timestamp: number) {
  const date = fromUnixTime(timestamp);

  if (isToday(date)) {
    return "Today";
  }

  if (isYesterday(date)) {
    return "Yesterday";
  }

  return formatDistanceToNow(date, { addSuffix: true });
}
