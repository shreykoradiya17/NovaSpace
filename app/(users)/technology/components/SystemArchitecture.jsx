"use client";

import React, { useMemo } from 'react';
import {
    ReactFlow,
    Background,
    Controls,
    Handle,
    Position,
    useNodesState,
    useEdgesState,
    MarkerType,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import {
    Satellite,
    Activity,
    Cpu,
    Radio,
    Network,
    BrainCircuit,
    Zap,
    LayoutDashboard,
    Terminal
} from 'lucide-react';

const TurboNode = ({ data, selected }) => {
    const Icon = data.icon;

    return (
        <div className={`
      relative px-4 py-3 rounded-xl border transition-all duration-300
      ${selected
                ? 'border-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.4)] bg-slate-900/90'
                : 'border-slate-800 bg-slate-950/80 shadow-xl'}
      min-w-[200px] backdrop-blur-sm group
    `}>
            {/* Gradient border effect */}
            <div className={`
        absolute inset-0 rounded-xl opacity-20 group-hover:opacity-40 transition-opacity
        bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-500
      `} />

            <div className="relative flex items-center space-x-3">
                <div className={`
          p-2 rounded-lg bg-slate-900 border border-slate-800
          ${selected ? 'text-purple-400' : 'text-slate-400'}
        `}>
                    <Icon size={18} />
                </div>
                <div>
                    <div className="text-sm font-semibold text-slate-100 uppercase tracking-wider">
                        {data.label}
                    </div>
                    <div className="text-[10px] text-slate-500 font-medium">
                        {data.subtitle}
                    </div>
                </div>
            </div>

            <Handle type="target" position={Position.Left} className="!bg-purple-500 !w-2 !h-2 !border-none" />
            <Handle type="source" position={Position.Right} className="!bg-blue-500 !w-2 !h-2 !border-none" />
        </div>
    );
};

const nodeTypes = {
    turbo: TurboNode,
};

const initialNodes = [
    // Group 1: Orbital Systems Header
    {
        id: 'group-1',
        type: 'turbo',
        position: { x: 50, y: 180 },
        data: { label: 'Orbital Systems', subtitle: 'Foundation Layer', icon: Satellite },
    },
    {
        id: 'node-1',
        type: 'turbo',
        position: { x: 350, y: 50 },
        data: { label: 'Satellite Constellation', subtitle: 'Orbital hardware layer', icon: Satellite },
    },
    {
        id: 'node-2',
        type: 'turbo',
        position: { x: 350, y: 180 },
        data: { label: 'Telemetry Systems', subtitle: 'Real-time spacecraft data', icon: Activity },
    },
    {
        id: 'node-3',
        type: 'turbo',
        position: { x: 350, y: 310 },
        data: { label: 'Edge Processing', subtitle: 'Onboard compute & filtering', icon: Cpu },
    },

    // Group 2: Communication Network Header
    {
        id: 'group-2',
        type: 'turbo',
        position: { x: 650, y: 150 },
        data: { label: 'Communication Net', subtitle: 'Transport Layer', icon: Network },
    },
    {
        id: 'node-4',
        type: 'turbo',
        position: { x: 950, y: 80 },
        data: { label: 'Ground Stations', subtitle: 'Signal reception & uplink', icon: Radio },
    },
    {
        id: 'node-5',
        type: 'turbo',
        position: { x: 950, y: 220 },
        data: { label: 'Global Relay Network', subtitle: 'Secure data transmission', icon: Network },
    },

    // Group 3: AI Systems Header
    {
        id: 'group-3',
        type: 'turbo',
        position: { x: 1250, y: 150 },
        data: { label: 'AI Systems', subtitle: 'Intelligence Layer', icon: BrainCircuit },
    },
    {
        id: 'node-6',
        type: 'turbo',
        position: { x: 1550, y: 80 },
        data: { label: 'AI Mission Intel', subtitle: 'Orbit prediction engine', icon: BrainCircuit },
    },
    {
        id: 'node-7',
        type: 'turbo',
        position: { x: 1550, y: 220 },
        data: { label: 'Autonomous Opt', subtitle: 'Fuel and stability control', icon: Zap },
    },

    // Group 4: Mission Control Header
    {
        id: 'group-4',
        type: 'turbo',
        position: { x: 1850, y: 150 },
        data: { label: 'Mission Control', subtitle: 'Execution Layer', icon: Terminal },
    },
    {
        id: 'node-8',
        type: 'turbo',
        position: { x: 2150, y: 80 },
        data: { label: 'Operations Dashboard', subtitle: 'Fleet monitoring', icon: LayoutDashboard },
    },
    {
        id: 'node-9',
        type: 'turbo',
        position: { x: 2150, y: 220 },
        data: { label: 'Mission Control Center', subtitle: 'Command execution', icon: Terminal },
    },
];

const initialEdges = [
    // Group 1 Hub Connections
    { id: 'h1-1', source: 'group-1', target: 'node-1', animated: true, style: { strokeWidth: 1.5, stroke: '#475569' } },
    { id: 'h1-2', source: 'group-1', target: 'node-2', animated: true, style: { strokeWidth: 1.5, stroke: '#475569' } },
    { id: 'h1-3', source: 'group-1', target: 'node-3', animated: true, style: { strokeWidth: 1.5, stroke: '#475569' } },

    // Process Flow Path (Linear)
    { id: 'e1-2', source: 'node-1', target: 'node-2', animated: true, style: { stroke: '#a855f7', strokeWidth: 2.5 } },
    { id: 'e2-3', source: 'node-2', target: 'node-3', animated: true, style: { stroke: '#3b82f6', strokeWidth: 2.5 } },
    { id: 'e3-4', source: 'node-3', target: 'node-4', animated: true, style: { stroke: '#06b6d4', strokeWidth: 2.5 } },
    { id: 'e4-5', source: 'node-4', target: 'node-5', animated: true, style: { stroke: '#a855f7', strokeWidth: 2.5 } },
    { id: 'e5-6', source: 'node-5', target: 'node-6', animated: true, style: { stroke: '#3b82f6', strokeWidth: 2.5 } },
    { id: 'e6-7', source: 'node-6', target: 'node-7', animated: true, style: { stroke: '#06b6d4', strokeWidth: 2.5 } },
    { id: 'e7-8', source: 'node-7', target: 'node-8', animated: true, style: { stroke: '#a855f7', strokeWidth: 2.5 } },
    { id: 'e8-9', source: 'node-8', target: 'node-9', animated: true, style: { stroke: '#3b82f6', strokeWidth: 2.5 } },

    // Group 2 Hub Connections
    { id: 'h2-4', source: 'group-2', target: 'node-4', animated: true, style: { strokeWidth: 1.5, stroke: '#475569' } },
    { id: 'h2-5', source: 'group-2', target: 'node-5', animated: true, style: { strokeWidth: 1.5, stroke: '#475569' } },

    // Group 3 Hub Connections
    { id: 'h3-6', source: 'group-3', target: 'node-6', animated: true, style: { strokeWidth: 1.5, stroke: '#475569' } },
    { id: 'h3-7', source: 'group-3', target: 'node-7', animated: true, style: { strokeWidth: 1.5, stroke: '#475569' } },

    // Group 4 Hub Connections
    { id: 'h4-8', source: 'group-4', target: 'node-8', animated: true, style: { strokeWidth: 1.5, stroke: '#475569' } },
    { id: 'h4-9', source: 'group-4', target: 'node-9', animated: true, style: { strokeWidth: 1.5, stroke: '#475569' } },
];

export default function SystemArchitecture({ className }) {
    const [nodes, , onNodesChange] = useNodesState(initialNodes);
    const [edges, , onEdgesChange] = useEdgesState(initialEdges);

    const defaultEdgeOptions = {
        type: 'smoothstep',
        markerEnd: {
            type: MarkerType.ArrowClosed,
            color: '#475569',
        },
    };

    return (
        <div className='w-full bg-black py-[90px]'>
            <h2 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-2xl font-bold text-transparent md:text-4xl lg:text-5xl leading-[1.1] p-[1px]">
                Integrated Orbital Architecture
            </h2>
            <p className="mx-auto mt-4 max-w-[90%] md:max-w-2xl text-center text-[12px] md:text-base font-normal text-neutral-300 opacity-[0.9]">
                Our orbital ecosystem connects satellites, ground infrastructure, and AI systems to enable real-time telemetry, intelligent processing, and reliable mission control.
            </p>
            <div style={{ height: '500px' }} className={`bg-black overflow-hidden shadow-2xl max-w-7xl m-auto border border-white/10 rounded-lg w-full ${className}`}>
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    nodeTypes={nodeTypes}
                    defaultEdgeOptions={defaultEdgeOptions}
                    fitView
                    nodesDraggable={true}
                    nodesConnectable={false}
                    elementsSelectable={true}
                    deleteKeyCode={null}
                    selectionKeyCode={null}
                    multiSelectionKeyCode={null}
                    proOptions={{ hideAttribution: true }}
                >
                    {/* <Background color="#1e293b" variant="dots" gap={20} size={1} /> */}
                    {/* <Controls
                        showInteractive={false}
                        className="!bg-slate-900 !border-slate-800 !fill-slate-100"
                    /> */}
                </ReactFlow>
            </div>
        </div>
    );
}
