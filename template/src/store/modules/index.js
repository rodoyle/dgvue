import { treeStore, arrayStore } from '@deskgen/dg-store'
import _ from 'lodash'

var user = treeStore('user')
var items = arrayStore('items')

export var modules = {
  user,
  items
}

export var types = _.mapValues(modules, 'types')
