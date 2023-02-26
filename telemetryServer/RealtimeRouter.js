import express from "express";

function RealtimeRouter(spacecraft) {
  var router = express.Router();

  router.ws("/", function (ws) {
    var unlisten = spacecraft.listen(notifySubscribers);
    var subscribed = {}; // Active subscriptions for this connection
    var handlers = {
      // Handlers for specific requests
      subscribe: function (id) {
        subscribed[id] = true;
      },
      unsubscribe: function (id) {
        delete subscribed[id];
      },
    };

    function notifySubscribers(point) {
      if (subscribed[point.id]) {
        ws.send(JSON.stringify(point));
      }
    }

    // Listen for requests
    ws.on("message", function (message) {
      var parts = message.split(" "),
        handler = handlers[parts[0]];
      if (handler) {
        handler.apply(handlers, parts.slice(1));
      }
    });

    // Stop sending telemetry updates for this connection when closed
    ws.on("close", unlisten);
  });

  return router;
}

export { RealtimeRouter };
