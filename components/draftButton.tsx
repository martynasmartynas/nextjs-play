"use client";

import { disableDraftMode } from "@/app/actions/disableDraftMode";

export const DraftButton = ({ isEnabled }: { isEnabled: boolean }) => {
  return isEnabled ? (
    <button
      onClick={async () => {
        await disableDraftMode();
      }}
      className="bg-red-600 text-white text-center p-2 inline-block rounded absolute top-10 left-2 z-40"
    >
      Disable preview mode
    </button>
  ) : null;
};
