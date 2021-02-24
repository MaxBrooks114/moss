export const updateConcertSearchForm = (name, value) => {
  const artist = { name, value }
  return {
    type: "UPDATE_CONCERT_SEARCH_FORM",
    artist
  }
}

export const resetConcertSearchForm = () => {
  return {
    type: "RESET_CONCERT_SEARCH_FORM",
  }
}
