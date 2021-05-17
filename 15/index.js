var amqp = require('amqplib/callback_api');

queue_x = "Developement"


amqp.connect('amqp://localhost', (err,con)=>{
  if (err) {
    console.log(err)
  }
  con.createChannel(function(err, channel) {
    if (err) {
      console.log(err)
    }
    var queue = queue_x
    var msg = 'Messeage push try to developement'

    channel.assertQueue(queue, {
      durable: false
    });

    channel.sendToQueue(queue, Buffer.from(msg))
    console.log(`Successfully Sent MSG : ${msg}`)
  });
});