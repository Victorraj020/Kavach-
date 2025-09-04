"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Calendar, Syringe, Plus } from "lucide-react";

const VaccinationTracker = () => {
  const [selectedChild] = useState(""); // TODO: Get from context or props

  const handleAddVaccine = () => {
    // TODO: Navigate to add vaccine form
    console.log("Add vaccine");
  };

  const handleScheduleVaccine = () => {
    // TODO: Navigate to schedule vaccine
    console.log("Schedule vaccine");
  };

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
                <Syringe className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">Vaccination Tracker</h1>
                <p className="text-sm text-muted-foreground">
                  {selectedChild ? `Track ${selectedChild}'s immunization progress` : "Select a child to track vaccinations"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 space-y-6">
        {!selectedChild ? (
          // No child selected state
          <Card className="shadow-card border-primary/10">
            <CardContent className="p-8 text-center">
              <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                <Syringe className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-medium text-foreground mb-2">No Child Selected</h3>
              <p className="text-muted-foreground mb-4">Please select a child to view their vaccination schedule</p>
              <Link href="/dashboard">
                <Button>Go to Dashboard</Button>
              </Link>
            </CardContent>
          </Card>
        ) : (
          <>
            {/* Progress Overview */}
            <Card className="shadow-card border-primary/10">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Vaccination Progress</span>
                  <Badge variant="secondary" className="text-lg px-3 py-1">
                    0/0
                  </Badge>
                </CardTitle>
                <CardDescription>Overall immunization completion for {selectedChild}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Progress value={0} className="h-3" />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>0 completed</span>
                    <span>0% complete</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Complete Vaccine Schedule */}
            <Card className="shadow-card border-secondary/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-secondary" />
                  Vaccination Schedule
                </CardTitle>
                <CardDescription>Detailed immunization timeline for {selectedChild}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <div className="p-4 bg-secondary/10 rounded-full w-fit mx-auto mb-4">
                    <Syringe className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="text-lg font-medium text-foreground mb-2">No Vaccinations Scheduled</h3>
                  <p className="text-muted-foreground mb-4">Start tracking vaccinations by adding vaccine records</p>
                  <div className="flex gap-2 justify-center">
                    <Button onClick={handleAddVaccine} className="flex items-center gap-2">
                      <Plus className="h-4 w-4" />
                      Add Vaccine Record
                    </Button>
                    <Button onClick={handleScheduleVaccine} variant="outline">
                      Schedule Vaccine
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </>
        )}
      </div>
    </div>
  );
};

export default VaccinationTracker;
