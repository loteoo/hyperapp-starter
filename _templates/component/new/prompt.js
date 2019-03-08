
// see types of prompts:
// https://github.com/enquirer/enquirer/tree/master/examples
//
module.exports = [
  {
    type: 'input',
    name: 'name',
    message: "Component name:"
  },
  {
    type: 'select',
    name: 'type',
    message: "Choose a template:",
    choices: ['apple', 'grape', 'watermelon', 'cherry', 'orange']
  },
]
