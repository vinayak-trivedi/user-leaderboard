import { VOTES } from '../mocks/votes'

export const getVotes = () => {
  return {
    success: true,
    data: VOTES
  }
}