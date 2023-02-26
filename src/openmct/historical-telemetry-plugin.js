/**
 * Basic historical telemetry plugin.
 */

import axios from "axios";

function HistoricalTelemetryPlugin() {
  return function install(openmct) {
    var provider = {
      supportsRequest: function (domainObject) {
        return domainObject.type === "example.telemetry";
      },
      request: function (domainObject, options) {
        const localhost = "http://localhost:8080";
        var url =
          localhost +
          "/history/" +
          domainObject.identifier.key +
          "?start=" +
          options.start +
          "&end=" +
          options.end;

        return axios.get(url).then(function (resp) {
          return resp.data;
        });
      },
    };

    openmct.telemetry.addProvider(provider);
  };
}

export { HistoricalTelemetryPlugin };
