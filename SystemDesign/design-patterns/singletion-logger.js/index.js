/*Advantage of using Singleton design pattern in this example is when you try to log the count of logger,
 it will print the entire logs of all components. 
But if you try to create new instance it will print the particulars component logs.*/

import logger from "./logger.js"    
import Component1 from "./component1.js"
import Component2 from "./component2.js"
Component1()
Component2()