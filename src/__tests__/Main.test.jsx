/**
 * @jest-environment jsdom
*/

import React from "react";
import { render } from "@testing-library/react";
import { Main } from "../components/Main";

describe("<Main />", () => {
    test("renders Main component", () => {
        render(<Main />);
    })
});




