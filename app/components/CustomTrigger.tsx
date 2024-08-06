import { useEffect, useRef } from "react";

import Widget from "featureos-widget";

function CustomTrigger() {
  const widget = useRef<any>(null);

  useEffect(() => {
    if (!widget.current) {
      widget.current = new Widget({
        modules: ["feature_requests", "changelog"],
        type: "popover",
        openFrom: "right",
        theme: "dark",
        enableIndicator: true,
        showChangelogIndicator: true,
        selector: "#trigger",
        token: "GEdHL0YpM430Gc0Ch-Tr2w",
        postOnBehalf: {
          email: "varun@example.com",
          name: "Varun",
          add_as_customer: true,
        },
        customizations: {
          indicatorColor: "#000",
        },
        onInitialized: () => {
          console.log("onInitialized");
        },
      });

      widget.current.init();
    }
  }, []);

  return (
    <div>
      <button id="trigger">Custom Trigger</button>
    </div>
  );
}

export default CustomTrigger;
