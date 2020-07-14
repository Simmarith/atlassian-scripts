const query = require('./util/sendJiraRestRequest')

const args = process.argv
args.splice(0, 2)

query(args[0], args[1])
  .then(res => {
    console.log(res.body)
  })
  .catch(err => {
    console.log(err)
  })
