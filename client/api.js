import request from 'superagent'

export function getSeasons(callback) {
  request
    .get('/api-v1/')
    .end((err, res) => {
      err ? callback(err) : callback(res.body)
    })
}

export function getCircuits(callback) {
  request
    .get('/api-v1/circuits')
    .end((err, res) => {
      err ? callback(err) : callback(res.body)
    })
}

export function getRaces(id, callback) {
  request
    .get(`/api-v1/season/${id}`)
    .end((err, res) => {
      err ? callback(err) : callback(res.body)
    })
}

export function getQuali(seasonId, raceId, callback) {
  request
    .get(`/api-v1/season/${seasonId}/${raceId}/qualifying`)
    .end((err, res) => {
      err ? callback(err) : callback(res.body)
    })
}

export function getGrid(seasonId, raceId, callback) {
  request
    .get(`/api-v1/season/${seasonId}/${raceId}/grid`)
    .end((err, res) => {
      err ? callback(err) : callback(res.body)
    })
}

export function getVisData(seasonId, raceId, callback) {
  request
    .get(`/api-v1/season/${seasonId}/${raceId}/visualise`)
    .end((err, res) => {
      err ? callback(err) : callback(res.body)
    })
}

export function getRaceDetails(seasonId, raceId, callback) {
  request
    .get(`/api-v1/season/${seasonId}/${raceId}/race-details`)
    .end((err, res) => {
      err ? callback(err) : callback(res.body)
    })
}

export function getRaceResults(seasonId, raceId, callback) {
  request
    .get(`/api-v1/season/${seasonId}/${raceId}/results`)
    .end((err, res) => {
      err ? callback(err) : callback(res.body)
    })
}