"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Plus, X, Send, Loader2 } from "lucide-react";
import { ApiRequest } from "./ApiTester";

interface RequestBuilderProps {
  request: ApiRequest;
  onRequestChange: (request: ApiRequest) => void;
  onSendRequest: () => void;
  loading: boolean;
  error: string | null;
}

export const RequestBuilder = ({
  request,
  onRequestChange,
  onSendRequest,
  loading,
  error,
}: RequestBuilderProps) => {
  const [newHeaderKey, setNewHeaderKey] = useState("");
  const [newHeaderValue, setNewHeaderValue] = useState("");

  const updateRequest = (updates: Partial<ApiRequest>) => {
    onRequestChange({ ...request, ...updates });
  };

  const addHeader = () => {
    if (newHeaderKey.trim() && newHeaderValue.trim()) {
      updateRequest({
        headers: {
          ...request.headers,
          [newHeaderKey.trim()]: newHeaderValue.trim(),
        },
      });
      setNewHeaderKey("");
      setNewHeaderValue("");
    }
  };

  const removeHeader = (key: string) => {
    const newHeaders = { ...request.headers };
    delete newHeaders[key];
    updateRequest({ headers: newHeaders });
  };

  const handleKeyPress = (e: React.KeyboardEvent, action: () => void) => {
    if (e.key === "Enter") {
      action();
    }
  };

  const getMethodColor = (method: string) => {
    switch (method) {
      case "GET":
        return "text-green-600 bg-green-50 border-green-200";
      case "POST":
        return "text-blue-600 bg-blue-50 border-blue-200";
      case "PUT":
        return "text-orange-600 bg-orange-50 border-orange-200";
      case "DELETE":
        return "text-red-600 bg-red-50 border-red-200";
      case "PATCH":
        return "text-purple-600 bg-purple-50 border-purple-200";
      default:
        return "text-gray-600 bg-gray-50 border-gray-200";
    }
  };

  return (
    <div className="p-4">
      {/* Top Request Bar - Postman Style */}
      <div className="flex flex-col md:flex-row gap-2 mb-4 w-full">
        <div className="flex gap-2 w-full">
          <Select
            value={request.method}
            onValueChange={(value: any) => updateRequest({ method: value })}
          >
            <SelectTrigger
              className={`w-32 border font-medium ${getMethodColor(
                request.method
              )}`}
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="GET">
                <span className="text-green-600 font-medium">GET</span>
              </SelectItem>
              <SelectItem value="POST">
                <span className="text-blue-600 font-medium">POST</span>
              </SelectItem>
              <SelectItem value="PUT">
                <span className="text-orange-600 font-medium">PUT</span>
              </SelectItem>
              <SelectItem value="DELETE">
                <span className="text-red-600 font-medium">DELETE</span>
              </SelectItem>
              <SelectItem value="PATCH">
                <span className="text-purple-600 font-medium">PATCH</span>
              </SelectItem>
            </SelectContent>
          </Select>

          <Input
            type="url"
            placeholder="Enter request URL"
            value={request.url}
            onChange={(e) => updateRequest({ url: e.target.value })}
            className="flex-1"
            onKeyPress={(e) => handleKeyPress(e, onSendRequest)}
          />
        </div>

        <Button
          onClick={onSendRequest}
          disabled={loading || !request.url.trim()}
          className="bg-primary min-w-[100px]"
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Send
            </>
          ) : (
            <>
              <Send className="mr-2 h-4 w-4" />
              Send
            </>
          )}
        </Button>
      </div>

      {/* Error Display */}
      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md">
          <p className="text-sm text-red-600">{error}</p>
        </div>
      )}

      {/* Tabbed Interface - Postman Style */}
      <Tabs defaultValue="headers" className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-gray-50">
          <TabsTrigger value="headers">
            Headers ({Object.keys(request.headers).length})
          </TabsTrigger>
          <TabsTrigger value="body" disabled={request.method === "GET"}>
            Body
          </TabsTrigger>
          <TabsTrigger value="params">Params</TabsTrigger>
        </TabsList>

        <TabsContent value="headers" className="mt-4">
          <div className="space-y-3">
            {Object.entries(request.headers).map(([key, value]) => (
              <div
                key={key}
                className="flex items-center gap-2 p-3 bg-gray-50 rounded border"
              >
                <div className="flex-1 grid grid-cols-2 gap-2">
                  <span className="font-mono text-sm text-gray-700">{key}</span>
                  <span className="font-mono text-sm text-gray-900">
                    {value}
                  </span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeHeader(key)}
                  className="h-8 w-8 p-0 hover:bg-red-100"
                >
                  <X className="h-4 w-4 text-red-500" />
                </Button>
              </div>
            ))}

            <div className="flex gap-2 p-3 border-2 border-dashed border-gray-200 rounded">
              <Input
                placeholder="Key"
                value={newHeaderKey}
                onChange={(e) => setNewHeaderKey(e.target.value)}
                onKeyPress={(e) => handleKeyPress(e, addHeader)}
                className="flex-1"
              />
              <Input
                placeholder="Value"
                value={newHeaderValue}
                onChange={(e) => setNewHeaderValue(e.target.value)}
                onKeyPress={(e) => handleKeyPress(e, addHeader)}
                className="flex-1"
              />
              <Button onClick={addHeader} size="sm" variant="outline">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="body" className="mt-4">
          <div className="space-y-4">
            <div className="flex gap-2 items-center text-sm text-gray-600">
              <Badge variant="secondary">raw</Badge>
              <span>JSON</span>
            </div>
            <Textarea
              placeholder='{\n  "key": "value"\n}'
              value={request.body}
              onChange={(e) => updateRequest({ body: e.target.value })}
              className="min-h-[200px] font-mono text-sm bg-gray-50"
            />
          </div>
        </TabsContent>

        <TabsContent value="params" className="mt-4">
          <div className="text-center py-8 text-gray-500">
            <p>Query parameters will be automatically parsed from the URL</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
