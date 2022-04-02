import { useState, useCallback } from "react";
import { useTranslation } from "react-i18next";

const useFormHook = <Values = {}, Errors = {}>(prop: Values, e: Errors) => {
  //Form values
  const [values, setValues] = useState<Values>(prop);

  //Errors
  const [errors, setErrors] = useState<Errors>(e);
  const objectValues = values as {};
  const { validate } = useValidation({ setErrors });

  // A method to handle form reset
  const resetForm = (resetVal: {}) => {
    setErrors(resetVal as any);
    setValues(resetVal as any);
  };

  //A method to handle form inputs
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    //To stop default events
    event.persist();

    let name = event.target.name;
    let val = event.target.value;

    validate(name, val);

    setValues({
      ...values,
      [name]: val,
    });
  };

  return {
    values,
    errors,
    resetForm,
    handleChange,
  };
};

export default useFormHook;

enum TestCases {
  firstName = "firstName",
  lastName = "lastName",
  title = "title",
  email = "email",
  mobile = "mobile",
}

const MAX_NAME = 30;
type UseValidationProp<T> = {
  setErrors: React.Dispatch<React.SetStateAction<T>>;
};
const useValidation = <T = {}>(porps: UseValidationProp<T>) => {
  const { setErrors } = porps;
  //A function to validate each input values
  const { t } = useTranslation();
  const validate = useCallback((name: string, value: string) => {
    const regularTest = /[\d\/@$#!&^%<>(){}""~.+-=-_]/gi;
    const roleTest = /[\d\/@$#!&^%<>(){}""~.+-=-_]/gi;
    const phoneTest = /^(\+\d{1,3}[- ]?)?\d{7}$/;
    const emailTest =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    switch (name) {
      case TestCases.firstName:
        if (
          new RegExp(regularTest).test(value) ||
          !value.length ||
          value.length > MAX_NAME
        ) {
          setErrors((errors) => ({
            ...errors,
            [TestCases.firstName]: `firstName atleast have ${MAX_NAME} letters`,
          }));
        } else {
          setErrors((errors) => ({ ...errors, [TestCases.firstName]: "" }));
        }
        break;
      case TestCases.lastName:
        if (
          new RegExp(regularTest).test(value) ||
          !value.length ||
          value.length > MAX_NAME
        ) {
          setErrors((errors) => ({
            ...errors,
            [TestCases.lastName]: `last Name atleast have ${MAX_NAME} letters`,
          }));
        } else {
          setErrors((errors) => ({ ...errors, [TestCases.lastName]: "" }));
        }
        break;
      case TestCases.title:
        if (
          new RegExp(roleTest).test(value) ||
          !value.length ||
          value.length > MAX_NAME
        ) {
          setErrors((errors) => ({
            ...errors,
            [TestCases.title]: `last Name atleast have ${MAX_NAME} letters`,
          }));
        } else {
          setErrors((errors) => ({ ...errors, [TestCases.title]: "" }));
        }
        break;
      case TestCases.mobile:
        if (!new RegExp(phoneTest).test(value) || !value.length) {
          setErrors((errors) => ({
            ...errors,
            [TestCases.mobile]: t("invalid_mobile"),
          }));
        } else {
          setErrors((errors) => ({ ...errors, [TestCases.mobile]: "" }));
        }
        break;

      case TestCases.email:
        if (!new RegExp(emailTest).test(value) || !value.trim().length) {
          setErrors((errors) => ({
            ...errors,
            [TestCases.email]: "Enter a valid email address",
          }));
        } else {
          setErrors((errors) => ({ ...errors, [TestCases.email]: "" }));
        }
        break;

      default:
        break;
    }
  }, []);
  return { validate };
};
