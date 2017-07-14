export const sortCharacters = (a, b) => {
  switch (a.rank) {
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
    case 'Boss':
      if (b.rank === 'Boss') {
        return b.reputation - a.reputation
      } else {
        return -1
      }
    case 'Optional':
      if (b.rank === 'Boss') {
        return 1
      } else if (b.rank === 'Optional') {
        return b.reputation - a.reputation
      } else {
        return -1
      }
    case 'No':
      if (b.rank !== 'No') {
        return 1
      } else {
        return b.reputation - a.reputation
      }
  }
}

/* A helper method that calculates common things
like reputation, funding, and crew code. It then
returns that in a wrapper object. */
export const doStateCalcs = (state) => {
  let resultObj = {
    rep: 0,
    funding: 0,
    crewCode: state.crewId
  }

  resultObj = state.characters.reduce((wrapper, char) => {
    wrapper.rep += char.reputation
    wrapper.funding += char.funding
    wrapper.crewCode += '+' + char.key
    if (char.equipment !== undefined) {
      wrapper.crewCode += char.equipment.reduce((equipString, equip) => {
        wrapper.rep += (equip.rep ? equip.rep : 0)
        wrapper.funding += (equip.funding ? equip.funding : 0)
        equipString += '-' + equip.key
        return equipString
      }, '')
    }
    return wrapper
  }, resultObj)

  state.reputation = resultObj.rep
  state.funding = resultObj.funding
  state.crewCode = resultObj.crewCode
  // Update the current URI so the user can link back to it.
  let searchParams = new URLSearchParams()
  searchParams.append('crewCode', resultObj.crewCode)
  history.pushState({}, '', location.origin + location.pathname + '?' + searchParams)
  return state
}
