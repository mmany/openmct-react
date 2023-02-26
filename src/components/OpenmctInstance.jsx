import openmct from "openmct/dist/openmct";
import { useEffect } from "react";
import { DictionaryPlugin } from "../openmct/DictionaryPlugin";
import { HistoricalTelemetryPlugin } from "../openmct/historical-telemetry-plugin";
import { RealtimeTelemetryPlugin } from "../openmct/realtime-telemetry-plugin";

function OpenmctInstance() {
  useEffect(() => {
    openmct.setAssetPath("node_modules/openmct/dist");
    openmct.install(openmct.plugins.LocalStorage());
    openmct.install(openmct.plugins.MyItems());
    openmct.install(openmct.plugins.UTCTimeSystem());
    openmct.time.clock("local", { start: -15 * 60 * 1000, end: 0 });
    openmct.time.timeSystem("utc");
    openmct.install(openmct.plugins.Espresso());

    openmct.install(DictionaryPlugin());
    openmct.install(HistoricalTelemetryPlugin());
    openmct.install(RealtimeTelemetryPlugin());

    openmct.start();
  }, []);
  return <></>;
}

export { OpenmctInstance };
