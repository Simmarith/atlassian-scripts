const superagent = require('superagent')

const conf = require('../conf.js')

const JIRA_HOST = conf.jira.host
const JIRA_AUTH = conf.jira.auth

const JIRA_URL = `${JIRA_HOST}rest/api/2/`
const AUTH_HEADER = `Basic ${JIRA_AUTH}`

module.exports = (method, path) => {
  let request = null
  switch (path) {
    case 'put':
      request = superagent.put(`${JIRA_URL}${path}`)
        .set('Authorization', AUTH_HEADER)
        .set('Content-Type', 'application/json')
      break
    case 'post':
      request = superagent.post(`${JIRA_URL}${path}`)
        .set('Authorization', AUTH_HEADER)
        .set('Content-Type', 'application/json')
      break
    case 'delete':
      request = superagent.delete(`${JIRA_URL}${path}`)
        .set('Authorization', AUTH_HEADER)
        .set('Content-Type', 'application/json')
      break
    default:
      request = superagent.get(`${JIRA_URL}${path}`)
        .set('Authorization', AUTH_HEADER)
        .set('Content-Type', 'application/json')
  }

  return request
}

