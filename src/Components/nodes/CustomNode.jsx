// components/nodes/CustomNode.tsx
"use client";

import { Handle, Position } from "reactflow";
import { cn } from "@/lib/utils"; // Utility for merging classNames

const shapeClasses = {
  cylinder: "rounded-full px-6 py-4 border-4 border-white/30 shadow-inner",
  card: "rounded-xl px-6 py-4 shadow-md",
  cube: "rotate-3 border-2 border-white/20 px-4 py-4",
  badge: "rounded-full px-6 py-3 shadow-inner border border-white/10",
  block: "border-2 border-white/20 rounded-md px-6 py-4 shadow-lg",
};

const CustomNode = ({ data }) => {
  const Icon = data.icon;
  return (
    <div
      className={cn(
        `bg-gradient-to-br ${data.color} text-white font-medium text-sm flex flex-col items-center justify-center transition-transform duration-300 transform hover:scale-105`,
        shapeClasses[data.shape] || shapeClasses.card
      )}
    >
      {Icon && <Icon className="w-6 h-6 mb-1 opacity-90" />}
      <div>{data.label}</div>
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};

export default CustomNode;
