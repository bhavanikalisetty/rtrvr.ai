import React from 'react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface FinancialGraphComponentProps {
    data: any[]; // Accept any JSON array
}

const FinancialGraphComponent: React.FC<FinancialGraphComponentProps> = ({ data }) => {
    const taxRevenueData = Object.entries(data[0]["Revenue Capacity"]['Governmental Activities Tax Revenues by Source']).map(([key, value]) => ({
        name: key,
        value,
    }));
    
    const assessedValueData = Object.entries(data[0]["Revenue Capacity"]['Assessed Value of Taxable Property by Use']).map(([key, value]) => ({
        name: key,
        value,
    }));
    
    const debtTypeData = Object.entries(data[0]["Debt Capacity"]['Ratios of Outstanding Debt by Type']).map(([key, value]) => ({
        name: key,
        value,
    }));

    return (
        <div className="p-4 bg-white text-gray-900 rounded-md shadow-md overflow-x-auto">
            <h1 className="text-2xl font-bold mb-4">Financial Data Charts</h1>
            
            <div className="flex flex-wrap -mx-2">
                <div className="w-full md:w-1/2 lg:w-1/3 p-2">
                    <h2 className="text-xl font-semibold mb-2">Governmental Activities Tax Revenues by Source</h2>
                    <div className="w-full h-64">
                        <ResponsiveContainer>
                            <BarChart data={taxRevenueData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="value" fill="#8884d8" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="w-full md:w-1/2 lg:w-1/3 p-2">
                    <h2 className="text-xl font-semibold mb-2">Assessed Value of Taxable Property by Use</h2>
                    <div className="w-full h-64">
                        <ResponsiveContainer>
                            <PieChart>
                                <Pie
                                    data={assessedValueData}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                                    outerRadius={80}
                                    fill="#82ca9d"
                                    dataKey="value"
                                >
                                    {assessedValueData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={["#0088FE", "#00C49F", "#FFBB28", "#FF8042"][index % 4]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                                <Legend />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="w-full md:w-1/2 lg:w-1/3 p-2">
                    <h2 className="text-xl font-semibold mb-2">Ratios of Outstanding Debt by Type</h2>
                    <div className="w-full h-64">
                        <ResponsiveContainer>
                            <LineChart data={debtTypeData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="value" stroke="#8884d8" />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FinancialGraphComponent;
