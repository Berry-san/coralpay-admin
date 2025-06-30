"use client";

import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Loader2, Clock, CheckCircle, XCircle } from "lucide-react";

export interface ApiResponse {
  status: number;
  statusText: string;
  headers: Record<string, string>;
  data: any;
  time: number;
}

interface ResponseViewerProps {
  response: ApiResponse | null;
  loading: boolean;
  error: string | null;
}

export const ResponseViewer = ({
  response,
  loading,
  error,
}: ResponseViewerProps) => {
  const getStatusColor = (status: number) => {
    if (status >= 200 && status < 300)
      return "text-green-600 bg-green-50 border-green-200";
    if (status >= 300 && status < 400)
      return "text-yellow-600 bg-yellow-50 border-yellow-200";
    if (status >= 400 && status < 500)
      return "text-orange-600 bg-orange-50 border-orange-200";
    return "text-red-600 bg-red-50 border-red-200";
  };

  const formatJson = (data: any) => {
    try {
      return JSON.stringify(data, null, 2);
    } catch {
      return String(data);
    }
  };

  if (loading) {
    return (
      <div className="h-full flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin text-orange-500 mx-auto mb-4" />
          <p className="text-gray-600">Sending request...</p>
        </div>
      </div>
    );
  }

  if (error && !response) {
    return (
      <div className="h-full flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <XCircle className="h-8 w-8 text-red-500 mx-auto mb-4" />
          <p className="text-red-600 font-medium">Request Failed</p>
          <p className="text-gray-600 text-sm mt-2">{error}</p>
        </div>
      </div>
    );
  }

  if (!response) {
    return (
      <div className="h-full flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 opacity-20">
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full fill-current text-gray-400"
            >
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeDasharray="8 4"
              />
              <circle cx="50" cy="35" r="3" fill="currentColor" />
              <circle cx="35" cy="50" r="3" fill="currentColor" />
              <circle cx="65" cy="50" r="3" fill="currentColor" />
              <circle cx="50" cy="65" r="3" fill="currentColor" />
            </svg>
          </div>
          <p className="text-gray-500 text-lg">
            Enter the URL and click Send to get a response
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col">
      {/* Response Status Bar */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gray-50">
        <div className="flex items-center gap-3">
          <CheckCircle className="h-5 w-5 text-green-500" />
          <Badge
            className={`border font-medium ${getStatusColor(response.status)}`}
          >
            {response.status} {response.statusText}
          </Badge>
          <div className="flex items-center gap-1 text-sm text-gray-600">
            <Clock className="h-4 w-4" />
            {response.time}ms
          </div>
        </div>
        <div className="text-sm text-gray-500">
          Size: {JSON.stringify(response.data).length} bytes
        </div>
      </div>

      {/* Response Tabs */}
      <div className="flex-1 min-h-0">
        <Tabs defaultValue="body" className="h-full flex flex-col">
          <TabsList className="shrink-0 bg-white border-b border-gray-200 rounded-none justify-start p-0">
            <TabsTrigger value="body" className="rounded-none">
              Body
            </TabsTrigger>
            <TabsTrigger value="headers" className="rounded-none">
              Headers ({Object.keys(response.headers).length})
            </TabsTrigger>
          </TabsList>

          <TabsContent
            value="body"
            className="flex-1 m-0 p-4 overflow-scroll min-h-72"
          >
            {/* <ScrollArea className="h-full"> */}
            <pre className="bg-gray-50 p-4 rounded border text-sm font-mono whitespace-pre-wrap break-words">
              {formatJson(response.data)}
            </pre>
            {/* </ScrollArea> */}
          </TabsContent>

          <TabsContent value="headers" className="flex-1 m-0 p-4">
            <ScrollArea className="h-full overflow-scroll">
              <div className="space-y-2">
                {Object.entries(response.headers).map(([key, value]) => (
                  <div key={key} className="flex border-b border-gray-100 pb-2">
                    <div className="w-1/3 font-mono text-sm text-gray-600 break-all">
                      {key}
                    </div>
                    <div className="flex-1 font-mono text-sm text-gray-900 break-all">
                      {value}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
