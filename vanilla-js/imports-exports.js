/*import*/
//app.js
/*will only import default */
import person from './person.js'
import prs from './person.js' // as export is default this prs doesnt matter

import {baseData} from './utility.js'
import {clean} from './utility.js'

/*Import all as bundle*/
import * as bundled from './utility.js'