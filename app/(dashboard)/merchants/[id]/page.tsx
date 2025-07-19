import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, CreditCard, MapPin } from "lucide-react";
import Link from "next/link";

const OrganizationView = () => {
  const organization = {
    name: "First Bank",
    logo: "🏦",
    subtitle: "Banking, Mathematics, Teaching Mathematics",
    lastSeen: "16mins ago",
    basicInfo: {
      bankName: "First Bank Nigeria",
      type: "Multiple Branch",
      dateCreated: "04 September 2023",
      country: "Nigerian",
      organizationId: "ORG-12345",
      address: "1, Aruara Street, Benin",
    },
    contactPerson: {
      fullName: "Michael Moore",
      dateCreated: "01 September 2023",
      phoneNumber: "+2346 *** *** 804",
      emailAddress: "M*******8@gmail.com",
    },
    billingInfo: {
      billingType: "Master Card",
      cardInformation: "4*** **** **** ***1",
      expiryDate: "10-08",
      nextBilling: "2023-03-15",
      status: "Active",
    },
    recentActivity: [
      {
        date: "2023-02-13",
        action: "Branch Created",
        time: "8:00 AM-4:00 PM",
      },
      {
        date: "2023-02-12",
        action: "Branch Created",
        time: "07:55 AM - 4:00 PM",
      },
      {
        date: "2023-02-11",
        action: "Branch Created",
        time: "08:30 AM - 4:00 PM",
      },
    ],
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/customers">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="mr-2 h-4 w-4" />
          </Button>
        </Link>
        <h1 className="text-2xl font-bold text-foreground">
          View Organization
        </h1>
      </div>

      {/* Staff Details Header */}
      <Card className="shadow-card">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 rounded-lg bg-gradient-primary flex items-center justify-center text-2xl">
                {organization.logo}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-bold">{organization.name}</h2>
                  <Badge variant="secondary">Active</Badge>
                </div>
                <p className="text-muted-foreground">{organization.subtitle}</p>
                <p className="text-sm text-muted-foreground">
                  Last developed • {organization.lastSeen}
                </p>
              </div>
            </div>
            <Button variant="secondary">Edit</Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Basic Information */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Basic Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Bank Name</p>
                <p className="font-medium">{organization.basicInfo.bankName}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Type</p>
                <p className="font-medium">{organization.basicInfo.type}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Date Created</p>
                <p className="font-medium">
                  {organization.basicInfo.dateCreated}
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Country</p>
                <p className="font-medium">{organization.basicInfo.country}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Organization ID</p>
                <p className="font-medium">
                  {organization.basicInfo.organizationId}
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Address</p>
                <p className="font-medium flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {organization.basicInfo.address}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Person Information */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Contact Person Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Full Name</p>
                <p className="font-medium">
                  {organization.contactPerson.fullName}
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Date Created</p>
                <p className="font-medium">
                  {organization.contactPerson.dateCreated}
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Phone Number</p>
                <p className="font-medium">
                  {organization.contactPerson.phoneNumber}
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email Address</p>
                <p className="font-medium">
                  {organization.contactPerson.emailAddress}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Billing Information */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Billing Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Billing Type</p>
                <p className="font-medium flex items-center gap-2">
                  <CreditCard className="h-4 w-4" />
                  {organization.billingInfo.billingType}
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">
                  Card Information
                </p>
                <p className="font-medium">
                  {organization.billingInfo.cardInformation}
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Expiry Date</p>
                <p className="font-medium">
                  {organization.billingInfo.expiryDate}
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Next Billing</p>
                <p className="font-medium">
                  {organization.billingInfo.nextBilling}
                </p>
              </div>
              <div className="col-span-2">
                <p className="text-sm text-muted-foreground">Status</p>
                <Badge variant="secondary">
                  {organization.billingInfo.status}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Recent Activity
              <Button variant="ghost" size="sm">
                View all
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {organization.recentActivity.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 pb-3 border-b border-border/50 last:border-0"
                >
                  <div className="h-2 w-2 rounded-full bg-secondary"></div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{activity.date}</span>
                      <span className="text-sm text-muted-foreground">
                        {activity.time}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {activity.action}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OrganizationView;
