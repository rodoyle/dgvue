import { treeStore, arrayStore } from '@deskgen/dg-store'
import _mapValues from 'lodash/mapValues'

var user = treeStore('user')
var items = arrayStore('items')

export var modules = {
  user,
  items
}

export var types = _mapValues(modules, module => module.types)
