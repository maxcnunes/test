// Show loading background.
function showLoading() {
	$('.count').addClass('loading');
}

// Hide loading background.
function hideLoading() {
	$('.count').removeClass('loading');
}

// Update the task counter.
function updateTaskCount(count) {
	count = count == 0 ? "No Tasks Running" : count;
	$('.count').text(count);
}

// When document is ready create click bindings.
$(document).ready( function() {
	$('.add_task').on('click', function() {
		Socket.postTask();
	});
});

var socket = io.connect('http://maxcnunes-helloworld.maxcnunes.jit.su/');
socket.on('news', function (data) {
  alert(data);
  socket.emit('my other event', { my: 'data' });
});
socket.on('github-data', function(data) {
  //alert(JSON.stringify(data));
  //console.log(JSON.stringify(data));
  show(JSON.stringify(data));
});

function show(msg) {
  var notification = window.webkitNotifications.createNotification(
    'img/icon48.png',         // The image.
    'Github PUSH.',// The title.
    msg // The body.
  );
  notification.show();
}