"use client";

import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bell, Calendar, Heart, MapPin, Plus, Shield, Syringe, User, Stethoscope } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary-light/5 to-secondary-light/10">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-primary rounded-lg">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">Kavach</h1>
                <p className="text-sm text-muted-foreground">Health Protection for Your Family</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Link href="/notifications">
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="h-5 w-5" />
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center bg-destructive text-white text-xs">
                    0
                  </Badge>
                </Button>
              </Link>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 space-y-6">
        {/* Quick Actions */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link href="/register-child">
            <Card className="hover:shadow-card transition-smooth cursor-pointer border-primary/10">
              <CardContent className="p-4 text-center">
                <div className="p-3 bg-primary/10 rounded-lg mx-auto w-fit mb-2">
                  <Plus className="h-6 w-6 text-primary" />
                </div>
                <p className="text-sm font-medium">Add Child</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/vaccinations">
            <Card className="hover:shadow-card transition-smooth cursor-pointer border-secondary/10">
              <CardContent className="p-4 text-center">
                <div className="p-3 bg-secondary/10 rounded-lg mx-auto w-fit mb-2">
                  <Syringe className="h-6 w-6 text-secondary" />
                </div>
                <p className="text-sm font-medium">Vaccinations</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/health-records">
            <Card className="hover:shadow-card transition-smooth cursor-pointer border-warning/10">
              <CardContent className="p-4 text-center">
                <div className="p-3 bg-warning/10 rounded-lg mx-auto w-fit mb-2">
                  <Stethoscope className="h-6 w-6 text-warning" />
                </div>
                <p className="text-sm font-medium">Health Records</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/centers">
            <Card className="hover:shadow-card transition-smooth cursor-pointer border-success/10">
              <CardContent className="p-4 text-center">
                <div className="p-3 bg-success/10 rounded-lg mx-auto w-fit mb-2">
                  <MapPin className="h-6 w-6 text-success" />
                </div>
                <p className="text-sm font-medium">Find Centers</p>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Children Overview */}
        <Card className="shadow-card border-primary/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-primary" />
              Your Children
            </CardTitle>
            <CardDescription>Health overview and status</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center py-8">
              <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                <Plus className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-medium text-foreground mb-2">No Children Added Yet</h3>
              <p className="text-muted-foreground mb-4">Start by adding your first child to begin tracking their health</p>
              <Link href="/register-child">
                <Button className="flex items-center gap-2">
                  <Plus className="h-4 w-4" />
                  Add Your First Child
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Vaccinations */}
        <Card className="shadow-card border-secondary/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-secondary" />
              Upcoming Vaccinations
            </CardTitle>
            <CardDescription>Don&apos;t miss any important vaccines</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center py-8">
              <div className="p-4 bg-secondary/10 rounded-full w-fit mx-auto mb-4">
                <Syringe className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-lg font-medium text-foreground mb-2">No Vaccinations Scheduled</h3>
              <p className="text-muted-foreground mb-4">Add a child to start tracking their vaccination schedule</p>
              <Link href="/register-child">
                <Button variant="outline">
                  Add Child First
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Recent Doctor Visits */}
        <Card className="shadow-card border-success/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Stethoscope className="h-5 w-5 text-success" />
              Recent Doctor Visits
            </CardTitle>
            <CardDescription>Your child&apos;s medical history and checkups</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center py-8">
              <div className="p-4 bg-success/10 rounded-full w-fit mx-auto mb-4">
                <Stethoscope className="h-8 w-8 text-success" />
              </div>
              <h3 className="text-lg font-medium text-foreground mb-2">No Visits Recorded</h3>
              <p className="text-muted-foreground mb-4">Start tracking doctor visits and health records</p>
              <Link href="/health-records">
                <Button variant="outline">
                  View Health Records
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Nearby Vaccination Centers */}
        <Card className="shadow-card border-info/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-info" />
              Nearby Vaccination Centers
            </CardTitle>
            <CardDescription>Find healthcare facilities near you</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center py-8">
              <div className="p-4 bg-info/10 rounded-full w-fit mx-auto mb-4">
                <MapPin className="h-8 w-8 text-info" />
              </div>
              <h3 className="text-lg font-medium text-foreground mb-2">Find Healthcare Centers</h3>
              <p className="text-muted-foreground mb-4">Discover vaccination centers and healthcare providers in your area</p>
              <Link href="/centers">
                <Button variant="outline">
                  Find Centers
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
