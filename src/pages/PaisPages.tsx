import React from 'react'
import { Input, Form, Checkbox } from 'semantic-ui-react'
import { Frontier } from "frontier-forms"
import { ADD_PAIS } from '../queries/pais'
import { InMemoryCache } from "apollo-cache-inmemory"
import { createHttpLink } from "apollo-link-http"
import ApolloClient from "apollo-client"

const PaisPages = (props: any) => {
    let url = process.env.REACT_APP_APOLLO_CLIENT;
    const client = new ApolloClient({
        link: createHttpLink({
          uri: url
        }),
        cache: new InMemoryCache()
      });
    
    return (
        <div style={{ paddingLeft: "50px", paddingTop: "50px" }}>
            <div style={{ width: "245px" }}>
                <h2>Create a pais</h2>
                <br />
                <Frontier
                    mutation={ADD_PAIS}
                    client={client}
                    initialValues={{ input: { name: "", estatus: true } }}
                >
                    {({ state, modifiers, form }) => {
                        return ( 
                            <form onSubmit={(e) => { 
                                    e.preventDefault();
                                    form.submit();
                                  }} className="ui form">
                                <Form.Field>
                                    <label htmlFor="name">Nombre*</label> <br />
                                    <Input
                                        type="text"
                                        name="name"
                                        value={state.values.input.name}
                                        onChange={modifiers.input.name.change}
                                    />
                                    {state.errors.name && <p>Error: "{state.errors.name}"</p>}
                                </Form.Field>
                                <Form.Field>
                                    <label htmlFor="name">Estatus*</label> <br />
                                    <Checkbox label="Estatus" checked={state.values.input.estatus}                                     />
                                    {state.errors.estatus && (
                                        <p>Error: "{state.errors.estatus}"</p>
                                    )}
                                </Form.Field>
                                <p>
                                    <input type="submit" value="Save" className="ui button" />
                                </p>
                            </form>
                        );
                    }}
                </Frontier>
            </div>
        </div>
    )
}


export default PaisPages

