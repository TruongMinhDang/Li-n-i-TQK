'use client';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from 'recharts';

const VOTE_OPTIONS = ['9/1', '9/2', '9/3', '9/4', '9/5', '9/6', '9/7', '9/8'];
const COLORS = [
  '#0088FE',
  '#00C49F',
  '#FFBB28',
  '#FF8042',
  '#AF19FF',
  '#FF4560',
  '#775DD0',
  '#FFC300',
];

export default function VotingChart({ votes }: { votes: any[] }) {
  return (
    <ResponsiveContainer>
      <BarChart
        data={votes}
        margin={{
          top: 5,
          right: 30,
          left: 0,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis allowDecimals={false} />
        <Tooltip
          contentStyle={{
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(4px)',
            border: '1px solid #ccc',
            borderRadius: '0.5rem',
          }}
        />
        <Legend />
        <Bar dataKey="votes" name="Số phiếu">
          {votes.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[VOTE_OPTIONS.indexOf(entry.name) % COLORS.length]}
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
