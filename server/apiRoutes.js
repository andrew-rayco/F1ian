// part of the great api experiment of 1 July, 2017
// var express = require('express')
// var router = express.Router()

let request = require('superagent')

let functions = require('./functions')

const url = 'http://ergast.com/api/f1/'

function getSeasons(callback) {
  request
    .get('http://ergast.com/api/f1/seasons.json?limit=80')
    .end((err, result) => {
      if(err) {
        console.log(err)
      } else {
        callback(result.body)
      }
  })
}

function getGrid(season, raceRound, callback) {
  // e.g. http://ergast.com/api/f1/2017/15/results.json
  request
    .get(url + season + '/' + raceRound + '/results.json?limit=60')
    .end((err, result) => {
      if(err) {
        console.log(err)
      } else {
        let data = result.body.MRData.RaceTable.Races[0]
        let strippedResults = []
        data.Results.map((result) => {
          // Take only what we need from each result and add to strippedResults
          strippedResults.push({
            grid: result.grid,
            driverUrl: result.Driver.url,
            forename: result.Driver.givenName,
            surname: result.Driver.familyName,
            constructorUrl: result.Constructor.url,
            constructorName: result.Constructor.name
          })
        })

        strippedResults.sort(functions.compareGridPos)

        let cleanData = {
          raceName: data.raceName,
          year: data.season,
          gridData: strippedResults
        }

        callback(cleanData)
      }
  })
}

function getQualifying(season, raceRound, callback) {
  // e.g. http://ergast.com/api/f1/2017/10/qualifying.json
  request
    .get(url + season + '/' + raceRound + '/qualifying.json?limit=60')
    .end((err, result) => {
      if(err) {
        console.log(err);
      } else {
        let data = result.body.MRData.RaceTable.Races[0]
        let qualiResults = []
        data.QualifyingResults.map((result) => {
          qualiResults.push({
            position: result.position,
            driverUrl: result.Driver.url,
            forename: result.Driver.givenName,
            surname: result.Driver.familyName,
            constructorUrl: result.Constructor.url,
            constructorName: result.Constructor.name,
            q1: result.Q1,
            q2: result.Q2,
            q3: result.Q3
          })
        })

        let cleanQualiData = {
          raceName: data.raceName,
          year: data.season,
          qualifyingData: qualiResults
        }

        callback(cleanQualiData)
      }
    })
}

module.exports = {
  getSeasons,
  getGrid,
  getQualifying
}
