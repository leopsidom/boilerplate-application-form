import React, { useState } from 'react';
import { Button, Card, Flexbox } from '@/ui';
import { Formik } from 'formik';
import { questions as allQuestions } from '../api/questions'
import { categories } from "../api/category";
import Question from "../ui/components/question/question";
import * as Yup from "yup";

const formData = {}

export default function IndexPage(): JSX.Element {
  const [pageIndex, setPageIndex] = useState<number>(0)

  const pages: { [key: string]: typeof allQuestions } = {}
  allQuestions.forEach(question => {
    if (pages[question.category] === undefined) {
      pages[question.category] = [question]
    } else {
      pages[question.category].push(question)
    }
  })

  const getQuestions = () => {
    return pages[categories[pageIndex].name]
  }

  const getInitialValues = () => {
    let initialValues = getQuestions().reduce((qs, question) => ({ ...qs, [question.name]: '' }), {})
    Object.assign(initialValues, formData)
    console.log('getting initial values: ', initialValues)
    return initialValues
  }

  const getValidationSchema = () => {
    let shape = getQuestions().reduce((schema, question) => {
      let questionSchema;
      if (question.type === 'text') {
        questionSchema = Yup.string()
          .min(question.validation.minLength, 'too short')
          .max(question.validation.maxLength, 'too long');

        if (question.validation.isRequired) questionSchema = questionSchema.required('Required');
      } else if (question.type === 'number') {
        questionSchema = Yup.number()
          .min(question.validation.min, 'too small')
          .max(question.validation.max, 'too large');

        if (question.validation.isRequired) questionSchema = questionSchema.required('Required');
      }
      return {
        ...schema,
        [question.name]: questionSchema
      }
    }, {});
    return Yup.object().shape(shape)
  }

  const goBack = () => {
    console.log('going back: ', pageIndex)
    setPageIndex(pageIndex === 0 ? 0 : pageIndex - 1)
    console.log("current pageIndex: ", pageIndex)
  }

  return (
    <div style={{ position: 'absolute', left: '50%', top: '50%', width: '50%', transform: 'translate(-50%, -50%)' }}>
      <Formik
        initialValues={getInitialValues()}
        enableReinitialize
        validationSchema={getValidationSchema()}
        onSubmit={async (values, { setSubmitting }) => {
          await new Promise(resolve => setTimeout(() => {
            Object.assign(formData, values)
            if (pageIndex < categories.length - 1) setPageIndex(pageIndex + 1)
            else alert(JSON.stringify(formData, null, 2))
            resolve(1)
          }, 500))
          setSubmitting(false)
        }}
      >
        {
          ({ handleSubmit, isSubmitting, handleChange, values, errors, touched }) => {
            return (
              <form onSubmit={handleSubmit}>
                <Card>
                  <div style={{ padding: '20px' }}>
                    <h2>{categories[pageIndex].title}</h2>
                    {categories[pageIndex].description}
                    {getQuestions().map(question =>
                      <Question values={values} handleChange={handleChange} question={question} errors={errors} touched={touched}></Question>)
                    }
                    <Flexbox justifyContent='space-between'>
                      <Button type='button' onClick={goBack}>back</Button>
                      <Button type='submit' disabled={isSubmitting}>{pageIndex === categories.length - 1 ? 'submit' : 'next'}</Button>
                    </Flexbox>
                  </div>
                </Card>
              </form>)
          }
        }
      </Formik>
    </div >
  );
}