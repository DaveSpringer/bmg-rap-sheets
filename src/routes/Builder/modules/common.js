export const sortCharacters = (a, b) => {
  switch(a.rank) {
    case 'Leader':
    if (b.rank === 'Leader') {
      return b.reputation - a.reputation
    } else {
      return -1
    }
    case 'Sidekick':
    if (b.rank === 'Leader') {
      return 1
    } else if (b.rank === 'Sidekick') {
      return b.reputation - a.reputation
    } else {
      return -1
    }
    case 'Free Agent':
    if (b.rank === 'Leader' || b.rank === 'Sidekick') {
      return 1
    } else if (b.rank === 'Free Agent') {
      return b.reputation - a.reputation
    } else {
      return -1
    }
    case 'Henchman':
    if (b.rank === 'Henchman') {
      return b.reputation - a.reputation
    } else {
      return 1
    }
  }
}
