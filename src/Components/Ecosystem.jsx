import React from "react";
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  MarkerType,
} from "react-flow-renderer";

const centerX = 250;
const centerY = 250;
const radius = 150;

const products = [
  { id: "chat", label: "Chat", color: "#06b6d4" }, // cyan-500
  { id: "feeds", label: "Feeds", color: "#7c3aed" }, // purple-700
  { id: "wallet", label: "Wallet", color: "#10b981" }, // emerald-500
  { id: "accounts", label: "Accounts", color: "#f59e0b" }, // amber-500
  { id: "tournament", label: "Tournament", color: "#f43f5e" }, // rose-500
  { id: "miniApps", label: "Mini Apps", color: "#8b5cf6" }, // violet-500
];

const IymraEcosystemFlow = () => {
  // Center node for ICI
  const nodes = [
    {
      id: "ici",
      type: "default",
      data: { label: "ICI\n(Command Interface)" },
      position: { x: centerX, y: centerY },
      style: {
        width: 140,
        height: 140,
        borderRadius: "50%",
        border: "2px dashed #9ca3af",
        backgroundColor: "#f9fafb",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        whiteSpace: "pre-line",
        fontWeight: "600",
        color: "#6b7280",
        fontSize: 14,
        cursor: "default",
        userSelect: "none",
      },
      draggable: false,
    },
  ];

  // Add product nodes in a circle
  products.forEach((product, idx) => {
    const angle = (idx * 360) / products.length - 90; // start from top (-90deg)
    const rad = (angle * Math.PI) / 180;
    const x = centerX + radius * Math.cos(rad) - 60; // offset half width
    const y = centerY + radius * Math.sin(rad) - 40; // offset half height

    nodes.push({
      id: product.id,
      data: { label: product.label },
      position: { x, y },
      style: {
        background: `linear-gradient(90deg, ${product.color}, #2563eb)`, // from product color to blue
        color: "white",
        borderRadius: 16,
        width: 120,
        height: 80,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: "600",
        cursor: "pointer",
        userSelect: "none",
        boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
      },
      draggable: false,
    });
  });

  // Create edges from ICI center to all products
  const edges = products.map((product) => ({
    id: `e-ici-${product.id}`,
    source: "ici",
    target: product.id,
    type: "smoothstep",
    animated: true,
    markerEnd: {
      type: MarkerType.Arrow,
      color: "#9ca3af",
    },
    style: { stroke: "#9ca3af", strokeWidth: 2 },
  }));

  return (
    <div style={{ height: 600, width: "100%" }}>
      <ReactFlow nodes={nodes} edges={edges} fitView>
        <MiniMap
          nodeStrokeColor={(n) => {
            if (n.id === "ici") return "#9ca3af";
            return n.style?.background || "#eee";
          }}
          nodeColor={(n) => (n.id === "ici" ? "#f9fafb" : n.style?.background || "#eee")}
          nodeBorderRadius={16}
        />
        <Controls />
        <Background color="#aaa" gap={16} />
      </ReactFlow>
    </div>
  );
};

export default IymraEcosystemFlow;
