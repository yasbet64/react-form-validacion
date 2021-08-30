import React, { useState, useEffect } from 'react';
export const useForm=(initialForm,validateForm)=>{
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);

    const handleChange=(e)=>{
        const{name,value}=e.target;
        setForm({
            ...form,
            [name]:value,
        });
    };

    const handleBlur=(e)=>{
        handleChange(e);
        setErrors(validateForm(form));
    };

    const handleSubmit=(e)=>{};

    return{
        form:form,
        errors,
        loading,
        response,
        handleChange,
        handleBlur,
        handleSubmit,
    };

};