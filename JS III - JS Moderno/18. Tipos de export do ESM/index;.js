import { inline as i } from "./inline.js"
import defaultInline from './inline.js'

i()
defaultInline()

group()
exportDefault()

import { group } from "./non-inline.js"
import exportDefault from "./non-inline.js"