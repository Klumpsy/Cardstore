import {render, fireEvent} from '@testing-library/react'; 

import Navbar from "./Navbar"; 

it("checkNavbarRender", () => { 
    const { queryByTestId } = render(<Navbar/>)
    const nav = queryByTestId("navbar-test"); 
    expect(nav).toBeTruthy(); 
});

// describe("clickButton", () => { 
//     it("onClick", () => { 
//         const { queryByTitle } = render(<Button/>)
//         const btn = queryByTitle("dummyButton"); 
//         expect(btn.innerHTML).toBe("press")
//         fireEvent.click(btn)
//         expect(btn.innerHTML).toBe("You clicked")
//     })
// })