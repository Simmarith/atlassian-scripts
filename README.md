# Atlassian Scripts
this toolbox is made for quick prototyping against the rest apis of Jira and Confluence

## Installation
- `npm -i`
- copy `config.js.example` to `config.js` and fill out your information

## Usage
### Query Jira
with this feature you can easily try out the simpler endpoints of the Jira rest api. You can use this feature as follows:

`npm run queryJira <method> <endpoint>`

We automatically assume that you want to use the newest jira software api located at `api/2/` if you want to therefore list all projects you'd send `npm run queryJira get project`
### Get Group Users
This command will write all users of the specified group into one csv at your project base.

`npm run getGroupUsers <groupname>`

the file will be called `users-<groupname>.csv`, but the script should tell you so as well when it's done
### Write your own stuff
you can just import the util functions and code away. So far there is no index.js in this project so your script can comfortably reside there.
