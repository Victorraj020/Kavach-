"use client";

import Link from "next/link";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Bell, Calendar, FileText, MapPin, MessageSquare, Search, Shield, Stethoscope, Syringe, TrendingUp, Upload, User } from "lucide-react";

type ParentInfo = {
  fatherName: string;
  motherName: string;
  phone: string;
  address: string;
};

type Child = {
  id: string;
  name: string;
  dob: string;
  sex: "M" | "F";
  parent: ParentInfo;
};

const mockChildren: Child[] = [
  {
    id: "c1",
    name: "Aarav Sharma",
    dob: "2023-04-12",
    sex: "M",
    parent: {
      fatherName: "Rahul Sharma",
      motherName: "Priya Sharma",
      phone: "+91 98XXXXXX10",
      address: "B-204, Sunrise Apartments, Pune",
    },
  },
  {
    id: "c2",
    name: "Anaya Verma",
    dob: "2022-11-02",
    sex: "F",
    parent: {
      fatherName: "Amit Verma",
      motherName: "Neha Verma",
      phone: "+91 99XXXXXX42",
      address: "Green Park, New Delhi",
    },
  },
];

const DoctorDashboard = () => {
  const [search, setSearch] = useState("");
  const [activeChildId, setActiveChildId] = useState<string | null>(mockChildren[0]?.id ?? null);
  const activeChild = mockChildren.find((c) => c.id === activeChildId) ?? null;

  // Mock feature states
  const [appointments, setAppointments] = useState<Array<{ id: string; date: string; reason: string }>>([
    { id: "a1", date: "2025-09-15 10:00", reason: "Routine checkup" },
  ]);
  const [newAppointment, setNewAppointment] = useState({ date: "", reason: "" });

  const [prescriptions, setPrescriptions] = useState<Array<{ id: string; drug: string; dose: string; notes?: string }>>([]);
  const [newRx, setNewRx] = useState({ drug: "", dose: "", notes: "" });

  const [visitNotes, setVisitNotes] = useState<Array<{ id: string; note: string; date: string }>>([]);
  const [newNote, setNewNote] = useState("");

  const [vitals, setVitals] = useState<Array<{ id: string; date: string; weightKg: string; heightCm: string; headCm: string }>>([]);
  const [newVital, setNewVital] = useState({ date: "", weightKg: "", heightCm: "", headCm: "" });

  const filteredChildren = mockChildren.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

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
                <p className="text-sm text-muted-foreground">Doctor Console</p>
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
        {/* Patient Search and List */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="shadow-card border-primary/10 lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="h-5 w-5 text-primary" />
                Patients
              </CardTitle>
              <CardDescription>Find children by name</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4 flex items-center gap-2 rounded-md border px-3 py-2">
                <Search className="h-4 w-4 text-muted-foreground" />
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full bg-transparent outline-none text-sm"
                  placeholder="Search child name..."
                />
              </div>
              <div className="space-y-3">
                {filteredChildren.map((child) => (
                  <button
                    key={child.id}
                    onClick={() => setActiveChildId(child.id)}
                    className={`w-full text-left rounded-lg border px-3 py-3 transition-smooth hover:shadow-card ${
                      activeChildId === child.id ? "border-primary/40 bg-primary/5" : "border-border"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarFallback>{child.name.split(" ").map((n) => n[0]).join("")}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium text-foreground">{child.name}</div>
                        <div className="text-xs text-muted-foreground">DOB: {child.dob} • Sex: {child.sex}</div>
                      </div>
                    </div>
                  </button>
                ))}
                {filteredChildren.length === 0 && (
                  <div className="text-sm text-muted-foreground">No matching children</div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Active Patient Details */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="shadow-card border-secondary/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Stethoscope className="h-5 w-5 text-secondary" />
                  {activeChild ? activeChild.name : "Select a child"}
                </CardTitle>
                <CardDescription>
                  {activeChild ? `DOB: ${activeChild.dob} • Sex: ${activeChild.sex}` : "Choose a patient from the left list"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="vaccinations" className="w-full">
                  <TabsList className="w-full flex flex-wrap gap-2 h-auto mb-2">
                    <TabsTrigger value="vaccinations">Vaccinations</TabsTrigger>
                    <TabsTrigger value="appointments">Appointments</TabsTrigger>
                    <TabsTrigger value="prescriptions">Prescriptions</TabsTrigger>
                    <TabsTrigger value="notes">Visit Notes</TabsTrigger>
                    <TabsTrigger value="vitals">Vitals & Growth</TabsTrigger>
                    <TabsTrigger value="records">Records</TabsTrigger>
                    <TabsTrigger value="documents">Documents</TabsTrigger>
                    <TabsTrigger value="communication">Communication</TabsTrigger>
                    <TabsTrigger value="analytics">Analytics</TabsTrigger>
                    <TabsTrigger value="family">Family</TabsTrigger>
                  </TabsList>

                  <TabsContent value="vaccinations" className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                        <Syringe className="h-4 w-4 text-secondary" />
                        Vaccination Schedule
                      </h3>
                      <Button variant="outline" size="sm">Update Status</Button>
                    </div>
                    <div className="text-sm text-muted-foreground text-center py-6">
                      No vaccination data yet. Add a child record to begin.
                    </div>
                  </TabsContent>

                  <TabsContent value="appointments" className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        Appointments
                      </h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card className="border border-border">
                        <CardHeader>
                          <CardTitle className="text-base">Upcoming</CardTitle>
                          <CardDescription>Scheduled visits</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3">
                            {appointments.length === 0 && (
                              <div className="text-sm text-muted-foreground">No appointments</div>
                            )}
                            {appointments.map((ap) => (
                              <div key={ap.id} className="rounded-md border p-3">
                                <div className="text-sm font-medium text-foreground">{ap.date}</div>
                                <div className="text-xs text-muted-foreground">{ap.reason}</div>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                      <Card className="border border-border">
                        <CardHeader>
                          <CardTitle className="text-base">Add Appointment</CardTitle>
                          <CardDescription>For testing only</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <div className="space-y-2">
                            <Label htmlFor="ap-date">Date & Time</Label>
                            <Input id="ap-date" placeholder="YYYY-MM-DD HH:mm" value={newAppointment.date} onChange={(e) => setNewAppointment({ ...newAppointment, date: e.target.value })} />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="ap-reason">Reason</Label>
                            <Input id="ap-reason" placeholder="Reason" value={newAppointment.reason} onChange={(e) => setNewAppointment({ ...newAppointment, reason: e.target.value })} />
                          </div>
                          <Button
                            onClick={() => {
                              if (!newAppointment.date || !newAppointment.reason) return;
                              setAppointments([{ id: crypto.randomUUID(), date: newAppointment.date, reason: newAppointment.reason }, ...appointments]);
                              setNewAppointment({ date: "", reason: "" });
                            }}
                          >
                            Add
                          </Button>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>

                  <TabsContent value="prescriptions" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card className="border border-border">
                        <CardHeader>
                          <CardTitle className="text-base">Write Prescription</CardTitle>
                          <CardDescription>Mock form</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <div className="space-y-2">
                            <Label htmlFor="rx-drug">Drug</Label>
                            <Input id="rx-drug" placeholder="Paracetamol" value={newRx.drug} onChange={(e) => setNewRx({ ...newRx, drug: e.target.value })} />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="rx-dose">Dose</Label>
                            <Input id="rx-dose" placeholder="5 ml twice daily" value={newRx.dose} onChange={(e) => setNewRx({ ...newRx, dose: e.target.value })} />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="rx-notes">Notes</Label>
                            <Textarea id="rx-notes" placeholder="with meals, 3 days" value={newRx.notes} onChange={(e) => setNewRx({ ...newRx, notes: e.target.value })} />
                          </div>
                          <Button
                            onClick={() => {
                              if (!newRx.drug || !newRx.dose) return;
                              setPrescriptions([{ id: crypto.randomUUID(), drug: newRx.drug, dose: newRx.dose, notes: newRx.notes }, ...prescriptions]);
                              setNewRx({ drug: "", dose: "", notes: "" });
                            }}
                          >
                            Save Prescription
                          </Button>
                        </CardContent>
                      </Card>
                      <Card className="border border-border">
                        <CardHeader>
                          <CardTitle className="text-base">Current Prescriptions</CardTitle>
                          <CardDescription>For this patient (mock)</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3">
                            {prescriptions.length === 0 && (
                              <div className="text-sm text-muted-foreground">No prescriptions</div>
                            )}
                            {prescriptions.map((rx) => (
                              <div key={rx.id} className="rounded-md border p-3">
                                <div className="text-sm font-medium text-foreground">{rx.drug}</div>
                                <div className="text-xs text-muted-foreground">Dose: {rx.dose}</div>
                                {rx.notes && <div className="text-xs text-muted-foreground">Notes: {rx.notes}</div>}
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>

                  <TabsContent value="notes" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card className="border border-border">
                        <CardHeader>
                          <CardTitle className="text-base">Add Visit Note</CardTitle>
                          <CardDescription>Clinical notes (mock)</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <div className="space-y-2">
                            <Label htmlFor="note-text">Note</Label>
                            <Textarea id="note-text" placeholder="Examination, assessment, plan" value={newNote} onChange={(e) => setNewNote(e.target.value)} />
                          </div>
                          <Button
                            onClick={() => {
                              if (!newNote) return;
                              setVisitNotes([{ id: crypto.randomUUID(), note: newNote, date: new Date().toISOString() }, ...visitNotes]);
                              setNewNote("");
                            }}
                          >
                            Save Note
                          </Button>
                        </CardContent>
                      </Card>
                      <Card className="border border-border">
                        <CardHeader>
                          <CardTitle className="text-base">Notes History</CardTitle>
                          <CardDescription>Recent notes</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3">
                            {visitNotes.length === 0 && (
                              <div className="text-sm text-muted-foreground">No notes yet</div>
                            )}
                            {visitNotes.map((n) => (
                              <div key={n.id} className="rounded-md border p-3">
                                <div className="text-xs text-muted-foreground">{new Date(n.date).toLocaleString()}</div>
                                <div className="text-sm text-foreground mt-1 whitespace-pre-wrap">{n.note}</div>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>

                  <TabsContent value="vitals" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card className="border border-border">
                        <CardHeader>
                          <CardTitle className="text-base">Add Vitals</CardTitle>
                          <CardDescription>Weight/Height/Head</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <div className="space-y-2">
                            <Label htmlFor="vt-date">Date</Label>
                            <Input id="vt-date" placeholder="YYYY-MM-DD" value={newVital.date} onChange={(e) => setNewVital({ ...newVital, date: e.target.value })} />
                          </div>
                          <div className="grid grid-cols-3 gap-3">
                            <div className="space-y-2">
                              <Label htmlFor="vt-w">Weight (kg)</Label>
                              <Input id="vt-w" placeholder="7.2" value={newVital.weightKg} onChange={(e) => setNewVital({ ...newVital, weightKg: e.target.value })} />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="vt-h">Height (cm)</Label>
                              <Input id="vt-h" placeholder="65" value={newVital.heightCm} onChange={(e) => setNewVital({ ...newVital, heightCm: e.target.value })} />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="vt-head">Head (cm)</Label>
                              <Input id="vt-head" placeholder="42" value={newVital.headCm} onChange={(e) => setNewVital({ ...newVital, headCm: e.target.value })} />
                            </div>
                          </div>
                          <Button
                            onClick={() => {
                              if (!newVital.date) return;
                              setVitals([{ id: crypto.randomUUID(), ...newVital }, ...vitals]);
                              setNewVital({ date: "", weightKg: "", heightCm: "", headCm: "" });
                            }}
                          >
                            Save Vitals
                          </Button>
                        </CardContent>
                      </Card>
                      <Card className="border border-border">
                        <CardHeader>
                          <CardTitle className="text-base">Growth Overview</CardTitle>
                          <CardDescription>Trend preview</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="text-center py-6">
                            <TrendingUp className="h-8 w-8 text-warning mx-auto mb-2" />
                            <div className="text-sm text-muted-foreground">Charts placeholder. Add real charts later.</div>
                          </div>
                          <div className="space-y-2">
                            {vitals.map((v) => (
                              <div key={v.id} className="text-xs text-muted-foreground border rounded-md p-2">
                                {v.date}: {v.weightKg} kg, {v.heightCm} cm, head {v.headCm} cm
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>

                  <TabsContent value="records" className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                        <FileText className="h-4 w-4 text-warning" />
                        Health Records
                      </h3>
                      <Link href="/health-records">
                        <Button size="sm">Open Records</Button>
                      </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card className="border border-border">
                        <CardHeader>
                          <CardTitle className="text-base">Recent Visits</CardTitle>
                          <CardDescription>Doctor checkups and notes</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="text-sm text-muted-foreground text-center py-4">No visits recorded</div>
                        </CardContent>
                      </Card>
                      <Card className="border border-border">
                        <CardHeader>
                          <CardTitle className="text-base">Prescriptions</CardTitle>
                          <CardDescription>Active medications</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="text-sm text-muted-foreground text-center py-4">No prescriptions</div>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>

                  <TabsContent value="documents" className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                        <Upload className="h-4 w-4 text-info" />
                        Documents
                      </h3>
                    </div>
                    <div className="rounded-md border p-4 text-sm text-muted-foreground">
                      Upload placeholder. Integrate storage later.
                    </div>
                  </TabsContent>

                  <TabsContent value="communication" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card className="border border-border">
                        <CardHeader>
                          <CardTitle className="text-base">Message Parents</CardTitle>
                          <CardDescription>Mock message</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <div className="space-y-2">
                            <Label htmlFor="msg">Message</Label>
                            <Textarea id="msg" placeholder="Reminder or advice..." />
                          </div>
                          <Button>
                            <MessageSquare className="h-4 w-4 mr-2" />
                            Send
                          </Button>
                        </CardContent>
                      </Card>
                      <Card className="border border-border">
                        <CardHeader>
                          <CardTitle className="text-base">Recent Messages</CardTitle>
                          <CardDescription>History placeholder</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="text-sm text-muted-foreground">No messages yet</div>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>

                  <TabsContent value="analytics" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Card className="border border-primary/20">
                        <CardHeader>
                          <CardTitle className="text-base">Patients</CardTitle>
                          <CardDescription>Total under care</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="text-3xl font-bold">{mockChildren.length}</div>
                        </CardContent>
                      </Card>
                      <Card className="border border-secondary/20">
                        <CardHeader>
                          <CardTitle className="text-base">Upcoming Appts</CardTitle>
                          <CardDescription>Next 7 days</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="text-3xl font-bold">{appointments.length}</div>
                        </CardContent>
                      </Card>
                      <Card className="border border-warning/20">
                        <CardHeader>
                          <CardTitle className="text-base">Active RX</CardTitle>
                          <CardDescription>Open prescriptions</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="text-3xl font-bold">{prescriptions.length}</div>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>

                  <TabsContent value="family" className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                      <User className="h-4 w-4 text-info" />
                      Parent Information
                    </h3>
                    {activeChild ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Card className="border border-border">
                          <CardHeader>
                            <CardTitle className="text-base">Father</CardTitle>
                            <CardDescription>{activeChild.parent.fatherName}</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="text-sm text-muted-foreground">Phone: {activeChild.parent.phone}</div>
                          </CardContent>
                        </Card>
                        <Card className="border border-border">
                          <CardHeader>
                            <CardTitle className="text-base">Mother</CardTitle>
                            <CardDescription>{activeChild.parent.motherName}</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="text-sm text-muted-foreground">Address: {activeChild.parent.address}</div>
                          </CardContent>
                        </Card>
                      </div>
                    ) : (
                      <div className="text-sm text-muted-foreground text-center py-6">No child selected</div>
                    )}
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Nearby Centers (for quick referral) */}
            <Card className="shadow-card border-info/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-info" />
                  Nearby Vaccination Centers
                </CardTitle>
                <CardDescription>Refer patients to facilities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-6">
                  <div className="p-4 bg-info/10 rounded-full w-fit mx-auto mb-4">
                    <MapPin className="h-8 w-8 text-info" />
                  </div>
                  <Link href="/centers">
                    <Button variant="outline">Find Centers</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;


