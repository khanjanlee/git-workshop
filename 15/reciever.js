var amqp = require('amqplib/callback_api');

queue_x = "Developement"
amqp.connect('amqp://localhost', (err, con) =>{
  if (err) {
    console.log(err)
  }
  con.createChannel(function(err, channel) {
    if (err) {
        console.log(err);
    }
    var queue = queue_x;

    channel.assertQueue(queue, {
      durable: false
    });
    console.log("Waiting ....", queue);
    channel.consume(queue, function(msg) {
    console.log(" Message Recieved:  Received %s", msg.content.toString());
        }, {
            noAck: true
    });
    });
  
});

