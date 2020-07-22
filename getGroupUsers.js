const fs = require('fs')
const query = require('./util/sendJiraRestRequest')

const args = process.argv
args.splice(0, 2)

let size, maxRes = undefined

query('get', `group?groupname=${args[0]}`)
  .then(res => {
    size = res.body.users.size
    maxRes = res.body.users['max-results']
    const userRequests = []
    for (var i = 0; i < size; i = i + maxRes) {
      userRequests.push(query('get', `group?groupname=${args[0]}&expand=users[${i}:${i+50}]`))
    }
    Promise.all(userRequests).then(res => {
      const chunks = res.map(chunk => chunk.body.users.items)
      const users = [].concat(...chunks)
      let userFile = 'Display Name;Username;Email\n'
      users.forEach(user => userFile += `${user.displayName};${user.key};${user.emailAddress}\n`)
      fs.writeFile(`users-${args[0]}.csv`, userFile, err => (err !== null) ? console.log(err) : console.log(`Users saved to ./users-${args[0]}.csv`))
    })
  })
  .catch(err => {
    console.log(err)
  })
