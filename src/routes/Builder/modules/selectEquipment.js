// Constants
export const SELECT_EQUIPMENT = 'SELECT_EQUIPMENT'

// Actions
export function selectEquipment (equipment = { key: 'unknown', name: 'unknown' }) {
  return {
    type: SELECT_EQUIPMENT,
    equipment: equipment
  }
}
