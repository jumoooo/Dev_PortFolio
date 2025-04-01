export function formatRelativeTime(targetTime = new Date('2025-03-24 17:32')) {
  const rtf = new Intl.RelativeTimeFormat('ko', {
    numeric: 'auto', // 표시 형식 // auto : 그저께, always : 2일전
  });

  const currentTime = new Date();

  // 기본적으로 이전이면 음수가 나옴으로 abs 사용
  const timeDifference = Math.abs(targetTime - currentTime);

  // 소숫점 제거를 위한 floor 사용
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const years = Math.floor(days / 365);

  if (years > 0) {
    return rtf.format(-1 * years, 'year');
  } else if (days > 0) {
    return rtf.format(-1 * days, 'day');
  } else if (hours > 0) {
    return rtf.format(-1 * hours, 'hour');
  } else if (minutes > 0) {
    return rtf.format(-1 * minutes, 'minute');
  } else {
    return rtf.format(-1 * seconds, 'second');
  }
}
