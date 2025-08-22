// src/components/ContactSaveButton.tsx - Production Ready
"use client";

import type { User } from "@/lib/db";
import { Download, Info } from "lucide-react";
import { useState } from "react";

interface Props {
  user: User;
  className?: string;
  style?: React.CSSProperties;
}

export default function ContactSaveButton({ user, className, style }: Props) {
  const [showInstructions, setShowInstructions] = useState(false);

  const createVCard = () => {
    return `BEGIN:VCARD
VERSION:3.0
FN:${user.name}
N:${user.name.split(" ").reverse().join(";")}
ORG:${user.company || ""}
TITLE:${user.title || ""}
TEL;TYPE=WORK,VOICE:${user.phone || ""}
EMAIL;TYPE=WORK:${user.email || ""}
URL:${user.website || ""}
ADR;TYPE=WORK:;;${user.officeAddress || ""};;;;
NOTE:${user.bio || ""}
END:VCARD`;
  };

  const handleSaveContact = () => {
    const vCard = createVCard();

    // Detect device type
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isAndroid = /Android/.test(navigator.userAgent);

    if (isIOS) {
      // iOS: Create data URL and open in new window
      const dataUrl = `data:text/vcard;charset=utf-8,${encodeURIComponent(
        vCard
      )}`;
      const newWindow = window.open(dataUrl, "_blank");

      if (newWindow) {
        // Show instructions after a brief delay
        setTimeout(() => {
          setShowInstructions(true);
          setTimeout(() => setShowInstructions(false), 5000);
        }, 500);
      }
    } else if (isAndroid) {
      // Android: Create blob and trigger download
      const blob = new Blob([vCard], { type: "text/vcard;charset=utf-8" });
      const url = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = `${user.name.replace(/\s+/g, "_")}.vcf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      // Show Android instructions
      setShowInstructions(true);
      setTimeout(() => setShowInstructions(false), 4000);
    } else {
      // Desktop: Use API route
      window.location.href = `/api/vcard/${user.handle}`;
    }
  };

  return (
    <div className="relative">
      <button onClick={handleSaveContact} style={style} className={className}>
        <Download className="h-6 w-6 mr-3 relative z-10 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
        <span className="relative z-10 tracking-wide">Save contact</span>
      </button>

      {/* Instructions Modal */}
      {showInstructions && (
        <div className="absolute top-full left-0 right-0 mt-2 p-4 bg-white rounded-2xl shadow-2xl border-2 border-blue-200 z-50 animate-in slide-in-from-top-2">
          <div className="flex items-start gap-3">
            <Info className="h-5 w-5 text-blue-500 mt-0.5 shrink-0" />
            <div className="text-sm">
              {/iPad|iPhone|iPod/.test(navigator.userAgent) ? (
                <div>
                  <p className="font-semibold text-blue-800 mb-1">
                    📱 Next Steps:
                  </p>
                  <p className="text-blue-700">
                    Tap <strong>Share</strong> →{" "}
                    <strong>Add to Contacts</strong> to save
                  </p>
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
