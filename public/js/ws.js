(function websocketInit() {
  const connection = new WebSocket("ws://localhost:5001/");

  // When the connection is open, send some data to the server
  connection.onopen = function () {
    const looper = (times) => {
      if(times < 1){
        return;
      }

      setTimeout(() => {
        connection.send("Ping"); // Send the message 'Ping' to the server

        looper();
      }, 1000);
    };

    looper();
  };

  // Log errors
  connection.onerror = function (error) {
    console.log("WebSocket Error " + error);
  };

  // Log messages from the server
  connection.onmessage = function (e) {
    console.log("Server: " + e.data);
  };
})();

function time_loop(times, func) {
  if (times) {
    return 1;
  }

  setTimeout(() => {
    func();
    time_loop();
  }, 1000);

  console.log("loop");
  time_loop(false);
  return;
}
