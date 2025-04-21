import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { App } from "../App.jsx";

describe("App Component", () => {
    it("should render app", () => {
        render(<App />);
        screen.debug();
    });

})