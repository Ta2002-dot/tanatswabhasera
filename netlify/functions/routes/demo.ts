import type { RequestHandler } from "express";
import type { DemoResponse } from "../../../shared/api";

export const handleDemo: RequestHandler = (_req, res) => {
  const response: DemoResponse = {
    message: "Hello from the Netlify serverless API",
  };

  res.status(200).json(response);
};
