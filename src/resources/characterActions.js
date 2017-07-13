export const allCharacterActions = {
  // Arkham City Batman
  '001': {
    onAdd : {
      type: 'ADD_AVAILABLE_CHARACTER',
      actions: [{ key: '077' }, { key: '144A' }, { key: '006' }, { key: '129' }, { key: '011' }]
    },
    onRemove : {
      type: 'REMOVE_AVAILABLE_CHARACTER',
      actions: [{ key: '077' }, { key: '144A' }, { key: '006' }, { key: '129' }, { key: '011' }]
    }
  },
  // Batfleck
  'P04': {
    onAdd : {
      type: 'ADD_AVAILABLE_CHARACTER',
      actions: [{ key: '077' }, { key: '144A' }, { key: '006' }, { key: '129' }, { key: '011' }]
    },
    onRemove : {
      type: 'REMOVE_AVAILABLE_CHARACTER',
      actions: [{ key: '077' }, { key: '144A' }, { key: '006' }, { key: '129' }, { key: '011' }]
    }
  },
  // Adam West
  '065': {
    onAdd : {
      type: 'ADD_AVAILABLE_CHARACTER',
      actions: [{ key: '077' }, { key: '144A' }, { key: '006' }, { key: '129' }, { key: '011' }]
    },
    onRemove : {
      type: 'REMOVE_AVAILABLE_CHARACTER',
      actions: [{ key: '077' }, { key: '144A' }, { key: '006' }, { key: '129' }, { key: '011' }]
    }
  },
  // Batman Arkham Knight
  '092': {
    onAdd : {
      type: 'ADD_AVAILABLE_CHARACTER',
      actions: [{ key: '077' }, { key: '144A' }, { key: '006' }, { key: '129' }, { key: '011' }, { key: 'P03' }]
    },
    onRemove : {
      type: 'REMOVE_AVAILABLE_CHARACTER',
      actions: [{ key: '077' }, { key: '144A' }, { key: '006' }, { key: '129' }, { key: '011' }, { key: 'P03' }]
    }
  },
  // Batman Arkham ORIGINS
  '035': {
    onAdd : {
      type: 'ADD_AVAILABLE_CHARACTER',
      actions: [{ key: '077' }, { key: '144A' }, { key: '006' }, { key: '129' }, { key: '011' }]
    },
    onRemove : {
      type: 'REMOVE_AVAILABLE_CHARACTER',
      actions: [{ key: '077' }, { key: '144A' }, { key: '006' }, { key: '129' }, { key: '011' }]
    }
  },
  // Modern Age Batman
  '147A': {
    onAdd : {
      type: 'ADD_AVAILABLE_CHARACTER',
      actions: [{ key: '077' }, { key: '144A' }, { key: '006' }, { key: '129' }, { key: '011' }, { key: '147B', props: { rank: 'Sidekick' } }]
    },
    onRemove : {
      type: 'REMOVE_AVAILABLE_CHARACTER',
      actions: [{ key: '077' }, { key: '144A' }, { key: '006' }, { key: '129' }, { key: '011' }, { key: '147B' }]
    }
  },
  // Dark Knight Rises Batman
  '044': {
    onAdd : {
      type: 'ADD_AVAILABLE_CHARACTER',
      actions: [{ key: '077' }, { key: '144A' }, { key: '006' }, { key: '129' }, { key: '011' }]
    },
    onRemove : {
      type: 'REMOVE_AVAILABLE_CHARACTER',
      actions: [{ key: '077' }, { key: '144A' }, { key: '006' }, { key: '129' }, { key: '011' }]
    }
  },
  // TAS Batman
  '110': {
    onAdd : {
      type: 'ADD_AVAILABLE_CHARACTER',
      actions: [{ key: '077' }, { key: '144A' }, { key: '006' }, { key: '129' }, { key: '011' }]
    },
    onRemove : {
      type: 'REMOVE_AVAILABLE_CHARACTER',
      actions: [{ key: '077' }, { key: '144A' }, { key: '006' }, { key: '129' }, { key: '011' }]
    }
  },
  // Frank Miller Batman
  '059': {
    onAdd : {
      type: 'ADD_AVAILABLE_CHARACTER',
      actions: [{ key: '077' }, { key: '144A' }, { key: '006' }, { key: '129' }, { key: '011' }]
    },
    onRemove : {
      type: 'REMOVE_AVAILABLE_CHARACTER',
      actions: [{ key: '077' }, { key: '144A' }, { key: '006' }, { key: '129' }, { key: '011' }]
    }
  },
  // Batpod
  '050': {
    onAdd : {
      type: 'ADD_AVAILABLE_CHARACTER',
      actions: [{ key: '077' }, { key: '144A' }, { key: '006' }, { key: '129' }, { key: '011' }]
    },
    onRemove : {
      type: 'REMOVE_AVAILABLE_CHARACTER',
      actions: [{ key: '077' }, { key: '144A' }, { key: '006' }, { key: '129' }, { key: '011' }]
    }
  },
  // Batman Rebirth
  '164': {
    onAdd : {
      type: 'ADD_AVAILABLE_CHARACTER',
      actions: [{ key: '077' }, { key: '144A' }, { key: '006' }, { key: '129' }, { key: '011' }]
    },
    onRemove : {
      type: 'REMOVE_AVAILABLE_CHARACTER',
      actions: [{ key: '077' }, { key: '144A' }, { key: '006' }, { key: '129' }, { key: '011' }]
    }
  },
  // Professor Pyg
  '154A': {
    onAdd : {
      type: 'ADD_CHARACTER',
      actions: [{
        key: '154B',
        props: { rank: 'Unknown' }
      }, {
        key: '154C',
        props: { rank: 'Unknown' }
      }, {
        key: '154D',
        props: { rank: 'Unknown' }
      }]
    },
    onRemove: {
      type: 'REMOVE_CHARACTER',
      actions: [{
        key: '154B'
      }, {
        key: '154C'
      }, {
        key: '154D'
      }]
    }
  },
  // Lex Luthor
  '157A': {
    onAdd: {
      type: 'ADD_AVAILABLE_CHARACTER',
      actions: [{
        filter: (char) => char.crews.indexOf('lf') !== -1 && char.rank === 'Henchman' && !(char.multiples && !char.key.endsWith('1')),
        props: { rank : 'Henchman' }
      }, {
        filter: (char) => char.crews.indexOf('oc') !== -1 && char.rank === 'Henchman' && !(char.multiples && !char.key.endsWith('1')),
        props: { rank : 'Henchman' }
      }]
    },
    onRemove: {
      type: 'REMOVE_AVAILABLE_CHARACTER',
      actions: [{
        filter: (char) => char.crews.indexOf('lf') !== -1 && char.rank === 'Henchman'
      }, {
        filter: (char) => char.crews.indexOf('oc') !== -1 && char.rank === 'Henchman'
      }]
    }
  },
  // Bane Arkham City
  '006': {
    onAdd: {
      type: 'ADD_AVAILABLE_CHARACTER',
      actions: [{ key: '024' }]
    },
    onRemove : {
      type: 'REMOVE_AVAILABLE_CHARACTER',
      actions: [{ key: '024' }]
    }
  },
  // Bane Arkham ORIGIN
  '036D': {
    onAdd: {
      type: 'ADD_AVAILABLE_CHARACTER',
      actions: [{ key: '024' }]
    },
    onRemove : {
      type: 'REMOVE_AVAILABLE_CHARACTER',
      actions: [{ key: '024' }]
    }
  },
  // Bane DKR
  '045': {
    onAdd: {
      type: 'ADD_AVAILABLE_CHARACTER',
      actions: [{ key: '024' }]
    },
    onRemove : {
      type: 'REMOVE_AVAILABLE_CHARACTER',
      actions: [{ key: '024' }]
    }
  },
  // Penguin Arkham City
  '007A': {
    onAdd: {
      type: 'ADD_AVAILABLE_CHARACTER',
      actions: [{ key: '024' }]
    },
    onRemove : {
      type: 'REMOVE_AVAILABLE_CHARACTER',
      actions: [{ key: '024' }]
    }
  },
  // Penguin Arkham Knight
  '151A': {
    onAdd: {
      type: 'ADD_AVAILABLE_CHARACTER',
      actions: [{ key: '024' }]
    },
    onRemove : {
      type: 'REMOVE_AVAILABLE_CHARACTER',
      actions: [{ key: '024' }]
    }
  },
  // Penguin Gotham
  '081': {
    onAdd: {
      type: 'ADD_AVAILABLE_CHARACTER',
      actions: [{ key: '024' }]
    },
    onRemove : {
      type: 'REMOVE_AVAILABLE_CHARACTER',
      actions: [{ key: '024' }]
    }
  },
  // Poison Ivy AC
  '024': {
    onAdd: {
      type: 'ADD_AVAILABLE_CHARACTER',
      actions: [{ key: '060' }]
    },
    onRemove : {
      type: 'REMOVE_AVAILABLE_CHARACTER',
      actions: [{ key: '060' }]
    }
  },
  // Poison Ivy Classic
  '068A': {
    onAdd: {
      type: 'ADD_AVAILABLE_CHARACTER',
      actions: [{ key: '060' }]
    },
    onRemove : {
      type: 'REMOVE_AVAILABLE_CHARACTER',
      actions: [{ key: '060' }]
    }
  },
  // Commissioner Gordon
  '046A': {
    onAdd: {
      type: 'ADD_AVAILABLE_CHARACTER',
      actions: [{ key: '117' }]
    },
    onRemove : {
      type: 'REMOVE_AVAILABLE_CHARACTER',
      actions: [{ key: '117' }]
    }
  },
  // Roy Harper
  '072': {
    onAdd: {
      type: 'ADD_AVAILABLE_CHARACTER',
      actions: [{ key: '125' }]
    },
    onRemove : {
      type: 'REMOVE_AVAILABLE_CHARACTER',
      actions: [{ key: '125' }]
    }
  },
  // Lt. Brandon
  '080B': {
    onAdd: {
      type: 'ADD_AVAILABLE_CHARACTER',
      actions: [{
        filter: (char) => char.crews.indexOf('lf') !== -1 && char.rank === 'Henchman',
        props: { rank : 'Henchman' }
      }]
    },
    onRemove: {
      type: 'REMOVE_AVAILABLE_CHARACTER',
      actions: [{
        filter: (char) => char.crews.indexOf('lf') !== -1 && char.rank === 'Henchman'
      }]
    }
  },
  // Commissioner Loeb
  '080A': {
    onAdd: {
      type: 'ADD_AVAILABLE_CHARACTER',
      actions: [{
        filter: (char) => char.crews.indexOf('lf') !== -1 && char.rank === 'Henchman',
        props: { rank : 'Henchman' }
      }]
    },
    onRemove: {
      type: 'REMOVE_AVAILABLE_CHARACTER',
      actions: [{
        filter: (char) => char.crews.indexOf('lf') !== -1 && char.rank === 'Henchman'
      }]
    }
  }
}
