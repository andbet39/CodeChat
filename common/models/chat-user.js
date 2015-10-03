module.exports = function(ChatUser) {
	
	ChatUser.joinroom = function(room_id,user_id, cb) {
		console.log("joinroom remote");
	    ChatUser.app.models.Room.findById(room_id,function(err,room){
	    		ChatUser.findById(user_id,function(err,data){
					data.joinedrooms.add(room,function(err,res){
					cb();
				});
			});
	    });
	   };
 
	  ChatUser.remoteMethod('joinroom', {
	    accepts: [
	      {arg: 'room_id', type: 'string'},
	      {arg: 'user_id', type: 'string'}
	     ],
	    returns: {arg: 'success', type: 'boolean'},
	    http: {path:'/joinroom', verb: 'post'}
	  });
};
