"use client"

import React from 'react'
import { Laptop2, Cpu, Layers, MemoryStick, Monitor, Battery, Wifi, Thermometer, Package } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
} from 'recharts'

const laptops = [
  {
    name: "MacBook Pro 16",
    price: 2499,
    performance: {
      cpu: {
        name: "Apple M2 Pro",
        cores: "12-core",
        speed: "3.6 GHz",
        score: 95,
      },
      gpu: {
        name: "19-core GPU",
        memory: "16GB Unified",
        score: 90,
      },
      ram: {
        size: "32GB",
        type: "LPDDR5",
        speed: "6400MHz",
        score: 98,
      },
    },
    display: {
      resolution: "3456 x 2234",
      refreshRate: "120Hz",
      brightness: "1600 nits",
      colorGamut: "P3",
      score: 95,
    },
    build: {
      material: "Aluminum",
      weight: "4.7 lbs",
      dimensions: "14.01 x 9.77 x 0.66 inches",
      score: 92,
    },
    battery: {
      capacity: "100Wh",
      duration: "22 hours",
      score: 96,
    },
    storage: {
      type: "NVMe SSD",
      capacity: "1TB",
      speed: "5500MB/s",
      score: 94,
    },
    connectivity: {
      ports: ["3x Thunderbolt 4", "HDMI", "SD Card", "MagSafe 3"],
      wireless: "Wi-Fi 6E, Bluetooth 5.3",
      score: 90,
    },
    thermals: {
      maxTemp: "75°C",
      noise: "35dB",
      score: 88,
    },
  },
  {
    name: "Dell XPS 15",
    price: 2299,
    performance: {
      cpu: {
        name: "Intel Core i9-13900H",
        cores: "14-core",
        speed: "5.4 GHz",
        score: 92,
      },
      gpu: {
        name: "NVIDIA RTX 4070",
        memory: "8GB GDDR6",
        score: 94,
      },
      ram: {
        size: "32GB",
        type: "DDR5",
        speed: "5200MHz",
        score: 90,
      },
    },
    display: {
      resolution: "3456 x 2160",
      refreshRate: "60Hz",
      brightness: "500 nits",
      colorGamut: "100% Adobe RGB",
      score: 88,
    },
    build: {
      material: "Aluminum + Carbon Fiber",
      weight: "4.23 lbs",
      dimensions: "13.57 x 9.06 x 0.73 inches",
      score: 90,
    },
    battery: {
      capacity: "86Wh",
      duration: "13 hours",
      score: 82,
    },
    storage: {
      type: "NVMe SSD",
      capacity: "1TB",
      speed: "7000MB/s",
      score: 96,
    },
    connectivity: {
      ports: ["2x Thunderbolt 4", "USB-C", "SD Card"],
      wireless: "Wi-Fi 6E, Bluetooth 5.2",
      score: 85,
    },
    thermals: {
      maxTemp: "85°C",
      noise: "42dB",
      score: 82,
    },
  },
]

const chartData = [
  { category: 'CPU', MacBookPro16: laptops[0].performance.cpu.score, DellXPS15: laptops[1].performance.cpu.score },
  { category: 'GPU', MacBookPro16: laptops[0].performance.gpu.score, DellXPS15: laptops[1].performance.gpu.score },
  { category: 'RAM', MacBookPro16: laptops[0].performance.ram.score, DellXPS15: laptops[1].performance.ram.score },
  { category: 'Display', MacBookPro16: laptops[0].display.score, DellXPS15: laptops[1].display.score },
  { category: 'Battery', MacBookPro16: laptops[0].battery.score, DellXPS15: laptops[1].battery.score },
  { category: 'Storage', MacBookPro16: laptops[0].storage.score, DellXPS15: laptops[1].storage.score },
  { category: 'Connectivity', MacBookPro16: laptops[0].connectivity.score, DellXPS15: laptops[1].connectivity.score },
  { category: 'Thermals', MacBookPro16: laptops[0].thermals.score, DellXPS15: laptops[1].thermals.score },
]

