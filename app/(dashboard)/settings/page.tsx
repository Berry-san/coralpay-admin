import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Camera } from "lucide-react";

const Settings = () => {
  return (
    <div className="space-y-6">
      {/* <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-foreground">Settings</h1>
        <div className="flex items-center gap-2">
          <Bell className="h-5 w-5" />
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="text-sm">
              <p className="font-medium">John Doe</p>
              <p className="text-muted-foreground">Super User</p>
            </div>
          </div>
        </div>
      </div> */}

      <Card className="max-w-4xl shadow-card border-none">
        <CardContent className="p-0">
          <Tabs defaultValue="profile" className="w-full">
            <div className="border-b">
              <TabsList className="grid w-full grid-cols-6 h-auto bg-transparent">
                <TabsTrigger
                  value="profile"
                  className="data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:bg-transparent rounded-none py-4"
                >
                  Profile
                </TabsTrigger>
                <TabsTrigger
                  value="change-password"
                  className="data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:bg-transparent rounded-none py-4"
                >
                  Change Password
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="profile" className="p-6">
              <div className="space-y-6">
                {/* Profile Picture Section */}
                <div className="flex items-center gap-6">
                  <div className="relative">
                    <Avatar className="h-20 w-20">
                      <AvatarImage src="/placeholder.svg" />
                      <AvatarFallback className="text-lg">JD</AvatarFallback>
                    </Avatar>
                    <Button
                      size="sm"
                      className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full"
                      variant="secondary"
                    >
                      <Camera className="h-4 w-4" />
                    </Button>
                  </div>
                  <div>
                    <h3 className="font-semibold">Profile Picture</h3>
                    <p className="text-sm text-muted-foreground">
                      Upload a new profile picture
                    </p>
                  </div>
                </div>

                {/* Basic Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" defaultValue="John Doe" className="mt-1" />
                  </div>
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <div className="flex items-center gap-2 mt-1">
                      <Input
                        id="phone"
                        defaultValue="90 0101 0101"
                        className="flex-1"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      defaultValue="johndoe@gmail.com"
                      className="mt-1"
                    />
                  </div>
                </div>

                {/* Save Button */}
                <div className="flex justify-end pt-6">
                  <Button variant="secondary">Save Changes</Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="change-password" className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="phone">Old Password</Label>
                  <div className="flex items-center gap-2 mt-1">
                    <Input
                      id="phone"
                      // defaultValue="90 0101 0101"
                      className="flex-1"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">New Password</Label>
                  <Input
                    id="email"
                    type="email"
                    // defaultValue="johndoe@gmail.com"
                    className="mt-1"
                  />
                </div>
              </div>

              {/* Save Button */}
              <div className="flex justify-end pt-6">
                <Button variant="secondary">Save Changes</Button>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default Settings;
