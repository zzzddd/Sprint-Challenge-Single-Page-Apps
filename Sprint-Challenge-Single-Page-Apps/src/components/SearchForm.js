import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { Button, Input } from "reactstrap";

function SearchForm(props) {
  const { values, touched, errors, handleChange } = props;

  return (
    <Form>
      <div>
        {touched.character && errors.character && <p>{errors.character}</p>}
        <Input
          value={values.character}
          onChange={handleChange}
          type="text"
          name="character"
          placeholder="Character"
        />
      </div>
      <Button type="submit" color="secondary">
        Submit!
      </Button>
    </Form>
  );
}

const FormikLoginForm = withFormik({
  mapPropsToValues({ character }) {
    return {
      character: character || ""
    };
  },

  //======VALIDATION SCHEMA==========
  validationSchema: Yup.object().shape({
    character: Yup.string().required("Enter character name to search for")
  }),
  //======END VALIDATION SCHEMA==========

  handleSubmit(values, { props, resetForm, setErrors, setSubmitting }) {
    for (let ch of props.characters) {
      if (ch.name.toLowerCase() == values.character.toLowerCase()) {
        props.setFound(ch);
        props.history.push(`/character/${ch.name}`);
      }
    }
  }
})(SearchForm);

export default FormikLoginForm;
