import { useCallback, useState } from 'react'
import * as changeCase from 'change-case'

export default function useForm({ fields = {} }) {
  const { getValueForField, setFieldValue, validateFields, getFieldsRegister } = useFields(fields)
  const {
    removeErrorForField,
    getErrorMessageForField,
    setErrorsRegister,
    createErrorsRegisterFromFieldsValidationResult,
    registerContainsErrors,
  } = useErrors()

  const getPropsForField = useCallback(
    (fieldName) => {
      let name = changeCase.sentenceCase(fieldName)
      return {
        onChangeText: (t) => {
          removeErrorForField(fieldName)
          setFieldValue(fieldName, t)
        },
        value: getValueForField(fieldName),
        errorMessage: getErrorMessageForField(fieldName),
        label: name,
        placeholder: name,
      }
    },
    [getValueForField, getErrorMessageForField, getValueForField]
  )

  const validateForm = useCallback(
    (opts) => {
      opts = mergeWithDefaults(opts)

      const register = createErrorsRegisterFromCurrentFields()
      if (!registerContainsErrors(register))
        opts.onOk({
          fields: getFieldsRegister(),
        })

      setErrorsRegister(register)

      return

      function mergeWithDefaults(opts) {
        const defaults = { onOk: () => null }
        return { ...defaults, ...opts }
      }
    },
    [validateFields]
  )

  const formIsValid = (() => {
    const register = createErrorsRegisterFromCurrentFields()
    return !registerContainsErrors(register)
  })()

  function createErrorsRegisterFromCurrentFields() {
    const result = validateFields()
    return createErrorsRegisterFromFieldsValidationResult(result)
  }

  return { getPropsForField, formIsValid, validateForm }
}

useForm.validators = {
  minLength:
    (length = 1) =>
    (v) => ({ ok: v.length >= length, message: 'Min length must be ' + length }),
  length:
    (length = 1) =>
    (v) => ({ ok: v.length === length, message: 'Length must be ' + length }),
  selectDropdownItem: (v) => ({ ok: !!v.length, message: 'Select an item' }),
}

function useErrors() {
  let [register, setRegister] = useState({})

  const localRemoveErrorForField = useCallback((fieldName) => {
    setRegister((s) => {
      delete s[fieldName]
      return { ...s }
    })
  }, [])

  const getErrorMessageForField = useCallback(
    (fieldName) => {
      return register[fieldName] || ''
    },
    [register]
  )

  const createErrorsRegisterFromFieldsValidationResult = (result = []) =>
    result.reduce((acc, { fieldName, result }) => {
      if (!result.ok) acc[fieldName] = result.message
      return acc
    }, {})

  const registerContainsErrors = (register) => {
    return !!Object.keys(register).length
  }

  return {
    removeErrorForField: localRemoveErrorForField,
    getErrorMessageForField,
    setErrorsRegister: setRegister,
    createErrorsRegisterFromFieldsValidationResult,
    registerContainsErrors,
  }
}

function useFields(fieldsObject = {}) {
  let [fields, setFields] = useState(mergeWithDefaults(fieldsObject))

  const getValueForField = (fieldName) => fields[fieldName].value

  const setFieldValue = (fieldName, value) =>
    setFields((s) => ({ ...s, [fieldName]: { ...s[fieldName], value } }))

  const validateFields = () => {
    return Object.entries(fields).reduce(
      (acc, [fieldName, input]) => [...acc, { fieldName, result: input.validate(input.value) }],
      []
    )
  }
  const getFieldsRegister = () =>
    Object.keys(fields).reduce((acc, fieldName) => {
      acc[fieldName] = fields[fieldName].value
      return acc
    }, {})

  return { getValueForField, setFieldValue, validateFields, getFieldsRegister }

  function mergeWithDefaults(fields) {
    const defaults = { value: '', validate: () => true, format: (v) => v }

    return Object.entries(fields).reduce((acc, [key, opts]) => {
      acc[key] = { ...defaults, ...opts }
      return acc
    }, {})
  }
}
