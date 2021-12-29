import {render, fireEvent} from '@testing-library/react'; 

import Products from './Products';

it("checkProductRender", () => { 
    const { queryByTestId } = render(<Products/>)
    const ProductsContainer = queryByTestId("product-container-test"); 
    expect(ProductsContainer).toBeTruthy(); 
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