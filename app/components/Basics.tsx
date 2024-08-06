import { useEffect, useRef } from "react";

import Widget from "featureos-widget";

function Basic() {
  const widget = useRef<any>(null);

  useEffect(() => {
    if (!widget.current) {
      widget.current = new Widget({
        modules: ["feature_requests", "changelog"],
        type: "popover",
        theme: "light",
        token: "fxAUf3Q1XgZ-s0q8GHC71Q",
        customizations: {
          // disableBackgroundOverlay: true,
          styles: {
            headerButtonStyles: {
              // Gradient background:
              background: "linear-gradient(90deg, #FF8C00 0%, #FF0000 100%)",
              color: "white",
              borderRadius: "5px",
            },
          },
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
      <button
        id="trigger"
        onClick={() => {
          widget.current.open();
        }}
      >
        Click here!
      </button>
    </div>
  );
}

export default Basic;
