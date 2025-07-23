class Logger {
 constructor() {
  if (Logger.instance === null) {
   this.log = []
   Logger.instance = this // Create New instance
  }
  return Logger.instance // Return same instance
 }
 log(message) {
  this.log.push(message)
 }
 printLogCount() {
  console.log(`${this.logs.length} Logs`)
 }
}

const logger = new Logger()
// It just freeze the Object so that another function or variible can't be added
Object.freeze()
export default logger