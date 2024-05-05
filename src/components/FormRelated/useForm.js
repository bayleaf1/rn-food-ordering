import SpacerView from '@components/SpacerView'
import { AppFetcher } from '@libs/Api'
import * as changeCase from 'change-case'
import { useCallback, useState } from 'react'
// import { BaseForm } from '../components/Form'
// import { pushErrorToast } from '../providers/ToastProvider'

const defFetchProps = {
  endpoint: '',
  onSuccess: () => '',
  onError: () => '',
  formatFieldsForFetching: (fields = {}) => fields,
  method: 'post',
}

// export function useUserDashboardApiForm({ fields = {}, fetch = defFetchProps, method = 'post' }) {
//   const { accessToken } = useUserDashboardSessionProvider()

//   return useForm({ fields, fetch, method, accessToken })
// }

// export function useAdminDashboardApiForm({ fields = {}, fetch = defFetchProps, method = 'post' }) {
//   const { accessToken } = useAdminDashboardSessionProvider()

//   return useForm({ fields, fetch, method, accessToken })
// }

export default function useForm({ fields = {}, fetch = defFetchProps, accessToken }) {
  fetch = { ...defFetchProps, ...fetch }
  const { getValueForField, setFieldValue, validateFields, getFieldsRegister } = useFields(fields)
  const {
    resetErrorsRegister,
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
        onChangeText: (text) => {
          removeErrorForField(fieldName)
          setFieldValue(fieldName, text)
        },
        value: getValueForField(fieldName),
        errorMessage: getErrorMessageForField(fieldName),
        label: name,
        placeholder: name,
      }
    },
    [getValueForField, getErrorMessageForField]
  )

  const validateForm = useCallback(
    (opts) => {
      opts = mergeWithDefaults(opts)

      const register = createErrorsRegisterFromCurrentFields()
      if (!registerContainsErrors(register))
        opts.onOk({
          fields: getFieldsRegister(),
        })
      else opts.onBad({ errors: register })

      setErrorsRegister(register)

      return

      function mergeWithDefaults(opts) {
        const defaults = {
          onOk: () => null,
          onBad: (errorsRegister) => console.log('Form has errors: ', errorsRegister),
        }
        return { ...defaults, ...opts }
      }
    },
    [validateFields]
  )

  const validateFormAndFetch = useCallback(
    (props = {}) => {
      let { endpoint, onSuccess, onError, formatFieldsForFetching, token, method } = {
        ...fetch,
        ...props,
      }
      validateForm({
        onOk: () => {
          let body = getFieldsRegister()

          let caller = AppFetcher.post

          if (method === 'get') caller = AppFetcher.get

          caller({
            endpoint: endpoint,
            body: formatFieldsForFetching(body),
            token: token || accessToken,
            onSuccess: ({ data }) => {
              resetErrorsRegister()
              onSuccess({ fields: body, data })
            },

            onError: ({ status, data, message, error }) => {
              console.log(`status, data, message, error:`, status, data, message, error);
              if (status === 422) {
                // const errors = BaseForm.parseValidationErrors({
                //   error: data.error,
                //   goToSingInForm: () => AuhtorizationModal.show(), //
                // })
                const errors = {}
                setErrorsRegister(errors)
              } else {
                onError({ status, message, error })
                // pushErrorToast(message)
              }
            },
          })
        },
      })
    },
    [fetch, getFieldsRegister, accessToken]
  )

  const formIsValid = (() => {
    const register = createErrorsRegisterFromCurrentFields()
    return !registerContainsErrors(register)
  })()

  function createErrorsRegisterFromCurrentFields() {
    const result = validateFields()
    return createErrorsRegisterFromFieldsValidationResult(result)
  }

  return { getPropsForField, formIsValid, validateForm, validateFormAndFetch }
}

useForm.validators = {
  minLength:
    (length = 1) =>
    (v) => ({ ok: v.length >= length, message: 'Min length must be ' + length }),
  length:
    (length = 1) =>
    (v) => ({ ok: v.length === length, message: 'Length must be ' + length }),
  selectDropdownItem: (v) => ({ ok: !!v.length, message: 'Select an item' }),
  notEmpty: (v) => ({ ok: v.toString().length >= 1, message: 'Can not be empty' }),
  phone: (v) => ({ ok: v.toString().length === 10, message: 'Must have 10 digits' }),
  toBeChecked: (v) => ({ ok: v === true, message: 'Must be checked' }),
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

  const resetErrorsRegister = () => setRegister({})

  return {
    removeErrorForField: localRemoveErrorForField,
    getErrorMessageForField,
    setErrorsRegister: setRegister,
    createErrorsRegisterFromFieldsValidationResult,
    registerContainsErrors,
    resetErrorsRegister,
  }
}

