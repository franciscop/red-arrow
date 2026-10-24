import { describe, expect, it } from "bun:test";
import React from "react";
import { renderToString } from "react-dom/server";
import Arrow from "./index.js";

describe("red-arrow", () => {
  it("renders nothing without a point", () => {
    expect(renderToString(<Arrow point={{ current: null }} />)).toBe("");
  });
});