export default function Component() {
  return (
    <div className="container mx-auto p-4 space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Laptop Comparison</h1>
        <p className="text-muted-foreground">Detailed analysis and comparison of high-end laptops</p>
      </div>

      <Card className="w-full">
        <CardHeader>
          <CardTitle>Performance Comparison</CardTitle>
          <CardDescription>Radar chart comparing key metrics</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={chartData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="category" />
                <PolarRadiusAxis angle={30} domain={[0, 100]} />
                <Radar name="MacBook Pro 16" dataKey="MacBookPro16" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                <Radar name="Dell XPS 15" dataKey="DellXPS15" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                <Legend />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-8">
        {laptops.map((laptop, index) => (
          <Card key={index} className="relative">
            <CardHeader>
              <CardTitle>{laptop.name}</CardTitle>
              <CardDescription>Starting at ${laptop.price}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Performance</h2>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Cpu className="w-4 h-4" />
                    <span className="font-medium">CPU</span>
                  </div>
                  <div className="text-sm space-y-1">
                    <p>{laptop.performance.cpu.name}</p>
                    <p className="text-muted-foreground">{laptop.performance.cpu.cores}, {laptop.performance.cpu.speed}</p>
                    <Progress value={laptop.performance.cpu.score} className="h-2" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Layers className="w-4 h-4" />
                    <span className="font-medium">GPU</span>
                  </div>
                  <div className="text-sm space-y-1">
                    <p>{laptop.performance.gpu.name}</p>
                    <p className="text-muted-foreground">{laptop.performance.gpu.memory}</p>
                    <Progress value={laptop.performance.gpu.score} className="h-2" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <MemoryStick className="w-4 h-4" />
                    <span className="font-medium">RAM</span>
                  </div>
                  <div className="text-sm space-y-1">
                    <p>{laptop.performance.ram.size} {laptop.performance.ram.type}</p>
                    <p className="text-muted-foreground">{laptop.performance.ram.speed}</p>
                    <Progress value={laptop.performance.ram.score} className="h-2" />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Display</h2>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Monitor className="w-4 h-4" />
                    <span className="font-medium">Display</span>
                  </div>
                  <div className="text-sm space-y-1">
                    <p>Resolution: {laptop.display.resolution}</p>
                    <p>Refresh Rate: {laptop.display.refreshRate}</p>
                    <p>Brightness: {laptop.display.brightness}</p>
                    <p>Color Gamut: {laptop.display.colorGamut}</p>
                    <Progress value={laptop.display.score} className="h-2" />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Build</h2>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Laptop2 className="w-4 h-4" />
                    <span className="font-medium">Build Quality</span>
                  </div>
                  <div className="text-sm space-y-1">
                    <p>Material: {laptop.build.material}</p>
                    <p>Weight: {laptop.build.weight}</p>
                    <p>Dimensions: {laptop.build.dimensions}</p>
                    <Progress value={laptop.build.score} className="h-2" />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Battery</h2>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Battery className="w-4 h-4" />
                    <span className="font-medium">Battery</span>
                  </div>
                  <div className="text-sm space-y-1">
                    <p>Capacity: {laptop.battery.capacity}</p>
                    <p className="text-muted-foreground">Up to {laptop.battery.duration}</p>
                    <Progress value={laptop.battery.score} className="h-2" />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Storage</h2>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Package className="w-4 h-4" />
                    <span className="font-medium">Storage</span>
                  </div>
                  <div className="text-sm space-y-1">
                    <p>{laptop.storage.capacity} {laptop.storage.type}</p>
                    <p className="text-muted-foreground">Read speeds up to {laptop.storage.speed}</p>
                    <Progress value={laptop.storage.score} className="h-2" />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Connectivity</h2>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Wifi className="w-4 h-4" />
                    <span className="font-medium">Connectivity</span>
                  </div>
                  <div className="text-sm space-y-1">
                    <p>Ports: {laptop.connectivity.ports.join(", ")}</p>
                    <p className="text-muted-foreground">{laptop.connectivity.wireless}</p>
                    <Progress value={laptop.connectivity.score} className="h-2" />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Thermals</h2>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Thermometer className="w-4 h-4" />
                    <span className="font-medium">Thermals</span>
                  </div>
                  <div className="text-sm space-y-1">
                    <p>Max Temp: {laptop.thermals.maxTemp}</p>
                    <p className="text-muted-foreground">Noise Level: {laptop.thermals.noise}</p>
                    <Progress value={laptop.thermals.score} className="h-2" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}