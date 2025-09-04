"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Baby, Camera, FileText, Heart, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ChildRegistration = () => {
  const router = useRouter();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    childName: "",
    dateOfBirth: "",
    timeOfBirth: "",
    gender: "",
    bloodGroup: "",
    birthWeight: "",
    birthPlace: "",
    parentName: "",
    parentPhone: "",
    parentEmail: "",
    address: "",
    emergencyContact: "",
    allergies: "",
    specialNotes: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // TODO: Implement actual API call to save child data
      // const response = await api.post('/children', formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Child Registered Successfully!",
        description: `${formData.childName} has been added to your family profile.`,
      });
      
      router.push("/dashboard");
    } catch (error) {
      toast({
        title: "Registration Failed",
        description: "There was an error registering your child. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
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
                <Baby className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">Register New Child</h1>
                <p className="text-sm text-muted-foreground">Add your child&apos;s details to Kavach</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 max-w-4xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Child Information */}
          <Card className="shadow-card border-primary/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Baby className="h-5 w-5 text-primary" />
                Child Information
              </CardTitle>
              <CardDescription>Basic details about your child</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="childName">Child&apos;s Full Name *</Label>
                  <Input
                    id="childName"
                    value={formData.childName}
                    onChange={(e) => handleInputChange("childName", e.target.value)}
                    placeholder="Enter full name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="gender">Gender *</Label>
                  <Select value={formData.gender} onValueChange={(value) => handleInputChange("gender", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                  <Input
                    id="dateOfBirth"
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timeOfBirth">Time of Birth</Label>
                  <Input
                    id="timeOfBirth"
                    type="time"
                    value={formData.timeOfBirth}
                    onChange={(e) => handleInputChange("timeOfBirth", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bloodGroup">Blood Group</Label>
                  <Select value={formData.bloodGroup} onValueChange={(value) => handleInputChange("bloodGroup", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select blood group" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="a+">A+</SelectItem>
                      <SelectItem value="a-">A-</SelectItem>
                      <SelectItem value="b+">B+</SelectItem>
                      <SelectItem value="b-">B-</SelectItem>
                      <SelectItem value="ab+">AB+</SelectItem>
                      <SelectItem value="ab-">AB-</SelectItem>
                      <SelectItem value="o+">O+</SelectItem>
                      <SelectItem value="o-">O-</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="birthWeight">Birth Weight (kg)</Label>
                  <Input
                    id="birthWeight"
                    type="number"
                    step="0.1"
                    value={formData.birthWeight}
                    onChange={(e) => handleInputChange("birthWeight", e.target.value)}
                    placeholder="e.g., 3.2"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="birthPlace">Place of Birth</Label>
                <Input
                  id="birthPlace"
                  value={formData.birthPlace}
                  onChange={(e) => handleInputChange("birthPlace", e.target.value)}
                  placeholder="Hospital name and city"
                />
              </div>
            </CardContent>
          </Card>

          {/* Parent Information */}
          <Card className="shadow-card border-secondary/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5 text-secondary" />
                Parent/Guardian Information
              </CardTitle>
              <CardDescription>Primary contact details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="parentName">Parent/Guardian Name *</Label>
                  <Input
                    id="parentName"
                    value={formData.parentName}
                    onChange={(e) => handleInputChange("parentName", e.target.value)}
                    placeholder="Enter full name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="parentPhone">Phone Number *</Label>
                  <Input
                    id="parentPhone"
                    type="tel"
                    value={formData.parentPhone}
                    onChange={(e) => handleInputChange("parentPhone", e.target.value)}
                    placeholder="+91 XXXXX XXXXX"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="parentEmail">Email Address</Label>
                  <Input
                    id="parentEmail"
                    type="email"
                    value={formData.parentEmail}
                    onChange={(e) => handleInputChange("parentEmail", e.target.value)}
                    placeholder="email@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="emergencyContact">Emergency Contact</Label>
                  <Input
                    id="emergencyContact"
                    type="tel"
                    value={formData.emergencyContact}
                    onChange={(e) => handleInputChange("emergencyContact", e.target.value)}
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Textarea
                  id="address"
                  value={formData.address}
                  onChange={(e) => handleInputChange("address", e.target.value)}
                  placeholder="Complete address with pincode"
                  className="min-h-[80px]"
                />
              </div>
            </CardContent>
          </Card>

          {/* Medical Information */}
          <Card className="shadow-card border-warning/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-destructive" />
                Medical Information
              </CardTitle>
              <CardDescription>Health-related details and conditions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="allergies">Known Allergies</Label>
                <Textarea
                  id="allergies"
                  value={formData.allergies}
                  onChange={(e) => handleInputChange("allergies", e.target.value)}
                  placeholder="List any known allergies or write &apos;None&apos;"
                  className="min-h-[80px]"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="specialNotes">Special Medical Notes</Label>
                <Textarea
                  id="specialNotes"
                  value={formData.specialNotes}
                  onChange={(e) => handleInputChange("specialNotes", e.target.value)}
                  placeholder="Any special medical conditions or notes"
                  className="min-h-[80px]"
                />
              </div>
            </CardContent>
          </Card>

          {/* Document Upload */}
          <Card className="shadow-card border-success/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-success" />
                Documents (Optional)
              </CardTitle>
              <CardDescription>Upload birth certificate and photos</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Birth Certificate</Label>
                  <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                    <FileText className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Click to upload or drag and drop</p>
                    <Badge variant="outline" className="mt-2">PDF, JPG up to 5MB</Badge>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Child&apos;s Photo</Label>
                  <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                    <Camera className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Click to upload or drag and drop</p>
                    <Badge variant="outline" className="mt-2">JPG, PNG up to 2MB</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Submit Button */}
          <div className="flex gap-4 pt-4">
            <Link href="/dashboard" className="flex-1">
              <Button type="button" variant="outline" className="w-full">
                Cancel
              </Button>
            </Link>
            <Button type="submit" className="flex-1" variant="medical" disabled={isSubmitting}>
              {isSubmitting ? "Registering..." : "Register Child"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChildRegistration;
