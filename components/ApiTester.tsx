"use client";

import { useState } from "react";
import { RequestBuilder } from "./RequestBuilder";
import { ResponseViewer } from "./ResponseViewer";

export interface ApiRequest {
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  url: string;
  headers: Record<string, string>;
  body: string;
}

export interface ApiResponse {
  status: number;
  statusText: string;
  headers: Record<string, string>;
  data: any;
  time: number;
}

export const ApiTester = () => {
  const [request, setRequest] = useState<ApiRequest>({
    method: "GET",
    url: "",
    headers: {},
    body: "",
  });

  const [response, setResponse] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSendRequest = async () => {
    if (!request.url.trim()) {
      setError("Please enter a URL");
      return;
    }

    setLoading(true);
    setError(null);
    const startTime = Date.now();

    try {
      const fetchOptions: RequestInit = {
        method: request.method,
        headers: {
          "Content-Type": "application/json",
          ...request.headers,
        },
      };

      if (request.method !== "GET" && request.body.trim()) {
        fetchOptions.body = request.body;
      }

      const response = await fetch(request.url, fetchOptions);
      const endTime = Date.now();

      let responseData;
      const contentType = response.headers.get("content-type");

      if (contentType && contentType.includes("application/json")) {
        responseData = await response.json();
      } else {
        responseData = await response.text();
      }

      const responseHeaders: Record<string, string> = {};
      response.headers.forEach((value, key) => {
        responseHeaders[key] = value;
      });

      setResponse({
        status: response.status,
        statusText: response.statusText,
        headers: responseHeaders,
        data: responseData,
        time: endTime - startTime,
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto bg-white border border-gray-200 rounded-lg shadow-sm">
      <div className="flex flex-col h-[80vh]">
        {/* Request Builder - Top Half */}
        <div className="flex-shrink-0 border-b border-gray-200">
          <RequestBuilder
            request={request}
            onRequestChange={setRequest}
            onSendRequest={handleSendRequest}
            loading={loading}
            error={error}
          />
        </div>

        {/* Response Viewer - Bottom Half */}
        <div className="flex-1 min-h-0">
          <ResponseViewer response={response} loading={loading} error={error} />
        </div>
      </div>
    </div>
  );
};
