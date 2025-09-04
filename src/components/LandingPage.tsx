"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, FileText, Heart, MapPin, Shield, Smartphone, Syringe, Users } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary-light/5 to-secondary-light/10">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-gradient-primary rounded-lg shadow-lg">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <Badge variant="secondary" className="text-sm px-3 py-1 bg-secondary/10 text-secondary-foreground border-secondary/20">
                    Digital Health Protection
                  </Badge>
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  <span className="bg-gradient-primary bg-clip-text text-transparent">Kavach</span>
                  <br />
                  <span className="text-foreground">Protecting Your Child&apos;s Health</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  A comprehensive mobile application for newborn health records and vaccination management.
                  Never miss a vaccine, track your child&apos;s health journey, and ensure complete protection.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/dashboard">
                  <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary-dark text-white shadow-lg hover:shadow-xl transition-all duration-300">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 border-primary/20 text-primary hover:bg-primary/5 hover:border-primary/40 transition-all duration-300">
                  Learn More
                </Button>
              </div>

              <div className="flex items-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-primary" />
                  <span>10K+ Families Protected</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-secondary" />
                  <span>100% Secure & Private</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-floating bg-gradient-to-br from-primary-light/20 to-secondary-light/20 p-8">
                <div className="text-center space-y-4">
                  <div className="w-32 h-32 mx-auto bg-gradient-primary rounded-full flex items-center justify-center shadow-lg">
                    <Shield className="h-16 w-16 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">Digital Health Protection</h3>
                  <p className="text-muted-foreground">Comprehensive health management for your family</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent"></div>
              </div>
              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-floating border border-primary/20">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">98%</div>
                  <div className="text-xs text-muted-foreground">Vaccination Rate</div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white rounded-xl p-4 shadow-floating border border-secondary/20">
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary">24/7</div>
                  <div className="text-xs text-muted-foreground">Health Tracking</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Comprehensive Health Management
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to track, manage, and protect your child&apos;s health in one secure platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="shadow-card border-primary/20 hover:shadow-floating transition-all duration-300 hover:scale-105 bg-white">
              <CardHeader>
                <div className="p-3 bg-primary/10 rounded-lg w-fit">
                  <Syringe className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-foreground">Smart Vaccination Tracker</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Intelligent system with automatic reminders for upcoming doses and complete vaccination history
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Automatic dose reminders</li>
                  <li>• Complete vaccination history</li>
                  <li>• Age-appropriate schedules</li>
                  <li>• Multi-child tracking</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-card border-secondary/20 hover:shadow-floating transition-all duration-300 hover:scale-105 bg-white">
              <CardHeader>
                <div className="p-3 bg-secondary/10 rounded-lg w-fit">
                  <FileText className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-foreground">Digital Health Records</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Secure storage of all medical records, prescriptions, and doctor visit notes in one place
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Doctor visit records</li>
                  <li>• Prescription management</li>
                  <li>• Growth tracking charts</li>
                  <li>• Allergy information</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-card border-warning/20 hover:shadow-floating transition-all duration-300 hover:scale-105 bg-white">
              <CardHeader>
                <div className="p-3 bg-warning/10 rounded-lg w-fit">
                  <MapPin className="h-6 w-6 text-warning" />
                </div>
                <CardTitle className="text-foreground">Location-Based Services</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Find nearby vaccination centers and healthcare providers across India with GPS integration
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Nearby center finder</li>
                  <li>• Real-time availability</li>
                  <li>• Navigation support</li>
                  <li>• Provider ratings</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-card border-success/20 hover:shadow-floating transition-all duration-300 hover:scale-105 bg-white">
              <CardHeader>
                <div className="p-3 bg-success/10 rounded-lg w-fit">
                  <Calendar className="h-6 w-6 text-success" />
                </div>
                <CardTitle className="text-foreground">Smart Notifications</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Timely push notifications for upcoming vaccines, appointments, and health checkups
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Vaccine due alerts</li>
                  <li>• Appointment reminders</li>
                  <li>• Health milestone tracking</li>
                  <li>• Custom notifications</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-card border-destructive/20 hover:shadow-floating transition-all duration-300 hover:scale-105 bg-white">
              <CardHeader>
                <div className="p-3 bg-destructive/10 rounded-lg w-fit">
                  <Heart className="h-6 w-6 text-destructive" />
                </div>
                <CardTitle className="text-foreground">Family Health Profiles</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Complete family health management with individual profiles for each family member
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Multiple child profiles</li>
                  <li>• Parent information</li>
                  <li>• Emergency contacts</li>
                  <li>• Medical history</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-card border-primary/20 hover:shadow-floating transition-all duration-300 hover:scale-105 bg-white">
              <CardHeader>
                <div className="p-3 bg-primary/10 rounded-lg w-fit">
                  <Smartphone className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-foreground">Cross-Platform Access</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Access your data anywhere with cloud synchronization and multi-device support
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Cloud data storage</li>
                  <li>• Multi-device sync</li>
                  <li>• Offline access</li>
                  <li>• Data export options</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Start Protecting Your Child&apos;s Health Today
            </h2>
            <p className="text-xl text-white/90">
              Join thousands of families who trust Kavach to keep their children healthy and protected
            </p>
            <Link href="/dashboard">
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-6 bg-white text-primary hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
