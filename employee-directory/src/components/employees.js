import React, { Component } from "react";

function Employee(props) {
    return (
        <div>
            <table>
                <th className="tHead">
                    <tr>
                        <th><a href="#sortOne" onClick={() => props.nameSort()}>Name</a></th>
                        <th><a href="#sortTwo" onClick={() => props.dobSort()}>DOB</a></th>
                    </tr>
                </th>
                <tbody>
                    {props.result.map(result => (
                        <td>{result.name.first}</td>
                        <td>{result.name.last}</td>
                    ))}
                    <tr>

                    </tr>
                </tbody>
                
            </table>
        </div>
    )
}

class Result extends Component {
    state = {
        result: [],
        search: "",
        currentPage: "" 
    }
}

this.setState({result: alphabetical})