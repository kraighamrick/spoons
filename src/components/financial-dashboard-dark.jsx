import React, { useState, useMemo, useEffect } from 'react';
import { LineChart, Line, PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, AreaChart } from 'recharts';
import { TrendingUp, TrendingDown, DollarSign, CreditCard, PiggyBank, Lightbulb, AlertTriangle, Target, Sparkles, Zap, Award, ArrowUpRight, ArrowDownRight, Activity, Eye, EyeOff } from 'lucide-react';

export default function FinancialDashboard() {
  const [selectedPeriod, setSelectedPeriod] = useState('month');
  const [hoveredInsight, setHoveredInsight] = useState(null);
  const [showBalances, setShowBalances] = useState(true);

  // Market data with real-time simulation
  const [cryptoData, setCryptoData] = useState([
    { symbol: 'BTC', name: 'Bitcoin', price: 43250.80, change: 2.45, volume: '28.5B', icon: '₿', color: '#F7931A' },
    { symbol: 'ETH', name: 'Ethereum', price: 2285.40, change: 3.12, volume: '15.2B', icon: 'Ξ', color: '#627EEA' },
    { symbol: 'SOL', name: 'Solana', price: 98.75, change: -1.23, volume: '2.1B', icon: '◎', color: '#14F195' },
    { symbol: 'BNB', name: 'Binance', price: 312.90, change: 1.85, volume: '1.8B', icon: '⬡', color: '#F3BA2F' },
  ]);

  const [stockData, setStockData] = useState([
    { symbol: 'AAPL', name: 'Apple Inc.', price: 178.23, change: 1.24, volume: '52.3M', color: '#A6B1B7' },
    { symbol: 'MSFT', name: 'Microsoft', price: 378.91, change: 0.89, volume: '28.7M', color: '#00A4EF' },
    { symbol: 'GOOGL', name: 'Alphabet', price: 140.25, change: -0.56, volume: '25.1M', color: '#4285F4' },
    { symbol: 'TSLA', name: 'Tesla', price: 242.84, change: 3.45, volume: '132.4M', color: '#E82127' },
    { symbol: 'NVDA', name: 'NVIDIA', price: 495.22, change: 5.67, volume: '45.8M', color: '#76B900' },
    { symbol: 'META', name: 'Meta', price: 352.45, change: 2.12, volume: '18.9M', color: '#0668E1' },
  ]);

  // Simulate real-time price updates
  useEffect(() => {
    const interval = setInterval(() => {
      setCryptoData(prev => prev.map(crypto => ({
        ...crypto,
        price: crypto.price * (1 + (Math.random() - 0.5) * 0.002),
        change: crypto.change + (Math.random() - 0.5) * 0.1
      })));

      setStockData(prev => prev.map(stock => ({
        ...stock,
        price: stock.price * (1 + (Math.random() - 0.5) * 0.001),
        change: stock.change + (Math.random() - 0.5) * 0.05
      })));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const monthlyData = [
    { month: 'Jan', income: 5200, expenses: 3800, savings: 1400, investments: 800 },
    { month: 'Feb', income: 5400, expenses: 3900, savings: 1500, investments: 850 },
    { month: 'Mar', income: 5200, expenses: 4200, savings: 1000, investments: 600 },
    { month: 'Apr', income: 5600, expenses: 3700, savings: 1900, investments: 1100 },
    { month: 'May', income: 5400, expenses: 4100, savings: 1300, investments: 900 },
    { month: 'Jun', income: 5800, expenses: 3600, savings: 2200, investments: 1300 },
  ];

  const expenseCategories = [
    { name: 'Housing', value: 1500, color: '#3b82f6', percentage: 41.7 },
    { name: 'Food', value: 600, color: '#10b981', percentage: 16.7 },
    { name: 'Transport', value: 400, color: '#f59e0b', percentage: 11.1 },
    { name: 'Entertainment', value: 300, color: '#8b5cf6', percentage: 8.3 },
    { name: 'Utilities', value: 200, color: '#ef4444', percentage: 5.6 },
    { name: 'Healthcare', value: 250, color: '#06b6d4', percentage: 6.9 },
    { name: 'Other', value: 350, color: '#6b7280', percentage: 9.7 },
  ];

  const goals = [
    { id: 1, name: 'Emergency Fund', target: 10000, current: 6500, progress: 65, icon: '🛡️', color: 'from-blue-500 to-blue-600' },
    { id: 2, name: 'Vacation', target: 3000, current: 1800, progress: 60, icon: '✈️', color: 'from-purple-500 to-purple-600' },
    { id: 3, name: 'New Car', target: 15000, current: 4500, progress: 30, icon: '🚗', color: 'from-orange-500 to-orange-600' },
  ];

  const aiInsights = [
    {
      type: 'warning',
      icon: AlertTriangle,
      title: 'High Spending Alert',
      message: 'Entertainment spending up 23% this month. Consider setting a $250 monthly budget limit.',
      priority: 'high',
      action: 'Set Budget',
      savings: '$75/mo',
      color: 'from-orange-500 to-red-500'
    },
    {
      type: 'success',
      icon: TrendingUp,
      title: 'Great Savings Streak! 🎉',
      message: 'You\'ve saved 27% of income for 3 consecutive months. $600 ahead of your goal!',
      priority: 'medium',
      action: 'View Details',
      savings: null,
      color: 'from-green-500 to-emerald-600'
    },
    {
      type: 'tip',
      icon: Lightbulb,
      title: 'Optimization Opportunity',
      message: 'Switch credit cards to maximize rewards. Current setup losing $45/mo in potential cashback.',
      priority: 'medium',
      action: 'Compare Cards',
      savings: '$45/mo',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      type: 'goal',
      icon: Target,
      title: 'Goal Milestone',
      message: 'Emergency Fund on track! At current rate, you\'ll reach your goal 2 months early.',
      priority: 'low',
      action: 'Adjust Goal',
      savings: null,
      color: 'from-purple-500 to-pink-600'
    }
  ];

  const recommendations = [
    {
      title: 'Reduce Food Delivery',
      impact: '+$180',
      period: 'month',
      description: 'AI detected 15 delivery transactions. Cooking 3 more meals at home saves significantly.',
      difficulty: 'Easy',
      category: 'food',
      icon: '🍳'
    },
    {
      title: 'Refinance Student Loan',
      impact: '+$95',
      period: 'month',
      description: 'Current rates 1.2% lower than your loan. Refinancing reduces monthly payments.',
      difficulty: 'Medium',
      category: 'finance',
      icon: '📚'
    },
    {
      title: 'Optimize Subscriptions',
      impact: '+$67',
      period: 'month',
      description: '3 overlapping streaming services detected. Consolidate to 2 for similar content.',
      difficulty: 'Easy',
      category: 'entertainment',
      icon: ''
    }
  ];

  const totalIncome = monthlyData[monthlyData.length - 1].income;
  const totalExpenses = monthlyData[monthlyData.length - 1].expenses;
  const totalSavings = monthlyData[monthlyData.length - 1].savings;
  const savingsRate = ((totalSavings / totalIncome) * 100).toFixed(1);

  const StatCard = ({ title, value, change, icon: Icon, gradient, prefix = '$', trend }) => (
    <div className="group bg-slate-800/50 backdrop-blur-xl rounded-2xl shadow-xl p-6 border border-slate-700/50 hover:border-slate-600 hover:shadow-2xl transition-all transform hover:-translate-y-1 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br opacity-10 rounded-full blur-2xl -mr-16 -mt-16" style={{ background: gradient }}></div>
      
      <div className="relative">
        <div className="flex items-center justify-between mb-3">
          <span className="text-slate-400 text-sm font-semibold">{title}</span>
          <div className={`p-3 rounded-xl bg-gradient-to-br ${gradient} shadow-lg group-hover:scale-110 transition-transform`}>
            <Icon className="w-5 h-5 text-white" />
          </div>
        </div>
        
        <div className="flex items-end justify-between">
          <div>
            <div className="text-3xl font-bold text-white mb-1">
              {showBalances ? `${prefix}${value.toLocaleString()}` : '••••••'}
            </div>
            {change && (
              <div className={`flex items-center gap-1 text-sm font-semibold ${
                change > 0 ? 'text-green-400' : 'text-red-400'
              }`}>
                {change > 0 ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                <span>{Math.abs(change)}%</span>
                <span className="text-xs text-slate-500 font-normal">vs last month</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  const MarketCard = ({ data, type }) => (
    <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl shadow-xl p-6 border border-slate-700/50 hover:border-slate-600 hover:shadow-2xl transition-all">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-white flex items-center gap-2">
          <Activity className="w-6 h-6 text-emerald-400" />
          {type === 'crypto' ? 'Cryptocurrency' : 'Stock Market'}
        </h3>
        <div className="flex items-center gap-2 text-xs text-emerald-400">
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
          <span>Live</span>
        </div>
      </div>

      <div className="space-y-3">
        {data.map((item, idx) => (
          <div 
            key={item.symbol} 
            className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/50 hover:border-slate-600 transition-all group cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg"
                  style={{ backgroundColor: `${item.color}20`, color: item.color }}
                >
                  {type === 'crypto' ? item.icon : item.symbol.charAt(0)}
                </div>
                <div>
                  <div className="text-white font-bold">{item.symbol}</div>
                  <div className="text-slate-400 text-xs">{item.name}</div>
                </div>
              </div>
              
              <div className="text-right">
                <div className="text-white font-bold">
                  ${item.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </div>
                <div className={`text-sm font-semibold flex items-center justify-end gap-1 ${
                  item.change >= 0 ? 'text-green-400' : 'text-red-400'
                }`}>
                  {item.change >= 0 ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                  {Math.abs(item.change).toFixed(2)}%
                </div>
              </div>
            </div>
            
            <div className="mt-2 pt-2 border-t border-slate-700/50">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>Volume</span>
                <span className="font-semibold">{item.volume}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const InsightCard = ({ insight, index }) => {
    const Icon = insight.icon;
    const isHovered = hoveredInsight === index;

    return (
      <div 
        className={`relative border-2 border-slate-700/50 rounded-2xl p-5 transition-all transform hover:-translate-y-1 hover:shadow-xl cursor-pointer bg-slate-800/30 backdrop-blur-xl ${
          isHovered ? 'scale-105 shadow-2xl border-slate-600' : 'shadow-lg'
        }`}
        onMouseEnter={() => setHoveredInsight(index)}
        onMouseLeave={() => setHoveredInsight(null)}
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${insight.color} opacity-5 rounded-2xl`}></div>
        
        <div className="relative">
          <div className="flex items-start justify-between mb-3">
            <div className={`p-2 rounded-xl bg-gradient-to-br ${insight.color}`}>
              <Icon className="w-5 h-5 text-white" />
            </div>
            {insight.savings && (
              <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-bold border border-green-500/30">
                Save {insight.savings}
              </div>
            )}
          </div>
          
          <h4 className="font-bold text-white mb-2 text-lg">{insight.title}</h4>
          <p className="text-sm text-slate-400 mb-3 leading-relaxed">{insight.message}</p>
          
          <button className={`w-full bg-gradient-to-r ${insight.color} text-white px-4 py-2 rounded-lg font-semibold text-sm hover:shadow-lg transition-all`}>
            {insight.action} →
          </button>
        </div>
      </div>
    );
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-slate-800 p-4 rounded-xl shadow-2xl border-2 border-slate-700">
          <p className="font-bold text-white mb-2">{label}</p>
          {payload.map((entry, index) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              <span className="font-semibold">{entry.name}:</span> ${entry.value.toLocaleString()}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6">
      {/* Animated background effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" style={{ top: '10%', left: '10%' }}></div>
        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ top: '60%', right: '10%', animationDelay: '1s' }}></div>
        <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ bottom: '10%', left: '50%', animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="relative">
                  <Sparkles className="w-10 h-10 text-emerald-400 animate-pulse" />
                  <div className="absolute inset-0 w-10 h-10 bg-emerald-400 rounded-full blur-xl opacity-50 animate-ping"></div>
                </div>
                <h1 className="text-5xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Financial Dashboard
                </h1>
              </div>
              <p className="text-slate-400 text-lg ml-14">AI-powered insights • Live market data • Smart money management</p>
            </div>
            
            <div className="flex gap-3">
              <button
                onClick={() => setShowBalances(!showBalances)}
                className="px-4 py-3 rounded-xl font-semibold bg-slate-800/50 border border-slate-700/50 text-slate-300 hover:bg-slate-700/50 hover:border-slate-600 transition-all shadow-lg flex items-center gap-2"
              >
                {showBalances ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
                {showBalances ? 'Hide' : 'Show'}
              </button>
              {['week', 'month', 'year'].map((period) => (
                <button
                  key={period}
                  onClick={() => setSelectedPeriod(period)}
                  className={`px-6 py-3 rounded-xl font-semibold capitalize transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 ${
                    selectedPeriod === period
                      ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white scale-105'
                      : 'bg-slate-800/50 border border-slate-700/50 text-slate-300 hover:bg-slate-700/50'
                  }`}
                >
                  {period}
                </button>
              ))}
            </div>
          </div>
          
          <div className="flex items-center gap-4 ml-14 text-sm text-slate-500">
            <div className="flex items-center gap-1">
              <Zap className="w-4 h-4 text-yellow-500" />
              <span>Real-time Updates</span>
            </div>
            <div className="w-1 h-1 bg-slate-600 rounded-full"></div>
            <div className="flex items-center gap-1">
              <Award className="w-4 h-4 text-emerald-500" />
              <span>AI Recommendations</span>
            </div>
            <div className="w-1 h-1 bg-slate-600 rounded-full"></div>
            <div className="flex items-center gap-1">
              <Activity className="w-4 h-4 text-blue-500" />
              <span>Live Markets</span>
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Total Income"
            value={totalIncome}
            change={5.2}
            icon={DollarSign}
            gradient="from-green-500 to-emerald-600"
          />
          <StatCard
            title="Total Expenses"
            value={totalExpenses}
            change={-3.1}
            icon={CreditCard}
            gradient="from-red-500 to-pink-600"
          />
          <StatCard
            title="Net Savings"
            value={totalSavings}
            change={12.5}
            icon={PiggyBank}
            gradient="from-blue-500 to-indigo-600"
          />
          <StatCard
            title="Savings Rate"
            value={savingsRate}
            icon={TrendingUp}
            gradient="from-purple-500 to-pink-600"
            prefix=""
          />
        </div>

        {/* Market Data Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <MarketCard data={cryptoData} type="crypto" />
          <MarketCard data={stockData} type="stocks" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          {/* Income vs Expenses Chart */}
          <div className="lg:col-span-2 bg-slate-800/50 backdrop-blur-xl rounded-2xl shadow-xl p-6 border border-slate-700/50 hover:border-slate-600 hover:shadow-2xl transition-all">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-2xl">📈</span>
              Financial Trend Analysis
            </h3>
            <ResponsiveContainer width="100%" height={320}>
              <AreaChart data={monthlyData}>
                <defs>
                  <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ef4444" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorSavings" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="month" stroke="#94a3b8" style={{ fontSize: '12px', fontWeight: 600 }} />
                <YAxis stroke="#94a3b8" style={{ fontSize: '12px', fontWeight: 600 }} />
                <Tooltip content={<CustomTooltip />} />
                <Legend wrapperStyle={{ fontSize: '14px', fontWeight: 600 }} />
                <Area type="monotone" dataKey="income" stroke="#10b981" fillOpacity={1} fill="url(#colorIncome)" strokeWidth={3} name="Income" />
                <Area type="monotone" dataKey="expenses" stroke="#ef4444" fillOpacity={1} fill="url(#colorExpenses)" strokeWidth={3} name="Expenses" />
                <Area type="monotone" dataKey="savings" stroke="#3b82f6" fillOpacity={1} fill="url(#colorSavings)" strokeWidth={3} name="Savings" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Expense Breakdown */}
          <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl shadow-xl p-6 border border-slate-700/50 hover:border-slate-600 hover:shadow-2xl transition-all">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-2xl">🥧</span>
              Expense Breakdown
            </h3>
            <ResponsiveContainer width="100%" height={240}>
              <PieChart>
                <Pie
                  data={expenseCategories}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percentage }) => `${name}\n${percentage.toFixed(1)}%`}
                  outerRadius={90}
                  fill="#8884d8"
                  dataKey="value"
                  style={{ fontSize: '11px', fontWeight: 600, fill: '#fff' }}
                >
                  {expenseCategories.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value) => `$${value.toLocaleString()}`}
                  contentStyle={{ backgroundColor: '#1e293b', border: '2px solid #334155', borderRadius: '12px', color: '#fff' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* AI Insights */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl shadow-xl p-6 border border-slate-700/50 hover:border-slate-600 hover:shadow-2xl transition-all">
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-600">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">AI Insights</h3>
              <div className="ml-auto bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-xs font-bold border border-purple-500/30">
                4 New
              </div>
            </div>
            <div className="grid gap-4">
              {aiInsights.map((insight, idx) => (
                <InsightCard key={idx} insight={insight} index={idx} />
              ))}
            </div>
          </div>

          {/* Goals Progress */}
          <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl shadow-xl p-6 border border-slate-700/50 hover:border-slate-600 hover:shadow-2xl transition-all">
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600">
                <Target className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">Financial Goals</h3>
            </div>
            <div className="space-y-5">
              {goals.map((goal) => (
                <div key={goal.id} className="border-2 border-slate-700/50 rounded-2xl p-5 hover:border-slate-600 transition-all hover:shadow-lg bg-slate-900/30">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{goal.icon}</span>
                      <div>
                        <h4 className="font-bold text-white text-lg">{goal.name}</h4>
                        <p className="text-sm text-slate-400">
                          {showBalances 
                            ? `$${goal.current.toLocaleString()} / $${goal.target.toLocaleString()}`
                            : '•••••• / ••••••'
                          }
                        </p>
                      </div>
                    </div>
                    <div className={`bg-gradient-to-r ${goal.color} text-white px-4 py-2 rounded-xl font-bold shadow-lg`}>
                      {goal.progress}%
                    </div>
                  </div>
                  <div className="relative w-full bg-slate-700/50 rounded-full h-3 overflow-hidden">
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${goal.color} rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${goal.progress}%` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-shimmer"></div>
                    </div>
                  </div>
                  <div className="mt-2 text-xs text-slate-400 text-right font-semibold">
                    {showBalances 
                      ? `$${(goal.target - goal.current).toLocaleString()} remaining`
                      : '•••••• remaining'
                    }
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* AI Recommendations */}
        <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl shadow-xl p-6 border border-slate-700/50 hover:border-slate-600 hover:shadow-2xl transition-all">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-gradient-to-r from-yellow-500 to-orange-600">
                <Lightbulb className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">Smart Recommendations</h3>
            </div>
            <div className="text-emerald-400 font-bold text-lg">
              Potential savings: $342/mo
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {recommendations.map((rec, idx) => (
              <div key={idx} className="group border-2 border-slate-700/50 rounded-2xl p-5 hover:border-slate-600 transition-all hover:shadow-xl hover:-translate-y-1 bg-slate-900/30">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{rec.icon}</div>
                  <div className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-4 py-2 rounded-xl font-bold shadow-lg">
                    {rec.impact}/{rec.period}
                  </div>
                </div>
                <h4 className="font-bold text-white text-lg mb-2">{rec.title}</h4>
                <p className="text-sm text-slate-400 mb-4 leading-relaxed">{rec.description}</p>
                <div className="flex items-center justify-between">
                  <span className={`text-xs px-3 py-1 rounded-full font-semibold ${
                    rec.difficulty === 'Easy' 
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                      : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                  }`}>
                    {rec.difficulty}
                  </span>
                  <button className="text-sm text-emerald-400 hover:text-emerald-300 font-bold group-hover:translate-x-1 transition-transform">
                    Learn more →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
}
