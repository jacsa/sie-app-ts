import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { ApolloConsumer } from '@apollo/client';
import { configure } from 'react-apollo-form';
import { ADD_PAIS } from './queries/pais';
import applicationFormTheme from './components/SemanticUITheme'

const jsonSchema = require('./schemas/apollo-form-json-schema.json');

const App: React.FC = () => {
    return <ApolloConsumer>
        {
            (client) => {
                const data = { name: 'Rusia Dos', estatus: true }
                const ApplicationForm = configure<ApolloFormMutationNames>({
                    client: client as any,
                    jsonSchema,
                    theme: applicationFormTheme
                });
                return <div style={{padding:10}}> 
                        <ApplicationForm 
                            config={{
                                mutation: {
                                    name: 'addPais',
                                    document: ADD_PAIS
                                }
                            }}
                            liveValidate
                            data={data}
                            title='Edición de Paises'
                            subTitle='Capturar info'
                            onSave={data => {
                                
                            }}
                            ui={{}} />
                    </div>
            }
        }
    </ApolloConsumer>
}

export default App;
