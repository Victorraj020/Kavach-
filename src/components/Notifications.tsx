"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Bell, Settings } from "lucide-react";

interface Notification {
  id: number;
  title: string;
  message: string;
  timestamp: string;
  status: "read" | "unread";
  type: "vaccine_due" | "checkup_reminder" | "prescription_reminder" | "appointment" | "health_tip" | "emergency";
}

const Notifications = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [notificationSettings, setNotificationSettings] = useState({
    vaccineReminders: true,
    checkupReminders: true,
    prescriptionReminders: true,
    appointmentNotifications: true,
    healthTips: true,
    emergencyAlerts: true,
    pushNotifications: true,
    emailNotifications: false,
    smsNotifications: false,
    quietHours: false,
    quietHoursStart: "22:00",
    quietHoursEnd: "07:00"
  });

  const handleAction = (notification: Notification) => {
    // TODO: Handle notification actions
    console.log("Handle action for notification:", notification);
  };

  const markAsRead = (id: number) => {
    setNotifications(prev =>
      prev.map(notification =>
        notification.id === id
          ? { ...notification, status: "read" }
          : notification
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev =>
      prev.map(notification => ({ ...notification, status: "read" }))
    );
  };

  const deleteNotification = (id: number) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id));
  };

  const filteredNotifications = notifications.filter(notification => {
    if (activeTab === "all") return true;
    if (activeTab === "unread") return notification.status === "unread";
    if (activeTab === "vaccines") return notification.type === "vaccine_due";
    if (activeTab === "checkups") return notification.type === "checkup_reminder";
    if (activeTab === "prescriptions") return notification.type === "prescription_reminder";
    return true;
  });

  const unreadCount = notifications.filter(n => n.status === "unread").length;

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
                <Bell className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">Notifications</h1>
                <p className="text-sm text-muted-foreground">Stay updated with health reminders</p>
              </div>
            </div>
            <div className="ml-auto flex items-center gap-2">
              <Badge variant="secondary" className="text-sm">
                {unreadCount} unread
              </Badge>
              <Button variant="outline" size="sm" onClick={markAllAsRead}>
                Mark All Read
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 max-w-4xl">
        {notifications.length === 0 ? (
          // No notifications state
          <Card className="shadow-card border-primary/10">
            <CardContent className="p-8 text-center">
              <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                <Bell className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-medium text-foreground mb-2">No Notifications</h3>
              <p className="text-muted-foreground mb-4">You're all caught up! New notifications will appear here</p>
              <Link href="/dashboard">
                <Button>Go to Dashboard</Button>
              </Link>
            </CardContent>
          </Card>
        ) : (
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="unread">Unread ({unreadCount})</TabsTrigger>
              <TabsTrigger value="vaccines">Vaccines</TabsTrigger>
              <TabsTrigger value="checkups">Checkups</TabsTrigger>
              <TabsTrigger value="prescriptions">Prescriptions</TabsTrigger>
            </TabsList>

            {/* All Notifications Tab */}
            <TabsContent value="all" className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-foreground">All Notifications</h2>
                <Button variant="outline" size="sm" onClick={markAllAsRead}>
                  Mark All Read
                </Button>
              </div>

              <div className="space-y-4">
                {filteredNotifications.map((notification) => (
                  <Card
                    key={notification.id}
                    className={`shadow-card transition-all ${
                      notification.status === "unread"
                        ? "border-primary/20 bg-primary/5"
                        : "border-border"
                    }`}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <Bell className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1 space-y-3">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <h3 className="font-semibold text-foreground">{notification.title}</h3>
                                {notification.status === "unread" && (
                                  <Badge variant="secondary" className="text-xs">New</Badge>
                                )}
                              </div>
                              <p className="text-sm text-muted-foreground mb-2">{notification.message}</p>
                              <p className="text-xs text-muted-foreground mt-2">
                                {new Date(notification.timestamp).toLocaleString()}
                              </p>
                            </div>
                          </div>

                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              onClick={() => handleAction(notification)}
                              className="flex-1"
                            >
                              View
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => markAsRead(notification.id)}
                            >
                              {notification.status === "unread" ? "Mark Read" : "Read"}
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => deleteNotification(notification.id)}
                            >
                              Delete
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Settings Tab */}
            <TabsContent value="settings" className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground">Notification Settings</h2>

              <Card className="shadow-card border-primary/10">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="h-5 w-5 text-primary" />
                    Notification Preferences
                  </CardTitle>
                  <CardDescription>Customize your notification settings</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label className="text-sm font-medium">Vaccine Reminders</Label>
                        <p className="text-xs text-muted-foreground">Get notified about upcoming vaccines</p>
                      </div>
                      <Switch
                        checked={notificationSettings.vaccineReminders}
                        onCheckedChange={(checked: boolean) =>
                          setNotificationSettings(prev => ({ ...prev, vaccineReminders: checked }))
                        }
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label className="text-sm font-medium">Checkup Reminders</Label>
                        <p className="text-xs text-muted-foreground">Reminders for health checkups</p>
                      </div>
                      <Switch
                        checked={notificationSettings.checkupReminders}
                        onCheckedChange={(checked: boolean) =>
                          setNotificationSettings(prev => ({ ...prev, checkupReminders: checked }))
                        }
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label className="text-sm font-medium">Prescription Reminders</Label>
                        <p className="text-xs text-muted-foreground">Daily medication reminders</p>
                      </div>
                      <Switch
                        checked={notificationSettings.prescriptionReminders}
                        onCheckedChange={(checked: boolean) =>
                          setNotificationSettings(prev => ({ ...prev, prescriptionReminders: checked }))
                        }
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label className="text-sm font-medium">Appointment Notifications</Label>
                        <p className="text-xs text-muted-foreground">Confirmations and updates</p>
                      </div>
                      <Switch
                        checked={notificationSettings.appointmentNotifications}
                        onCheckedChange={(checked) =>
                          setNotificationSettings(prev => ({ ...prev, appointmentNotifications: checked }))
                        }
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label className="text-sm font-medium">Health Tips</Label>
                        <p className="text-xs text-muted-foreground">Daily health and wellness tips</p>
                      </div>
                      <Switch
                        checked={notificationSettings.healthTips}
                        onCheckedChange={(checked) =>
                          setNotificationSettings(prev => ({ ...prev, healthTips: checked }))
                        }
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label className="text-sm font-medium">Emergency Alerts</Label>
                        <p className="text-xs text-muted-foreground">Critical health alerts</p>
                      </div>
                      <Switch
                        checked={notificationSettings.emergencyAlerts}
                        onCheckedChange={(checked) =>
                          setNotificationSettings(prev => ({ ...prev, emergencyAlerts: checked }))
                        }
                      />
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <h3 className="font-medium mb-3">Delivery Methods</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Label className="text-sm">Push Notifications</Label>
                        <Switch
                          checked={notificationSettings.pushNotifications}
                          onCheckedChange={(checked) =>
                            setNotificationSettings(prev => ({ ...prev, pushNotifications: checked }))
                          }
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label className="text-sm">Email Notifications</Label>
                        <Switch
                          checked={notificationSettings.emailNotifications}
                          onCheckedChange={(checked) =>
                            setNotificationSettings(prev => ({ ...prev, emailNotifications: checked }))
                          }
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label className="text-sm">SMS Notifications</Label>
                        <Switch
                          checked={notificationSettings.smsNotifications}
                          onCheckedChange={(checked) =>
                            setNotificationSettings(prev => ({ ...prev, smsNotifications: checked }))
                          }
                        />
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <h3 className="font-medium mb-3">Quiet Hours</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Label className="text-sm">Enable Quiet Hours</Label>
                        <Switch
                          checked={notificationSettings.quietHours}
                          onCheckedChange={(checked) =>
                            setNotificationSettings(prev => ({ ...prev, quietHours: checked }))
                          }
                        />
                      </div>
                      {notificationSettings.quietHours && (
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label className="text-xs text-muted-foreground">Start Time</Label>
                            <input
                              type="time"
                              value={notificationSettings.quietHoursStart}
                              onChange={(e) =>
                                setNotificationSettings(prev => ({ ...prev, quietHoursStart: e.target.value }))
                              }
                              className="mt-1 w-full px-3 py-2 border border-border rounded-md text-sm"
                            />
                          </div>
                          <div>
                            <Label className="text-xs text-muted-foreground">End Time</Label>
                            <input
                              type="time"
                              value={notificationSettings.quietHoursEnd}
                              onChange={(e) =>
                                setNotificationSettings(prev => ({ ...prev, quietHoursEnd: e.target.value }))
                              }
                              className="mt-1 w-full px-3 py-2 border border-border rounded-md text-sm"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        )}
      </div>
    </div>
  );
};

export default Notifications;
