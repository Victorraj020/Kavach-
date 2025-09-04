"use client";

import Link from "next/link";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Stethoscope, Users } from "lucide-react";

const RoleSelect = () => {
  const [role, setRole] = useState<"parent" | "doctor" | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary-light/5 to-secondary-light/10 grid place-items-center px-4 py-10">
      <div className="w-full max-w-3xl">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="p-2 bg-gradient-primary rounded-lg">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <Badge variant="secondary" className="text-sm px-3 py-1 bg-secondary/10 text-secondary-foreground border-secondary/20">
              Kavach
            </Badge>
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-1">Select Your Role</h1>
          <p className="text-muted-foreground">Choose how you want to continue. Use Next for testing.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <button onClick={() => setRole("parent")} className={`text-left transition-smooth ${role === "parent" ? "scale-[1.01]" : ""}`}>
            <Card className={`h-full hover:shadow-floating border ${role === "parent" ? "border-primary/40 bg-primary/5" : "border-border"}`}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Parent
                </CardTitle>
                <CardDescription>Access your child dashboard and records</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">View vaccinations, health records, and notifications.</p>
              </CardContent>
            </Card>
          </button>

          <button onClick={() => setRole("doctor")} className={`text-left transition-smooth ${role === "doctor" ? "scale-[1.01]" : ""}`}>
            <Card className={`h-full hover:shadow-floating border ${role === "doctor" ? "border-secondary/40 bg-secondary/5" : "border-border"}`}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Stethoscope className="h-5 w-5 text-secondary" />
                  Doctor
                </CardTitle>
                <CardDescription>Access patients, records, and schedules</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Find your patients and manage vaccination status.</p>
              </CardContent>
            </Card>
          </button>
        </div>

        <div className="mt-8 flex items-center justify-end gap-3">
          <Link href={role === "doctor" ? "/doctor" : "/dashboard"}>
            <Button disabled={!role}>Next</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RoleSelect;


