"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, MapPin, Search, Star, Shield } from "lucide-react";

const VaccinationCenters = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [activeTab, setActiveTab] = useState("nearby");



  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary-light/5 to-secondary-light/10">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link href="/dashboard">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-primary rounded-lg">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">Find Vaccination Centers</h1>
                <p className="text-sm text-muted-foreground">Locate healthcare facilities near you</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 max-w-6xl">
        {/* Search and Filters */}
        <Card className="shadow-card border-primary/10 mb-6">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="search">Search Centers</Label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="search"
                    placeholder="Search by name or address..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="city">Select City</Label>
                <Select value={selectedCity} onValueChange={setSelectedCity}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select city" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mumbai">Mumbai</SelectItem>
                    <SelectItem value="delhi">Delhi</SelectItem>
                    <SelectItem value="bangalore">Bangalore</SelectItem>
                    <SelectItem value="hyderabad">Hyderabad</SelectItem>
                    <SelectItem value="chennai">Chennai</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="type">Center Type</Label>
                <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Centers</SelectItem>
                    <SelectItem value="government">Government Hospitals</SelectItem>
                    <SelectItem value="private">Private Hospitals</SelectItem>
                    <SelectItem value="community">Community Centers</SelectItem>
                    <SelectItem value="mobile">Mobile Units</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="nearby">Nearby Centers</TabsTrigger>
            <TabsTrigger value="popular">Popular Centers</TabsTrigger>
            <TabsTrigger value="mobile">Mobile Units</TabsTrigger>
          </TabsList>

          {/* Nearby Centers Tab */}
          <TabsContent value="nearby" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-foreground">Centers Near You</h2>
              <Badge variant="outline" className="text-sm">
                0 centers found
              </Badge>
            </div>

            <div className="text-center py-8">
              <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-medium text-foreground mb-2">No Centers Found</h3>
              <p className="text-muted-foreground mb-4">Try adjusting your search criteria or location</p>
              <div className="flex gap-2 justify-center">
                <Button onClick={() => setSearchQuery("")} variant="outline">
                  Clear Search
                </Button>
                <Button onClick={() => setSelectedCity("")} variant="outline">
                  Change Location
                </Button>
              </div>
            </div>
          </TabsContent>

          {/* Popular Centers Tab */}
          <TabsContent value="popular" className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">Popular Centers Across India</h2>
            <div className="text-center py-8">
              <div className="p-4 bg-secondary/10 rounded-full w-fit mx-auto mb-4">
                <Star className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-lg font-medium text-foreground mb-2">No Popular Centers</h3>
              <p className="text-muted-foreground mb-4">Popular centers will appear here based on ratings and reviews</p>
            </div>
          </TabsContent>

          {/* Mobile Units Tab */}
          <TabsContent value="mobile" className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">Mobile Vaccination Units</h2>
            <div className="text-center py-8">
              <div className="p-4 bg-warning/10 rounded-full w-fit mx-auto mb-4">
                <Shield className="h-8 w-8 text-warning" />
              </div>
              <h3 className="text-lg font-medium text-foreground mb-2">No Mobile Units Available</h3>
              <p className="text-muted-foreground mb-4">Mobile vaccination units will appear here when available in your area</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default VaccinationCenters;
