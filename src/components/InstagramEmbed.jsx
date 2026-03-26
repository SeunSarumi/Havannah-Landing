// InstagramEmbed.jsx
import { useEffect } from "react";

export default function InstagramEmbed({ url }) {
  useEffect(() => {
    // Load the script only once
    if (!document.getElementById("instagram-embed-script")) {
      const script = document.createElement("script");
      script.id = "instagram-embed-script";
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        window.instgrm?.Embeds.process();
      };
    } else {
      // Script already loaded, just reprocess
      window.instgrm?.Embeds.process();
    }
  }, [url]); // re-runs if the url changes

  return (
    <blockquote
      className="instagram-media"
      data-instgrm-permalink={url}
      data-instgrm-version="14"
      style={{ margin: "0 auto" }}
    />
  );
}
