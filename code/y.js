const events = require('events');
var eventObject = new events.EventEmitter();
// register an event
// eventObject.once('dbconnectionopen',()=>{
//     console.log('DB Connection Open Event Occur');
// });
eventObject.on('dbconnectionopen',()=>{
    console.log('DB Connection Open Event Occur');
});
// Call an Event
eventObject.emit('dbconnectionopen');
eventObject.removeListener('dbconnectionopen'); // UnRegister
eventObject.emit('dbconnectionopen');
eventObject.emit('dbconnectionopen');
