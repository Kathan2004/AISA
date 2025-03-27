import React, { useState } from 'react';
import { 
  Droplets, 
  Plane as Plant, 
  Truck, 
  Store, 
  ShoppingBag, 
  Search, 
  CheckCircle2, 
  Lock, 
  Database, 
  Network,
  HelpCircle
} from 'lucide-react';

interface BlockchainRecord {
  id: string;
  name: string;
  farmer: string;
  location: string;
  stages: {
    stage: string;
    date: string;
    details: string;
    blockHash: string;
    timestamp: number;
    consensusNodes: number;
    smartContractAddress: string;
    icon: JSX.Element;
  }[];
}

const SAMPLE_RECORDS: { [key: string]: BlockchainRecord } = {
  "WHEAT123456": {
    id: "WHEAT123456",
    name: "Premium Organic Wheat",
    farmer: "Ramesh Kumar",
    location: "Karnal, Haryana",
    stages: [
      {
        stage: "Irrigation",
        date: "15 Dec 2023",
        details: "Smart irrigation system used, 40% water saved",
        blockHash: "0x7d8f...3e2a",
        timestamp: 1702598400,
        consensusNodes: 15,
        smartContractAddress: "0x1234...5678",
        icon: <Droplets className="w-6 h-6 text-blue-500" />
      },
      {
        stage: "Harvesting",
        date: "20 Mar 2024",
        details: "Machine harvested, Quality grade: A+",
        blockHash: "0x9e2b...4f1c",
        timestamp: 1710892800,
        consensusNodes: 18,
        smartContractAddress: "0x1234...5678",
        icon: <Plant className="w-6 h-6 text-green-500" />
      },
      {
        stage: "Transportation",
        date: "22 Mar 2024",
        details: "Transported in temperature-controlled vehicle",
        blockHash: "0x3a1f...8d4e",
        timestamp: 1711065600,
        consensusNodes: 16,
        smartContractAddress: "0x1234...5678",
        icon: <Truck className="w-6 h-6 text-yellow-500" />
      },
      {
        stage: "Storage",
        date: "23 Mar 2024",
        details: "Stored at optimal humidity (45%) and temperature (20°C)",
        blockHash: "0x5c4d...2b7a",
        timestamp: 1711152000,
        consensusNodes: 17,
        smartContractAddress: "0x1234...5678",
        icon: <Store className="w-6 h-6 text-purple-500" />
      },
      {
        stage: "Retail",
        date: "25 Mar 2024",
        details: "Available at Premium Organic Store, Delhi",
        blockHash: "0x2e6b...9c3d",
        timestamp: 1711324800,
        consensusNodes: 19,
        smartContractAddress: "0x1234...5678",
        icon: <ShoppingBag className="w-6 h-6 text-red-500" />
      }
    ]
  }
};

interface TooltipProps {
  content: string;
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ content, children }) => {
  return (
    <div className="group relative inline-block">
      {children}
      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute z-50 bottom-full left-1/2 transform -translate-x-1/2 px-4 py-2 mb-2 w-64 text-sm text-white bg-gray-900 rounded-lg pointer-events-none">
        {content}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
      </div>
    </div>
  );
};

