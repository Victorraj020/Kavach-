"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Heart, Plus, Stethoscope, TrendingUp, Pill, Activity } from "lucide-react";

const HealthRecords = () => {
  const [selectedChild] = useState(""); // TODO: Get from context or props
  const [activeTab, setActiveTab] = useState("visits");

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
                <Stethoscope className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">Health Records</h1>
                <p className="text-sm text-muted-foreground">
                  {selectedChild ? `${selectedChild}'s complete medical history` : "Select a child to view health records"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 max-w-6xl">
        {!selectedChild ? (
          // No child selected state
          <Card className="shadow-card border-primary/10">
            <CardContent className="p-8 text-center">
              <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                <Stethoscope className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-medium text-foreground mb-2">No Child Selected</h3>
              <p className="text-muted-foreground mb-4">Please select a child to view their health records</p>
              <Link href="/dashboard">
                <Button>Go to Dashboard</Button>
              </Link>
            </CardContent>
          </Card>
        ) : (
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="visits">Doctor Visits</TabsTrigger>
              <TabsTrigger value="prescriptions">Prescriptions</TabsTrigger>
              <TabsTrigger value="growth">Growth Tracking</TabsTrigger>
              <TabsTrigger value="history">Medical History</TabsTrigger>
            </TabsList>

            {/* Doctor Visits Tab */}
            <TabsContent value="visits" className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-foreground">Doctor Visits & Checkups</h2>
                <Button className="flex items-center gap-2">
                  <Plus className="h-4 w-4" />
                  Add Visit
                </Button>
              </div>

              <div className="text-center py-8">
                <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                  <Stethoscope className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-medium text-foreground mb-2">No Visits Recorded</h3>
                <p className="text-muted-foreground mb-4">Start tracking doctor visits and health checkups</p>
                <Button className="flex items-center gap-2">
                  <Plus className="h-4 w-4" />
                  Add First Visit
                </Button>
              </div>
            </TabsContent>

            {/* Prescriptions Tab */}
            <TabsContent value="prescriptions" className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-foreground">Active Prescriptions</h2>
                <Button className="flex items-center gap-2">
                  <Plus className="h-4 w-4" />
                  Add Prescription
                </Button>
              </div>

              <div className="text-center py-8">
                <div className="p-4 bg-secondary/10 rounded-full w-fit mx-auto mb-4">
                  <Pill className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-lg font-medium text-foreground mb-2">No Prescriptions</h3>
                <p className="text-muted-foreground mb-4">Start tracking medications and prescriptions</p>
                <Button className="flex items-center gap-2">
                  <Plus className="h-4 w-4" />
                  Add First Prescription
                </Button>
              </div>
            </TabsContent>

            {/* Growth Tracking Tab */}
            <TabsContent value="growth" className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-foreground">Growth & Development</h2>
                <Button className="flex items-center gap-2">
                  <Plus className="h-4 w-4" />
                  Add Measurement
                </Button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Growth Chart */}
                <Card className="shadow-card border-warning/10">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-warning" />
                      Growth Chart
                    </CardTitle>
                    <CardDescription>Weight, height, and head circumference tracking</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-8">
                      <div className="p-4 bg-warning/10 rounded-full w-fit mx-auto mb-4">
                        <TrendingUp className="h-8 w-8 text-warning" />
                      </div>
                      <h3 className="text-lg font-medium text-foreground mb-2">No Growth Data</h3>
                      <p className="text-muted-foreground mb-4">Start tracking your child's growth measurements</p>
                      <Button variant="outline">Add Measurement</Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Growth Percentiles */}
                <Card className="shadow-card border-success/10">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Activity className="h-5 w-5 text-success" />
                      Growth Percentiles
                    </CardTitle>
                    <CardDescription>Current growth status compared to standard charts</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-8">
                      <div className="p-4 bg-success/10 rounded-full w-fit mx-auto mb-4">
                        <Activity className="h-8 w-8 text-success" />
                      </div>
                      <h3 className="text-lg font-medium text-foreground mb-2">No Data Available</h3>
                      <p className="text-muted-foreground mb-4">Add measurements to see growth percentiles</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Medical History Tab */}
            <TabsContent value="history" className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-foreground">Medical History</h2>
                <Button className="flex items-center gap-2">
                  <Plus className="h-4 w-4" />
                  Add Condition
                </Button>
              </div>

              <div className="text-center py-8">
                <div className="p-4 bg-destructive/10 rounded-full w-fit mx-auto mb-4">
                  <Heart className="h-8 w-8 text-destructive" />
                </div>
                <h3 className="text-lg font-medium text-foreground mb-2">No Medical History</h3>
                <p className="text-muted-foreground mb-4">Start tracking medical conditions and history</p>
                <Button className="flex items-center gap-2">
                  <Plus className="h-4 w-4" />
                  Add First Condition
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        )}
      </div>
    </div>
  );
};

export default HealthRecords;
