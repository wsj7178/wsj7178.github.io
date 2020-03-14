/* eslint-disable no-console */
const Log = {}

if (process.env.NODE_ENV !== 'production') {
  Log.assert = console.assert
  Log.clear = console.clear
  Log.count = console.count
  Log.countReset = console.countReset
  Log.debug = console.debug
  Log.dir = console.dir
  Log.dirxml = console.dirxml
  Log.error = console.error
  Log.exception = console.exception
  Log.group = console.group
  Log.groupCollapsed = console.groupCollapsed
  Log.groupEnd = console.groupEnd
  Log.info = console.info
  Log.log = console.log
  Log.profile = console.profile
  Log.profileEnd = console.profileEnd
  Log.table = console.table
  Log.time = console.time
  Log.timeEnd = console.timeEnd
  Log.timeStamp = console.timeStamp
  Log.trace = console.trace
  Log.warn = console.warn
} else {
  const emptyFunc = () => {}
  Log.assert = emptyFunc
  Log.clear = emptyFunc
  Log.count = emptyFunc
  Log.countReset = emptyFunc
  Log.debug = emptyFunc
  Log.dir = emptyFunc
  Log.dirxml = emptyFunc
  Log.error = emptyFunc
  Log.exception = emptyFunc
  Log.group = emptyFunc
  Log.groupCollapsed = emptyFunc
  Log.groupEnd = emptyFunc
  Log.info = emptyFunc
  Log.log = emptyFunc
  Log.profile = emptyFunc
  Log.profileEnd = emptyFunc
  Log.table = emptyFunc
  Log.time = emptyFunc
  Log.timeEnd = emptyFunc
  Log.timeStamp = emptyFunc
  Log.trace = emptyFunc
  Log.warn = emptyFunc
}

export default Log
