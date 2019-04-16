import _ from 'lodash'
import printMe from './print.js'

function component() {
  let element = document.createElement('div')
  const btn = document.createElement('button')

  element.innerHTML = _.join(['Hello', 'webpack', 'yo'], ' ')

  btn.innerHTML = 'click me and check the console'
  btn.onClick = printMe

  element.appendChild(btn)

  return element
}

document.body.appendChild(component())