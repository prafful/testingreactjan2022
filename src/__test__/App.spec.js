import App from "../App"
import ReactDOM from 'react-dom';
import { render } from "@testing-library/react";



describe("component test suite", ()=>{


    it("test if component is rendered", ()=>{
        const mydiv = document.createElement("div")
        ReactDOM.render(<App></App>, mydiv)
    })



})