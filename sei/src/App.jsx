import React from 'react';
import { UserCircle } from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

export default function App() {
  const data = [
    { name: 'Q1', value: 65 },
    { name: 'Q2', value: 80 },
    { name: 'Q3', value: 45 },
    { name: 'Q4', value: 75 },
  ];

  const financeNews = [
    {
      title: "Bitcoin Surges Past $70K as ETFs Drive Demand",
      source: "CoinDesk",
      time: "2 hours ago",
    },
    {
      title: "Federal Reserve Holds Rates Steady Amid Inflation Concerns",
      source: "Bloomberg",
      time: "5 hours ago",
    },
    {
      title: "Apple's Q2 Earnings Exceed Expectations",
      source: "CNBC",
      time: "Yesterday",
    },
    {
      title: "Oil Prices Decline as Supply Outpaces Demand",
      source: "Reuters",
      time: "2 days ago",
    },
  ];

  return (
    <div className="min-h-screen bg-dark-blue text-white p-4">
      {/* Navbar */}
      <div className="bg-light-blue rounded-lg p-4 flex justify-between items-center mb-6 shadow-md">
        <h1 className="text-2xl font-bold">Finance Dashboard</h1>
        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
          <UserCircle className="text-dark-blue w-6 h-6" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="flex flex-col gap-4">
          {/* Box 1 */}
          <div className="bg-cta-blue rounded-lg h-[70vh] shadow-md p-4 overflow-hidden flex flex-col">
            <div className="overflow-y-auto pr-1 scrollbar-hide">
              <p className="text-lg font-semibold mb-4 text-red-200">🚨 Suspicious Activities</p>
              <div className="flex flex-col gap-3">
                {[
                  { title: 'Unusual BTC Transaction', time: '2 hours ago' },
                  { title: 'Login from Unknown Device', time: '4 hours ago' },
                  { title: 'Failed Withdrawal Attempt', time: '6 hours ago' },
                  { title: 'Multiple Login Failures', time: 'Yesterday' },
                  { title: 'Suspicious Location Access', time: '2 days ago' },
                  { title: 'Email Changed', time: '3 days ago' },
                ].map((activity, i) => (
                  <div key={i} className="bg-dark-blue p-3 rounded shadow text-sm text-white/80">
                    <p className="font-medium text-white">{activity.title}</p>
                    <p className="text-xs text-white/60 mt-1">{activity.time}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Button below Box 1 */}
          <button className="bg-gold text-dark-blue font-semibold px-4 py-2 rounded-xl shadow-md hover:bg-yellow-400 transition duration-200">
            Report
          </button>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-4">
          {/* Graph Box */}
          <div className="bg-cta-blue rounded-lg shadow-md p-4">
            <p className="text-lg font-semibold mb-2">📈 Monthly Reports</p>
            <div className="h-48 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#4b5563" />
                  <XAxis dataKey="name" stroke="#cbd5e1" />
                  <YAxis stroke="#cbd5e1" />
                  <Tooltip />
                  <Bar dataKey="value" fill="#FFD700" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm mt-2 text-green">Growth: +18% this quarter</p>
          </div>

          {/* News Feed Box */}
          <div className="bg-cta-blue rounded-lg shadow-md p-4">
            <p className="text-lg font-semibold mb-2">📰 Finance News</p>
            <div className="flex flex-col gap-3 text-sm text-white/80">
              {financeNews.map((news, i) => (
                <div key={i} className="bg-dark-blue p-3 rounded">
                  <p className="font-medium text-white">{news.title}</p>
                  <p className="text-xs mt-1 text-white/60">{news.source} • {news.time}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
