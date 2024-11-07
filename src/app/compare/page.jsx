'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const laptops = [
  {
    id: "1",
    name: "TechPro UltraBook",
    processor: "Intel Core i7-1165G7",
    ram: "16GB",
    storage: "512GB SSD",
    display: "14\" 1920x1080",
    price: 999.99,
    bestFor: "Productivity"
  },
  {
    id: "2",
    name: "GameMaster Pro",
    processor: "AMD Ryzen 9 5900HX",
    ram: "32GB",
    storage: "1TB NVMe SSD",
    display: "15.6\" 2560x1440 144Hz",
    price: 1799.99,
    bestFor: "Gaming"
  },
  {
    id: "3",
    name: "CreativePro Studio",
    processor: "Apple M1 Pro",
    ram: "32GB",
    storage: "1TB SSD",
    display: "16\" 3456x2234",
    price: 2399.99,
    bestFor: "Creative Work"
  },
  {
    id: "4",
    name: "EconoBook Air",
    processor: "Intel Core i5-1135G7",
    ram: "8GB",
    storage: "256GB SSD",
    display: "13.3\" 1920x1080",
    price: 649.99,
    bestFor: "Budget"
  }
]

function LaptopComparison({ laptop1, laptop2 }) {
  if (!laptop1 || !laptop2) return null

  const specs = ['processor', 'ram', 'storage', 'display', 'price', 'bestFor']

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[200px]">Specification</TableHead>
          <TableHead>{laptop1.name}</TableHead>
          <TableHead>{laptop2.name}</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {specs.map((spec) => (
          <TableRow key={spec}>
            <TableCell className="font-medium capitalize">{spec}</TableCell>
            <TableCell>{spec === 'price' ? `$${laptop1[spec].toFixed(2)}` : laptop1[spec]}</TableCell>
            <TableCell>{spec === 'price' ? `$${laptop2[spec].toFixed(2)}` : laptop2[spec]}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default function ComparePage() {
  const [selectedLaptop1, setSelectedLaptop1] = useState('')
  const [selectedLaptop2, setSelectedLaptop2] = useState('')
  const [showComparison, setShowComparison] = useState(false)

  const handleCompare = () => {
    if (selectedLaptop1 && selectedLaptop2) {
      setShowComparison(true)
    }
  }

  const laptop1 = laptops.find(laptop => laptop.id === selectedLaptop1)
  const laptop2 = laptops.find(laptop => laptop.id === selectedLaptop2)

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="absolute inset-0 bg-purple-900/20"></div>
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-purple-700 mb-6">Compare Laptops</h1>
        <p className="text-lg mb-8">Select laptops to compare their specifications and features.</p>
        
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="flex flex-col items-center gap-4 mb-8">
            <Select value={selectedLaptop1} onValueChange={setSelectedLaptop1}>
              <SelectTrigger className="w-[250px]">
                <SelectValue placeholder="Select first laptop" />
              </SelectTrigger>
              <SelectContent>
                {laptops.map((laptop) => (
                  <SelectItem key={laptop.id} value={laptop.id}>{laptop.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedLaptop2} onValueChange={setSelectedLaptop2}>
              <SelectTrigger className="w-[250px]">
                <SelectValue placeholder="Select second laptop" />
              </SelectTrigger>
              <SelectContent>
                {laptops.map((laptop) => (
                  <SelectItem key={laptop.id} value={laptop.id}>{laptop.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button 
              onClick={handleCompare} 
              disabled={!selectedLaptop1 || !selectedLaptop2}
              className="w-[250px] bg-purple-700 text-white hover:bg-purple-800 transition-colors"
            >
              Compare
            </Button>
          </div>
          
          {showComparison ? (
            <div className="overflow-x-auto">
              <LaptopComparison laptop1={laptop1} laptop2={laptop2} />
            </div>
          ) : (
            <div className="text-center">
              <p className="text-gray-600 mb-4">Please select two laptops from the dropdown menus above and click the Compare button to see a detailed comparison.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
