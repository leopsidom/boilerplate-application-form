import React from 'react';
import { Input, Text, Flexbox, Checkbox, Stack, RadioButton, Padding, Card } from '@/ui';
import { SelectableOption } from '../radio-button';

interface QProps {
  question: any,
  handleChange: (e: { target: { name: string, value: string } }) => void,
  values: any,
  errors: any,
  touched: any
}

interface VProps {
  name: string,
  errors: any,
  touched: any
}

type InputType = 'text' | 'number'

function ValidationError({ errors, touched, name }: VProps): JSX.Element {
  return <React.Fragment>
    {errors[name] && touched[name] ? <div style={{ color: 'red', fontSize: '0.7em' }}>{errors[name]}</div> : null}
  </React.Fragment>
}

function CheckboxQuestion({ question, handleChange, values, errors, touched }: QProps): JSX.Element {
  const handleValueChange = (name: string, value: string) => handleChange({ target: { name, value } })
  return (<React.Fragment>
    <Flexbox>
      <Checkbox
        onClick={isActive => {
          console.log("isActive: ", isActive)
          console.log("question.name:  ", question.name)
          handleValueChange(question.name, isActive.toString())
        }}
        isActive={values[question.name]}
      ></Checkbox>
      <Text>{question.label}</Text>
      <ValidationError errors={errors} touched={touched} name={question.name}></ValidationError>
    </Flexbox>
    {/* {JSON.stringify(question.subQuestion[values[question.name]])} */}
    {question.subQuestion[values[question.name]] ? (
      question.subQuestion[values[question.name]].map(subQuestion => (
        <Question question={subQuestion} handleChange={handleChange} values={values} errors={errors} touched={touched}></Question>))
    ) : null}
  </React.Fragment>)
}

function RadioGroupQuestion({ question, handleChange, values }: QProps): JSX.Element {
  const handleValueChange = (name: string, value: string) => handleChange({ target: { name, value } });
  return <Stack gap={2} direction={'vertical'}>
    {question.options.map((option: SelectableOption & { description: string, recommended: boolean }) => {
      return (
        <Card>
          <Padding bottom={2} right={16} top={8} left={4} key={`${name}-${option.value}`}>
            <RadioButton
              disabled={false}
              isChecked={values[question.name] === option.value}
              label={option.label}
              name={question.name}
              onChange={() => handleValueChange(question.name, option.value.toString())}
              value={option.value}
            />
            <p style={{ paddingLeft: '1.5em', color: 'gray' }}>{option.description}</p>
            <span style={{ paddingLeft: '1.5em', color: 'green' }}>{option.recommended ? 'recommended' : null}</span>
          </Padding>
        </Card>
      );
    })}
  </Stack>
}

export default function Question({ question, handleChange, values, errors, touched }: QProps): JSX.Element {
  const handleValueChange = (name: string, value: string) => handleChange({ target: { name, value } });
  switch (question.type) {
    case 'checkbox':
      return <CheckboxQuestion question={question} values={values} handleChange={handleChange} errors={errors} touched={touched}></CheckboxQuestion>
    case 'radio':
      return <React.Fragment>
        {/* <RadioButtonGroup
          name={question.name}
          options={question.options}
          onChange={selection => handleValueChange(question.name, selection)}
          value={values[question.name]}
        ></RadioButtonGroup> */}
        <RadioGroupQuestion question={question} values={values} handleChange={handleChange} errors={errors} touched={touched}></RadioGroupQuestion>
        <ValidationError errors={errors} touched={touched} name={question.name}></ValidationError>
      </React.Fragment>
    default:
      return <React.Fragment>
        <Text>{question.label}</Text>
        <Input
          type={question.type as InputType}
          onChange={value => handleValueChange(question.name, value)}
          value={values[question.name]}
        ></Input>
        <ValidationError errors={errors} touched={touched} name={question.name}></ValidationError>
      </React.Fragment>
  }
}