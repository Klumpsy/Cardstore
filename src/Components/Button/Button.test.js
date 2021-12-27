import {render, fireEvent} from '@testing-library/react'; 

import Button from "./Button"; 

it("checkButtonRender", () => { 
    const { queryByTitle } = render(<Button/>)
    const btn = queryByTitle("dummyButton"); 
    expect(btn).toBeTruthy(); 
});

describe("clickButton", () => { 
    it("onClick", () => { 
        const { queryByTitle } = render(<Button/>)
        const btn = queryByTitle("dummyButton"); 
        expect(btn.innerHTML).toBe("press")
        fireEvent.click(btn)
        expect(btn.innerHTML).toBe("You clicked")
    })
})