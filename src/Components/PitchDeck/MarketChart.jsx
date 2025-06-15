import { motion } from "framer-motion";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  BarChart,
  Bar,
  Cell,
  PieChart,
  Pie,
} from "recharts";

const AdvancedMarketChart = () => {
  const marketGrowthData = [
    { year: 2024, value: 7.2, growth: 0 },
    { year: 2025, value: 15.8, growth: 120 },
    { year: 2026, value: 35.0, growth: 122 },
    { year: 2027, value: 78.2, growth: 123 },
    { year: 2028, value: 120.5, growth: 54 },
    { year: 2029, value: 185.3, growth: 54 },
    { year: 2030, value: 250.0, growth: 35 },
    { year: 2031, value: 320.8, growth: 28 },
    { year: 2032, value: 380.2, growth: 18 },
    { year: 2033, value: 425.7, growth: 12 },
    { year: 2034, value: 471.0, growth: 11 },
  ];

  const regionalData = [
    { region: "India & South Asia", users: 35, color: "#6366F1" },
    { region: "Southeast Asia", users: 28, color: "#10B981" },
    { region: "Africa", users: 15, color: "#F59E0B" },
    { region: "Latin America", users: 12, color: "#3B82F6" },
  ];

  const cryptoAdoptionData = [
    { name: "Crypto Aware", value: 66, color: "#6366F1" },
    { name: "Not Aware", value: 34, color: "#CBD5E1" },
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload?.length) {
      return (
        <div className="bg-white text-gray-900 p-4 rounded-xl shadow-xl border border-indigo-200">
          <p className="font-semibold">{`Year: ${label}`}</p>
          <p>{`Market Size: $${payload[0].value}B`}</p>
          {payload[0].payload.growth > 0 && (
            <p className="text-green-600">{`Growth: +${payload[0].payload.growth}%`}</p>
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <section id="go-to-market" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Explosive <span className="text-indigo-500">Market Opportunity</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Web3 social media market projected to reach $471B by 2034, with emerging markets leading adoption globally.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-3xl p-8 border border-gray-200 mb-16 shadow"
        >
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Web3 Social Media Market Growth
            </h3>
            <div className="flex items-center space-x-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-indigo-600">$471B</div>
                <div className="text-gray-500">Market Size 2034</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-emerald-600">52%</div>
                <div className="text-gray-500">CAGR</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600">10M+</div>
                <div className="text-gray-500">Daily Active Users</div>
              </div>
            </div>
          </div>

          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={marketGrowthData}>
                <defs>
                  <linearGradient id="marketGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366F1" stopOpacity={0.6} />
                    <stop offset="95%" stopColor="#6366F1" stopOpacity={0.05} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="year" stroke="#6b7280" fontSize={12} />
                <YAxis stroke="#6b7280" fontSize={12} tickFormatter={(v) => `$${v}B`} />
                <Tooltip content={<CustomTooltip />} />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#6366F1"
                  strokeWidth={3}
                  fill="url(#marketGradient)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Bar Chart */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-3xl p-8 border border-gray-200 shadow"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Target Market Adoption
            </h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={regionalData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis
                    dataKey="region"
                    stroke="#6b7280"
                    fontSize={10}
                    angle={-45}
                    textAnchor="end"
                    height={80}
                  />
                  <YAxis stroke="#6b7280" fontSize={12} />
                  <Tooltip />
                  <Bar dataKey="users" radius={[4, 4, 0, 0]}>
                    {regionalData.map((entry, i) => (
                      <Cell key={i} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 text-center text-sm text-gray-500">
              Crypto Users (Millions)
            </div>
          </motion.div>

          {/* Right Pie Chart */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-3xl p-8 border border-gray-200 shadow"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              African Crypto Awareness
            </h3>
            <div className="h-80 flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={cryptoAdoptionData}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#6366F1"
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                    labelLine={false}
                  >
                    {cryptoAdoptionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">66%</div>
              <div className="text-gray-500">of Africans are crypto-aware</div>
            </div>
          </motion.div>
        </div>

        {/* Metric Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-4 gap-8"
        >
          {[
            {
              label: "India Crypto Users",
              value: "35M+",
              color: "text-indigo-600",
              desc: "Leading global adoption",
            },
            {
              label: "Web3 Social CAGR",
              value: "52%",
              color: "text-emerald-600",
              desc: "Explosive growth rate",
            },
            {
              label: "African Awareness",
              value: "66%",
              color: "text-amber-500",
              desc: "High market potential",
            },
            {
              label: "Daily Active Users",
              value: "10M+",
              color: "text-blue-600",
              desc: "Current Web3 social",
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 border border-gray-200 rounded-2xl p-6 text-center shadow hover:shadow-md transition"
            >
              <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                {stat.value}
              </div>
              <div className="text-gray-900 font-semibold mb-1">
                {stat.label}
              </div>
              <div className="text-gray-500 text-sm">{stat.desc}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AdvancedMarketChart;
