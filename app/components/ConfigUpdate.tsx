import { useEffect, useRef } from "react";

import Widget from "featureos-widget";

function CustomTrigger() {
  const widget = useRef<any>(null);

  useEffect(() => {
    if (!widget.current) {
      widget.current = new Widget({
        modules: ["feature_requests"],
        type: "modal",
        openFrom: "right",
        theme: "dark",
        selector: "#trigger",
        token: "4mMwHJMijQ2ihlGu9-AGRQ",
        jwtToken:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJhdmkuZGFua2hhcmEud2Vlbmdnc0BnbWFpbC5jb20iLCJuYW1lIjoiUmF2aV9EYW5raGFyYSIsImxhYmVscyI6WyJVbmxpbWl0ZWQiXSwiaWF0IjoxNzIyOTQ2MTI2fQ.HoJe4r1knznrCtMjgzpAkcCI-huVTNiRrxFcBx-GW9A",
        showOnlySubmission: true,
        placement: "right",
        noDefaultTrigger: true,
        suggestSimilarPost: true,
        neverExpand: true,
      });

      widget.current.init();
    }
  }, []);

  const setWidgetBucketId = (bucketId: number | any) => {
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
      widget.current.open();
    }
  };

  return (
    <div className="flex gap-3">
      <button
        onClick={() => setWidgetBucketId(5219)}
        className="p-2 border bg-[#223558] text-white hover:bg-[#223558b3] rounded-md"
      >
        Bills Bucket
      </button>
      <button
        onClick={() => setWidgetBucketId(5214)}
        className="p-2 border bg-[#223558] text-white hover:bg-[#223558b3] rounded-md"
      >
        Permits Bucket
      </button>
    </div>
  );
}

export default CustomTrigger;
