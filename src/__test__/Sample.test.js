import { render, screen } from "@testing-library/react"
import Sample from "../samplecomponent/sample"
import Single from "../samplecomponent/single"

import renderer  from "react-test-renderer";



test("should render Sample component", ()=>{
    render(<Sample></Sample>)

    //check if Sample component is rendered in DOM
    const sample  = screen.getByTestId("test-sample1")
    //console.log(sample)
    expect(sample).toBeInTheDocument()

})

test("sample component to contain specific text", ()=>{
    render(<Sample></Sample>)

    //check if Sample component contains specific text
    const sample  = screen.getByTestId("test-sample1")
    //console.log(sample)
    expect(sample).toHaveTextContent('Hello from Sample')

})

test("render values from array", ()=>{
    const single =  {id: 8, activity:"Learn Blockchain", status: true}
    render(<Single item={single}></Single>)

    const singleValue  = screen.getByTestId('single-8')
    expect(singleValue).toBeInTheDocument()
    expect(singleValue).toHaveTextContent('Learn Blockchain')
    expect(singleValue).toContainHTML('<strike><span>Learn Blockchain</span></strike>')
})

test("test snapshot", ()=>{
    const single =  {id: 4, activity:"Learn Blockchain", status: true}
    const singlesnapshot = renderer.create(<Single item={single}></Single>).toJSON()    
    console.log(singlesnapshot);
    expect(singlesnapshot).toMatchSnapshot()

})


afterAll(()=>{
    console.log("I will run after all test are run");
})

afterEach(()=>{
    console.log("I will run after each test");
})

beforeAll(()=>{
    console.log("I will run before all test are run");
})


beforeEach(()=>{
    console.log("I will run before each test");
})























