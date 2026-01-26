"use client";

type Props = {
  color: string;
  setColor: (c: string) => void;
};

export function SparkControls({ color, setColor }: Props) {
  return (
    <label style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        style={{
          width: "2rem",
          height: "2rem",
          borderRadius: "50%",
          border: "none",
          cursor: "pointer",
        }}
      />

    </label>
  );
}
