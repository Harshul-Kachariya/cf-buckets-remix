import { useEffect, useRef, useState } from "react";

import Widget from "featureos-widget";

function CustomTrigger() {
  const [bucketId, setBucketId] = useState<number | any>(null);
  const widget = useRef<any>(null);

  useEffect(() => {
    if (!widget.current) {
      widget.current = new Widget({
        modules: ["feature_requests", "changelog"],
        type: "modal",
        openFrom: "right",
        theme: "dark",
        selector: "#trigger",
        token: "fxAUf3Q1XgZ-s0q8GHC71Q",
        onInitialized: () => {
          console.log("onInitialized");
        },
      });

      widget.current.init();
    }
  }, []);

  useEffect(() => {
    if (widget.current) {
      let submissionBucketIds: any[] = [];

      if (bucketId) {
        submissionBucketIds = [bucketId];
      }

      if (!submissionBucketIds) {
        return;
      }

      widget.current.updateConfig({
        postFilters: !!bucketId
          ? {
              bucket_id: submissionBucketIds,
            }
          : undefined,
        submissionBucketIds: bucketId ? submissionBucketIds : undefined,
      });
    }
  }, [bucketId]);

  return (
    <div className="flex gap-3">
      <button
        id="trigger"
        className="p-2 border bg-[#223558] text-white hover:bg-[#223558b3] rounded-md hover:"
      >
        Custom Trigger
      </button>

      <button
        onClick={() => {
          setBucketId(9443);
        }}
        className="p-2 border bg-[#223558] text-white hover:bg-[#223558b3] rounded-md"
      >
        Feedback Bucket
      </button>
      <button
        onClick={() => {
          setBucketId(15420);
        }}
        className="p-2 border bg-[#223558] text-white hover:bg-[#223558b3] rounded-md"
      >
        Suggestions Bucket
      </button>
      <button
        onClick={() => {
          setBucketId(null);
        }}
        className="p-2 border bg-[#223558] text-white hover:bg-[#223558b3] rounded-md"
      >
        All Bucket
      </button>
    </div>
  );
}

export default CustomTrigger;
