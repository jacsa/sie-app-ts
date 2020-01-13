import React from 'react';
import { Button, Input, Checkbox, Header, Form, Message } from 'semantic-ui-react';
import { ApolloFormTheme, ErrorListComponent } from 'react-apollo-form';


interface ApolloFormConfigureTheme {
    templates?: ApolloFormTheme['templates'];
    widgets?: ApolloFormTheme['widgets'];
    fields?: ApolloFormTheme['fields'];
    renderers?: Partial<ApolloFormTheme['renderers']>;
}

const ErrorList: ErrorListComponent = p => (
    <Message
        error={true}
        visible={true}
        header="There was some errors"
        list={p.errors.map(e => e.message)}
    />
);

const theme: ApolloFormConfigureTheme = {
    templates: {
        FieldTemplate: props => {
            const { classNames, help, description, errors, children, rawErrors, label } = props;
            console.log(props)
            return (
                <Form.Field>
                    <label style={{minWidth:150}}>{label}{props.required && '*'}</label>
                    {children}
                    <span>{description}</span>
                </Form.Field>
            );
        },
        ObjectFieldTemplate: props => {
            return (
                <div>
                    {props.properties.map((p : any) => p.content)}
                </div>
            );
        }
    },
    fields: {
        StringField: (p: any) => {
            //console.log(p)
            return (
                <Input value={p.formData || ''} onChange={
                    (e: React.SyntheticEvent<HTMLInputElement>) => p.onChange(e.currentTarget.value)
                } />
            )
        },
        BooleanField: (p: any) => (
            <Checkbox label={p.title} checked={p.formData} onChange={
                (e: React.SyntheticEvent<HTMLInputElement>, data: object) => {
                    // tslint:disable-next-line:no-any
                    p.onChange((data as any).checked);
                }
            } />
        )
    },
    renderers: {
        saveButton: p => (
            <Button onClick={p.save} primary={true}>
                Save
            </Button>
        ),
        cancelButton: p => (
            <Button onClick={p.cancel}>
                Cancel
            </Button>
        ),
        header: p => (
            <Header as="h1">{p.title}</Header>
        )
    }
};

export default theme;