export function bodyRequest(type) {
  switch(type) {
    case 'getStakedMonstersIdRpc':
      return {isStaked: false}
    case 'claimedByMonthsRpc':
      return {currency: 'lmt'}
    default:
      return {}
  }
}