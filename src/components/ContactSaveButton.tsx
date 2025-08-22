// src/components/ContactSaveButton.tsx

"use client";

import type { User } from "@/lib/db";
import { Download, Info, Share } from "lucide-react";
import { useState } from "react";

interface Props {
  user: User;
  className?: string;
  style?: React.CSSProperties;
}

export default function ContactSaveButton({ user, className, style }: Props) {
  const [showInstructions, setShowInstructions] = useState(false);

  const handleSaveContact = () => {
    // Detect device type
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isAndroid = /Android/.test(navigator.userAgent);

    if (isIOS) {
      // iOS: Use API route that serves proper headers
      window.open(`/api/vcard/${user.handle}`, "_blank");

      // Show iOS-specific instructions
      setTimeout(() => {
        setShowInstructions(true);
        setTimeout(() => setShowInstructions(false), 8000);
      }, 1000);
    } else if (isAndroid) {
      // Android: Direct download works well
      const link = document.createElement("a");
      link.href = `/api/vcard/${user.handle}`;
      link.download = `${user.name.replace(/\s+/g, "_")}.vcf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Show Android instructions
      setShowInstructions(true);
      setTimeout(() => setShowInstructions(false), 4000);
    } else {
      // Desktop: Standard download
      window.location.href = `/api/vcard/${user.handle}`;
    }
  };

  return (
    <div className="relative">
      <button onClick={handleSaveContact} style={style} className={className}>
        <Download className="h-6 w-6 mr-3 relative z-10 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
        <span className="relative z-10 tracking-wide">Save contact</span>
      </button>

      {/* Enhanced Instructions Modal */}
      {showInstructions && (
        <div className="absolute top-full left-0 right-0 mt-2 p-4 bg-white rounded-2xl shadow-2xl border-2 border-blue-200 z-50 animate-in slide-in-from-top-2">
          <div className="flex items-start gap-3">
            <Info className="h-5 w-5 text-blue-500 mt-0.5 shrink-0" />
            <div className="text-sm">
              {/iPad|iPhone|iPod/.test(navigator.userAgent) ? (
                <div>
                  <p className="font-semibold text-blue-800 mb-2">
                    📱 iOS Instructions:
                  </p>
                  <div className="space-y-1 text-blue-700">
                    <p>
                      1. Tap the <strong>Share</strong> button{" "}
                      <Share className="inline h-4 w-4" />
                    </p>
                    <p>
                      2. Select <strong>&quot;Add to Contacts&quot;</strong>
                    </p>
                    <p>
                      3. Tap <strong>&quot;Create New Contact&quot;</strong>
                    </p>
                    <p>
                      4. Tap <strong>&quot;Done&quot;</strong> to save
                    </p>
                  </div>
                </div>
              ) : (
                <div>
                  <p className="font-semibold text-green-800 mb-1">
                    📱 Contact Downloaded!
                  </p>
                  <p className="text-green-700">
                    Open the downloaded file to add to contacts
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
