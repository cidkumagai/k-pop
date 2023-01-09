export const unixTimeToLocalTime = (dateString: string | undefined) => {
  if (dateString) {
    const now = new Date(parseInt(dateString));
    const lowDate = now.toLocaleString('ja-JP').split(' ')[0]
    const year = lowDate.split('/')[0]
    const month = ('00' + lowDate.split('/')[1]).slice(-2);
    const date = ('00' + lowDate.split('/')[2]).slice(-2);

    return `${year}.${month}.${date}`;
  } else {
    return 'invalid';
  }
};

export const createYoutubeSrc = (musicId: string) => {
  return `https://www.youtube.com/embed/${musicId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${musicId}`;
}