// components/ArchitectureFlow.tsx
"use client";

import { motion } from "framer-motion";
import {
  AppWindow,
  BadgeCheck,
  Blocks,
  Cloud,
  Database,
  Folder,
  MessageCircle,
  Newspaper,
  Shield,
  Smartphone,
  Trophy,
  UserCircle,
  Users,
  Wallet,
} from "lucide-react";
import ReactFlow, {
  addEdge,
  Background,
  Controls,
  MiniMap,
  ReactFlowProvider,
  useEdgesState,
  useNodesState,
} from "reactflow";
import "reactflow/dist/style.css";
import CustomNode from "../nodes/CustomNode";

const nodeTypes = {
  custom: CustomNode,
};

// ... existing imports and setup ...

const initialNodes = [
  // Top Row
  {
    id: "user",
    position: { x: 50, y: 20 },
    data: { label: "User Device", icon: Smartphone, color: "from-blue-400 to-blue-600", shape: "badge" },
    type: "custom",
  },
  {
    id: "gateway",
    position: { x: 220, y: 20 },
    data: { label: "Access Gateway", icon: Shield, color: "from-gray-400 to-gray-700", shape: "cube" },
    type: "custom",
  },
  {
    id: "ici",
    position: { x: 400, y: 20 },
    data: { label: "ICI Layer", icon: Cloud, color: "from-cyan-400 to-teal-400", shape: "cube" },
    type: "custom",
  },

  // Middle Row
  {
    id: "identity",
    position: { x: 50, y: 180 },
    data: { label: "Identity Layer", icon: BadgeCheck, color: "from-purple-500 to-indigo-500", shape: "badge" },
    type: "custom",
  },
  {
    id: "wallet",
    position: { x: 220, y: 180 },
    data: { label: "Wallet Service", icon: Wallet, color: "from-emerald-400 to-green-600", shape: "card" },
    type: "custom",
  },
  {
    id: "storage",
    position: { x: 400, y: 180 },
    data: { label: "Distributed Storage", icon: Database, color: "from-yellow-400 to-orange-500", shape: "cylinder" },
    type: "custom",
  },
  {
    id: "notification",
    position: { x: 580, y: 180 },
    data: { label: "Notification Broker", icon: MessageCircle, color: "from-amber-400 to-rose-500", shape: "badge" },
    type: "custom",
  },

  // App Services Row
  {
    id: "chat",
    position: { x: 50, y: 320 },
    data: { label: "Chat", icon: MessageCircle, color: "from-cyan-400 to-blue-500", shape: "card" },
    type: "custom",
  },
  {
    id: "feeds",
    position: { x: 180, y: 320 },
    data: { label: "Feeds", icon: Newspaper, color: "from-purple-500 to-indigo-600", shape: "card" },
    type: "custom",
  },
  {
    id: "accounts",
    position: { x: 310, y: 320 },
    data: { label: "Accounts", icon: UserCircle, color: "from-amber-400 to-yellow-500", shape: "card" },
    type: "custom",
  },
  {
    id: "miniApps",
    position: { x: 440, y: 320 },
    data: { label: "Mini Apps", icon: AppWindow, color: "from-violet-500 to-indigo-500", shape: "card" },
    type: "custom",
  },
  {
    id: "tournament",
    position: { x: 570, y: 320 },
    data: { label: "Tournament", icon: Trophy, color: "from-rose-500 to-pink-600", shape: "card" },
    type: "custom",
  },
  {
    id: "analytics",
    position: { x: 700, y: 320 },
    data: { label: "Analytics Layer", icon: BadgeCheck, color: "from-cyan-400 to-indigo-500", shape: "block" },
    type: "custom",
  },

  // Blockchain Layer
  {
    id: "blockchain",
    position: { x: 220, y: 450 },
    data: { label: "Blockchain Network", icon: Blocks, color: "from-indigo-500 to-violet-600", shape: "block" },
    type: "custom",
  },

  // Infrastructure Layer
  {
    id: "ipfs",
    position: { x: 50, y: 580 },
    data: { label: "IPFS Network", icon: Folder, color: "from-pink-400 to-rose-500", shape: "cube" },
    type: "custom",
  },
  {
    id: "p2p",
    position: { x: 220, y: 580 },
    data: { label: "P2P Network", icon: Users, color: "from-teal-400 to-emerald-500", shape: "cube" },
    type: "custom",
  },

  // Security Layer
  {
    id: "security",
    position: { x: 400, y: 580 },
    data: { label: "Security Layer", icon: Shield, color: "from-gray-600 to-gray-900", shape: "block" },
    type: "custom",
  },
];

const initialEdges = [
  // User flow
  { id: "e0", source: "user", target: "gateway" },
  { id: "e1", source: "gateway", target: "ici" },
  
  // ICI connections
  { id: "e2", source: "ici", target: "identity" },
  { id: "e3", source: "ici", target: "wallet" },
  { id: "e4", source: "ici", target: "storage" },
  { id: "e5", source: "ici", target: "notification" },
  
  // Notification to apps
  { id: "e10", source: "notification", target: "chat" },
  { id: "e11", source: "notification", target: "feeds" },
  { id: "e12", source: "notification", target: "accounts" },
  { id: "e13", source: "notification", target: "miniApps" },
  { id: "e14", source: "notification", target: "tournament" },
  
  // Identity & Wallet to Blockchain
  { id: "e8", source: "identity", target: "blockchain" },
  { id: "e9", source: "wallet", target: "blockchain" },
  
  // Storage to Infra
  { id: "e15", source: "storage", target: "ipfs" },
  { id: "e16", source: "storage", target: "p2p" },
  
  // Blockchain to Infra & Security
  { id: "e17", source: "blockchain", target: "ipfs" },
  { id: "e18", source: "blockchain", target: "p2p" },
  { id: "e19", source: "blockchain", target: "security" },
  
  // Apps to Analytics
  { id: "e20", source: "chat", target: "analytics" },
  { id: "e21", source: "feeds", target: "analytics" },
  { id: "e22", source: "accounts", target: "analytics" },
  { id: "e23", source: "miniApps", target: "analytics" },
  { id: "e24", source: "tournament", target: "analytics" },
];

// ... rest of the component remains the same ...

// ... rest of the component remains the same ...

const ArchitectureFlow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = (params) => setEdges((eds) => addEdge(params, eds));

  return (
    <section className="py-32 bg-gradient-to-b from-purple-950 to-gray-950">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-extrabold text-white mb-6 tracking-tight">
            iymra{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Architecture
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Privacy-preserving, decentralized, modular ecosystem built on user-owned identity,
            wallet, and storage — with app-specific experiences secured by a trustless blockchain
            and layered security.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-xl"
        >
          <div className="h-[800px]">
            <ReactFlowProvider>
              <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                fitView
                proOptions={{ hideAttribution: true }}
                nodeTypes={nodeTypes}
              >
                <Background color="#999" gap={16} />
                <MiniMap
                  nodeStrokeColor={(n) =>
                    n.data?.color?.split(" ")[0].replace("from-", "#") || "#000"
                  }
                  zoomable
                  pannable
                />
                <Controls />
              </ReactFlow>
            </ReactFlowProvider>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ArchitectureFlow;
