import {Auth, Crud} from '@deskgen/dg-api'
import deskgen from 'deskgen'

var {buildConfig, authToken} = deskgen
var host = buildConfig.addresses.host || ''

var crudUrl = host + buildConfig.addresses.inventory.crud

export var crud = new Crud(crudUrl, authToken)
export var auth = new Auth(buildConfig.addresses, authToken)
