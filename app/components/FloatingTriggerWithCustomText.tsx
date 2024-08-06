import { useEffect, useRef } from "react";

import Widget from "featureos-widget";

function FloatingTriggerWithCustomText() {
  const widget = useRef<any>(null);

  useEffect(() => {
    if (!widget.current) {
      widget.current = new Widget({
        modules: ["feature_requests", "changelog"],
        type: "popover",
        openFrom: "right",
        theme: "dark",
        token: "GEdHL0YpM430Gc0Ch-Tr2w",
        triggerText: "Submit Feedback",
        placement: "left",
        onInitialized: () => {
          console.log("onInitialized");
        },
      });

      widget.current.init();
    }
  }, []);

  return <div></div>;
}

export default FloatingTriggerWithCustomText;
