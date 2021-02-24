import React, { useState, useEffect } from 'react'
import ConcertCard from '../.././components/concerts/ConcertCard'
import { getConcert } from '../.././actions/concerts/concerts'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

const ConcertFetcher = ({getConcert, concertId }) => {
  const [ isLoading, setIsLoading ] = useState(false)
  const [ concert ] = useState({})
  useEffect(() => {
    setIsLoading(true);
    getConcert(concertId)
    setIsLoading(false)
  }, [concertId, getConcert])
  return isLoading ? <div>Loading</div> : <ConcertCard concert={concert} />
}


const mapStateToProps = (state, ownProps) => {
  const concertId = ownProps.match.params.id
  return ({
    concertId,

  })
}


export default withRouter(connect(mapStateToProps, {getConcert})(ConcertFetcher))
