import {multiply, makeLowerCase} from "./helperFunctions"

test("multiply", () => { 
    expect(multiply(2,20)).toBe(40); 
    expect(multiply(4,5)).toBe(20); 
    expect(multiply(5, -5)).toBe(-25); 
}); 

test("lowerCase", () => { 
    expect(makeLowerCase("Bart KLUMPERS")).toBe("bart klumpers"); 
    expect(makeLowerCase("B4 KlumPer5")).toBe("b4 klumper5"); 
});