export function Traceability() {
  const [searchId, setSearchId] = useState("");
  const [currentRecord, setCurrentRecord] = useState<BlockchainRecord | null>(SAMPLE_RECORDS["WHEAT123456"]);
  const [error, setError] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const record = SAMPLE_RECORDS[searchId];
    if (record) {
      setCurrentRecord(record);
      setError("");
    } else {
      setError("No blockchain record found for this product ID");
    }
  };

  if (!currentRecord) return null;

  return (
    <div className="traceability-pattern min-h-screen">
      <div className="gradient-overlay min-h-screen py-8">
        <div className="container mx-auto px-6">
          {/* Search Section */}
          <div className="glass-morphism rounded-xl p-8 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-4xl font-bold text-green-800">
                Blockchain Product Traceability
              </h1>
              <Tooltip content="Our distributed ledger technology ensures complete transparency and immutable record-keeping for every product's journey">
                <div className="flex items-center gap-2 text-blue-600">
                  <Network className="w-6 h-6" />
                  <span className="text-sm font-medium">Powered by Blockchain</span>
                </div>
              </Tooltip>
            </div>

            <form onSubmit={handleSearch} className="flex gap-4 mb-4">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Enter Product ID (e.g., WHEAT123456)"
                  value={searchId}
                  onChange={(e) => setSearchId(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                <Search className="w-5 h-5" />
                Verify
              </button>
            </form>
          </div>

          {/* Product Details */}
          <div className="glass-morphism rounded-xl p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold text-green-800 mb-4">Product Information</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Database className="w-5 h-5 text-blue-500" />
                    <span className="font-semibold">Product ID:</span>
                    <span className="font-mono">{currentRecord.id}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span className="font-semibold">Product:</span>
                    <span>{currentRecord.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Lock className="w-5 h-5 text-purple-500" />
                    <span className="font-semibold">Smart Contract:</span>
                    <span className="font-mono text-sm">{currentRecord.stages[0].smartContractAddress}</span>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-green-800 mb-4">Blockchain Metrics</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <p className="text-sm text-blue-600">Total Transactions</p>
                    <p className="text-2xl font-bold text-blue-800">{currentRecord.stages.length}</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <p className="text-sm text-green-600">Consensus Nodes</p>
                    <p className="text-2xl font-bold text-green-800">{currentRecord.stages[0].consensusNodes}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Blockchain Timeline */}
          <div className="glass-morphism rounded-xl p-8">
            <h2 className="text-2xl font-bold text-green-800 mb-8 flex items-center gap-2">
              Supply Chain Timeline
              <Tooltip content="Each stage is verified by our network of nodes and recorded immutably on the blockchain">
                <HelpCircle className="w-5 h-5 text-blue-500 cursor-help" />
              </Tooltip>
            </h2>
            <div className="relative">
              <div className="timeline-line" />
              {currentRecord.stages.map((stage, index) => (
                <div
                  key={stage.stage}
                  className={`relative mb-8 ${
                    index % 2 === 0 ? 'ml-auto pl-8 pr-0' : 'mr-auto pr-8 pl-0'
                  } w-full md:w-1/2 transform transition-transform duration-500 hover:scale-105`}
                >
                  <div className="timeline-dot" style={{ top: '24px' }} />
                  <div className="glass-morphism rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-4 mb-3">
                      {stage.icon}
                      <h3 className="text-xl font-semibold text-green-800">{stage.stage}</h3>
                      <CheckCircle2 className="w-5 h-5 text-green-500 ml-auto" />
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{stage.date}</p>
                    <p className="text-gray-700 mb-4">{stage.details}</p>
                    
                    <div className="bg-blue-50 rounded-lg p-4 space-y-2">
                      <Tooltip content="A unique identifier for this transaction block">
                        <div className="flex items-center gap-2 text-sm">
                          <span className="text-blue-600 font-medium">Block Hash:</span>
                          <span className="font-mono">{stage.blockHash}</span>
                        </div>
                      </Tooltip>
                      <Tooltip content="Number of nodes that verified this transaction">
                        <div className="flex items-center gap-2 text-sm">
                          <span className="text-blue-600 font-medium">Consensus:</span>
                          <span>{stage.consensusNodes} nodes</span>
                        </div>
                      </Tooltip>
                      <Tooltip content="Unix timestamp of the block creation">
                        <div className="flex items-center gap-2 text-sm">
                          <span className="text-blue-600 font-medium">Timestamp:</span>
                          <span>{new Date(stage.timestamp * 1000).toLocaleString()}</span>
                        </div>
                      </Tooltip>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}