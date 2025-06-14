'use client';

import { motion } from 'framer-motion';
import { DollarSign, ExternalLink, Mail, Shield, TrendingUp } from 'lucide-react';
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

const fundingData = [
  { name: 'Development & Engineering', value: 43, color: '#4f46e5' },
  { name: 'Marketing & Community', value: 22, color: '#0ea5e9' },
  { name: 'Security & Audits', value: 18, color: '#10b981' },
  { name: 'Business Operations', value: 10, color: '#f59e0b' },
  { name: 'Reserve/Contingency', value: 7, color: '#ef4444' },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload?.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-white text-sm text-gray-800 p-3 rounded border shadow-md">
        <p className="font-semibold">{data.name}</p>
        <p className="text-gray-500">{data.value}% of total funding</p>
      </div>
    );
  }
  return null;
};

const renderLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="#fff"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
      fontSize={12}
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const investmentHighlights = [
  {
    title: '$50K – $100K',
    subtitle: 'Pre-seed raise',
    desc: 'Funds allocated to engineering, audits, and launch activities in Web3 social infrastructure.',
    icon: <DollarSign className="w-5 h-5 text-gray-800" />,
  },
  {
    title: 'Web3 Timing',
    subtitle: 'Perfect entry point',
    desc: '52% CAGR expected through 2034. Strategic early position in a projected $471B market.',
    icon: <TrendingUp className="w-5 h-5 text-gray-800" />,
  },
];

const FundingSection = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Investment Opportunity
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Raising $50K–$100K in pre-seed capital to accelerate engineering, security, and strategic launch across high-growth Web3 verticals.
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Pie Chart */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded border"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Use of Funds</h3>
            <div className="h-64 mb-6">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={fundingData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderLabel}
                    outerRadius={100}
                    dataKey="value"
                  >
                    {fundingData.map((entry, i) => (
                      <Cell key={`cell-${i}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <ul className="space-y-2 text-sm text-gray-700">
              {fundingData.map((item, i) => (
                <li key={i} className="flex justify-between items-center">
                  <div className="flex items-center">
                    <span
                      className="w-3 h-3 rounded-full mr-3"
                      style={{ backgroundColor: item.color }}
                    />
                    {item.name}
                  </div>
                  <span className="font-semibold">{item.value}%</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {investmentHighlights.map((item, i) => (
              <div key={i} className="p-5 bg-white border rounded flex items-start space-x-4">
                <div className="p-2 bg-gray-100 rounded">{item.icon}</div>
                <div>
                  <h4 className="text-base font-semibold text-gray-800">{item.title}</h4>
                  <p className="text-sm text-gray-500">{item.subtitle}</p>
                  <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-white border rounded p-10"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Join the Mission</h3>
          <p className="text-base text-gray-600 mb-6 max-w-xl mx-auto">
            Let’s connect — explore investor partnerships and help shape the decentralized future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="mailto:founders@iymralabs.com"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-black text-white font-medium px-6 py-3 rounded hover:bg-gray-800 transition"
            >
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>Schedule a Call</span>
                <ExternalLink className="w-4 h-4" />
              </div>
            </motion.a>
            <span className="text-sm text-gray-500">founders@iymralabs.com</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FundingSection;
