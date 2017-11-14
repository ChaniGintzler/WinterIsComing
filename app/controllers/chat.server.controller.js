// // Create the chat configuration
// module.exports = function(io, socket) {
// 	// Emit the status event when a new socket client is connected
//     io.emit('chatMessage', {
//         type: 'status',
//         text: 'connected',
//         created: Date.now(),
//         username: socket.request.user.username
//     });

//     // Send a chat messages to all connected sockets when a message is received 
//     socket.on('chatMessage', (message) => {
//         message.type = 'message';
//         message.created = Date.now();
//         message.username = socket.request.user.username;

//         // Emit the 'chatMessage' event
//         io.emit('chatMessage', message);
//     });

//     // Emit the status event when a socket client is disconnected
//     socket.on('disconnect', () => {
//         io.emit('chatMessage', {
//             type: 'status',
//             text: 'disconnected',
//             created: Date.now(),
//             username: socket.request.user.username
//         });
//     });
// };





const mongoose = require('mongoose');

// const chat = mongoose.model('chat');
//const Notification = mongoose.model('Notification');

var allSocket = {};

module.exports = function (io, socket) {

  var user_id = socket.request.user._id;
  allSocket[user_id] = socket;

  // Emit the status event when a new socket client is connected
  io.emit('chatMessage', {
      type: 'status',
      text: 'connected',
      created: Date.now(),
      username: socket.request.user.username
  });

//   socket.on('NotificationOrderRequest', (message) => {
//       message.type = 'message';
//       message.created = Date.now();
//       message.username = socket.request.user.username;


//       var forUser = message.user;

//       if(forUser!= socket.request.user._id){
//           if (allSocket[forUser] && allSocket[forUser] != null ) {
//               socket.broadcast.to(allSocket[forUser].id).emit('NoteOrderRequest', message);
//           }

//           saveNotification(socket.request.user._id,forUser,message.articleId,message.text,'New Request', 1,message.orderId);
         
//       }
//   });

//  socket.on('NotificationOrderResponse', (message) => {
//       message.type = 'message';
//       message.created = Date.now();
//       message.username = socket.request.user.username;

//       var forUser = message.user;
//       if (allSocket[forUser] && allSocket[forUser] != null && forUser!= socket.request.user._id) {
//           socket.broadcast.to(allSocket[forUser].id).emit('NoteOrderResponse', message);
//       }
//   });



  // Send a chat messages to all connected sockets when a message is received 
  socket.on('chatMessage', (message) => {
      message.type = 'message';
      message.created = Date.now();
      message.username = socket.request.user.username;

      var forUser = message.user;
      console.log(message)
//    // Emit the 'chatMessage' event
     //  io.emit('chatMessage', message);
//console.log(allSocket);


      if (allSocket[forUser] && allSocket[forUser] != null) {
          // io.to(allSocket[forUser].id).emit('userMessage', message);
        //  socket.to(allSocket[forUser].id).emit('userMessage', message);
         
          socket.broadcast.to(allSocket[forUser].id).emit('userMessage', message);
          console.log('I sent it to '+allSocket[forUser].id);
          console.log('I sent it to '+forUser);
      }
  });

  // Emit the status event when a socket client is disconnected
  socket.on('disconnect', () => {
      io.emit('chatMessage', {
          type: 'status',
          text: 'disconnected',
          created: Date.now(),
          username: socket.request.user.username
      });
  });

//   function saveNotification(userIdRequest,userIdOwn,articleId,msg,title,type,orderId ){
  
//   var notification = new Notification();

//   // Set the article's 'creator' property
//   notification.userIdRequest = userIdRequest;
//   notification.userIdOwn = userIdOwn;
//    notification.articleId = articleId;
//    notification.msg = msg;
//    notification.title= title;
//     notification.typeNotification = type;
//     notification.orderId=orderId;

//   // Try saving the article
//   notification.save((err) => {
//       if (err) {
//           // If an error occurs send the error message
//           // return res.status(400).send({
//           //     message: getErrorMessage(err)
//           // });
//       } else {
         
//           // Send a JSON representation of the article 
//           // res.json(article);
//       }
//   });

// }
};