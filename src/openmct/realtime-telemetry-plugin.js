function RealtimeTelemetryPlugin() {
  return function (openmct) {
    const socket = new WebSocket(`ws://localhost:8080/realtime/`);
    const listener = {};

    socket.onmessage = (event) => {
      const point = JSON.parse(event.data);
      if (listener[point.id]) {
        listener[point.id](point);
      }
    };

    const provider = {
      supportsSubscribe: (domainObject) =>
        domainObject.type === "example.telemetry",
      subscribe: (domainObject, callback) => {
        listener[domainObject.identifier.key] = callback;
        socket.send("subscribe " + domainObject.identifier.key);

        return () => {
          delete listener[domainObject.identifier.key];
          socket.send("unsubscribe " + domainObject.identifier.key);
        };
      },
    };

    openmct.telemetry.addProvider(provider);
  };
}

export { RealtimeTelemetryPlugin };
