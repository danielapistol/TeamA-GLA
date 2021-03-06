$(document).ready(function(){
	var HiddenRejectFriendRequest = "HiddenRejectFriendRequest";
	var idFriendSend = 0;
	var idFriend =0;
	$("#rejectAdd").click(function(){
		idFriendSend = $("#idUser").val();
		idFriend = $("#idFriend").val();
		$.ajax({
			url : "http://localhost:8080/ggnight/FriendControl",
			method : "GET",
			dataType : "text",
			data : {
				HiddenRejectFriendRequest : HiddenRejectFriendRequest,
				idFriendSend : idFriendSend,
				idFriend : idFriend
			},
			success : function(result){
				getMsg(result);
				location.reload();
			},
			error : function(jqXHR, exception){
        		var msg = '';
                if (jqXHR.status == 0) {
                    msg = 'Not connect.\n Verify Network.';
                } else if (jqXHR.status == 404) {
                    msg = 'Requested page not found. [404]';
                } else if (jqXHR.status == 500) {
                    msg = 'Internal Server Error [500].';
                } else if (exception === 'parsererror') {
                    msg = 'Requested JSON parse failed.';
                } else if (exception === 'timeout') {
                    msg = 'Time out error.';
                } else if (exception === 'abort') {
                    msg = 'Ajax request aborted.';
                } else {
                    msg = 'Uncaught Error.\n' + jqXHR.responseText;
                }
                getError(msg);
        	}
		});
		return false;
	});
});

function getError(msg){
	alert(msg);
}
function getMsg(msg){
	alert(msg);
}