function useFields(fieldsObject = {}) {
  let [fields, setFields] = useState(mergeWithDefaults(fieldsObject))

  const getValueForField = (fieldName) => {
    let field = fields[fieldName]

    if (!field) throw new Error(`Field (${fieldName}) is not defined in useForm fields`)

    return field.value
  }

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
    const defaults = { value: '', validate: () => ({ ok: true, message: '' }), format: (v) => v }

    return Object.entries(fields).reduce((acc, [key, opts]) => {
      acc[key] = { ...defaults, ...opts }
      return acc
    }, {})
  }
}

//
//
//
//
// import { useCallback, useState } from 'react'
// import * as changeCase from 'change-case'

// export default function useForm({ fields = {} }) {
//   const { getValueForField, setFieldValue, validateFields, getFieldsRegister } = useFields(fields)
//   const {
//     removeErrorForField,
//     getErrorMessageForField,
//     setErrorsRegister,
//     createErrorsRegisterFromFieldsValidationResult,
//     registerContainsErrors,
//   } = useErrors()

//   const getPropsForField = useCallback(
//     (fieldName) => {
//       let name = changeCase.sentenceCase(fieldName)
//       return {
//         onChangeText: (t) => {
//           removeErrorForField(fieldName)
//           setFieldValue(fieldName, t)
//         },
//         value: getValueForField(fieldName),
//         errorMessage: getErrorMessageForField(fieldName),
//         label: name,
//         placeholder: name,
//       }
//     },
//     [getValueForField, getErrorMessageForField, getValueForField]
//   )

//   const validateForm = useCallback(
//     (opts) => {
//       opts = mergeWithDefaults(opts)

//       const register = createErrorsRegisterFromCurrentFields()
//       if (!registerContainsErrors(register))
//         opts.onOk({
//           fields: getFieldsRegister(),
//         })

//       setErrorsRegister(register)

//       return

//       function mergeWithDefaults(opts) {
//         const defaults = { onOk: () => null }
//         return { ...defaults, ...opts }
//       }
//     },
//     [validateFields]
//   )

//   const formIsValid = (() => {
//     const register = createErrorsRegisterFromCurrentFields()
//     return !registerContainsErrors(register)
//   })()

//   function createErrorsRegisterFromCurrentFields() {
//     const result = validateFields()
//     return createErrorsRegisterFromFieldsValidationResult(result)
//   }

//   return { getPropsForField, formIsValid, validateForm }
// }

// useForm.validators = {
//   minLength:
//     (length = 1) =>
//     (v) => ({ ok: v.length >= length, message: 'Min length must be ' + length }),
//   length:
//     (length = 1) =>
//     (v) => ({ ok: v.length === length, message: 'Length must be ' + length }),
// }

// function useErrors() {
//   let [register, setRegister] = useState({})

//   const localRemoveErrorForField = useCallback((fieldName) => {
//     setRegister((s) => {
//       delete s[fieldName]
//       return { ...s }
//     })
//   }, [])

//   const getErrorMessageForField = useCallback(
//     (fieldName) => {
//       return register[fieldName] || ''
//     },
//     [register]
//   )

//   const createErrorsRegisterFromFieldsValidationResult = (result = []) =>
//     result.reduce((acc, { fieldName, result }) => {
//       if (!result.ok) acc[fieldName] = result.message
//       return acc
//     }, {})

//   const registerContainsErrors = (register) => {
//     return !!Object.keys(register).length
//   }

//   return {
//     removeErrorForField: localRemoveErrorForField,
//     getErrorMessageForField,
//     setErrorsRegister: setRegister,
//     createErrorsRegisterFromFieldsValidationResult,
//     registerContainsErrors,
//   }
// }

// function useFields(fieldsObject = {}) {
//   let [fields, setFields] = useState(mergeWithDefaults(fieldsObject))

//   const getValueForField = (fieldName) => fields[fieldName].value

//   const setFieldValue = (fieldName, value) =>
//     setFields((s) => ({ ...s, [fieldName]: { ...s[fieldName], value } }))

//   const validateFields = () => {
//     return Object.entries(fields).reduce(
//       (acc, [fieldName, input]) => [...acc, { fieldName, result: input.validate(input.value) }],
//       []
//     )
//   }
//   const getFieldsRegister = () =>
//     Object.keys(fields).reduce((acc, fieldName) => {
//       acc[fieldName] = fields[fieldName].value
//       return acc
//     }, {})

//   return { getValueForField, setFieldValue, validateFields, getFieldsRegister }

//   function mergeWithDefaults(fields) {
//     const defaults = { value: '', validate: () => true, format: (v) => v }

//     return Object.entries(fields).reduce((acc, [key, opts]) => {
//       acc[key] = { ...defaults, ...opts }
//       return acc
//     }, {})
//   }
// }
