import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Sewrio — AI-Powered Sewing Patterns & Fashion Platform";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  const logo = await readFile(join(process.cwd(), "public/images/logo.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#000000",
        }}
      >
        <img src={logoSrc} width={160} height={160} alt="" />
        <div
          style={{
            marginTop: 32,
            fontSize: 88,
            fontWeight: 600,
            letterSpacing: 4,
            color: "#ffffff",
          }}
        >
          SEWRIO
        </div>
        <div
          style={{
            marginTop: 20,
            fontSize: 30,
            color: "rgba(255,255,255,0.6)",
          }}
        >
          AI-powered digital sewing pattern & fashion platform
        </div>
      </div>
    ),
    { ...size },
  );
}
