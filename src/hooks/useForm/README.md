# useForm Hook

Ejemplo de uso

```
    const initialForm = {
        name: '',
        edad: 0,
        email: ''
    }
    const [formValue, handleChangeInput, reset, handleSubmit, submit] = useForm(initialForm) 
```