import React, { useState } from 'react'
import Styles from './Add.module.css'
import { useHttp } from '../../hooks/http.hook'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import { useSuccess } from '../../hooks/success.hook'
import { useError } from '../../hooks/error.hook'
import { useHistory } from 'react-router-dom'

export const Add = () => {
    toast.configure({
        autoClose: 3000,
        draggable: true
    })

    const { request, loading, API_URL } = useHttp()
    const successMessage = useSuccess()
    const errorMessage = useError()
    const history = useHistory()
    const [form, setForm] = useState({
        name: '',
        author: '',
        price: ''
    })

    const postHandler = async () => {
        if (form.name !== '' && form.surname !== '' && form.salary !== '') {
            try {
                await request(
                    `${API_URL}/create`,
                    'POST',
                    { ...form }
                )
                alert('Добавлена книга')
                history.push('/')
            } catch (e) {
                errorMessage(e)
            }
        } else {
            alert('Поля не должны быть пустыми!')
        }
    }

    const changeHandler = e => {     
        setForm({ 
            ...form, [e.target.name]: e.target.value
        })
    }

    const data = [
        { type: 'text', name: 'name', label: 'Название' },
        { type: 'text', name: 'author', label: 'Автор' },
        { type: 'number', name: 'price', label: 'Стоимость' },
    ]

    return (
        <div className={Styles.add}>
            <div className="container">
                <div className={Styles.block}>
                    <h3 className={Styles.title}>
                        Добавить книгу
                    </h3>
                    <form action="#" className={Styles.body}>
                        {
                            data
                            ? data.map(({ type, name, label }, i) => {
                                return (
                                    <input
                                        key={ i }
                                        type={type}
                                        className={Styles.input}
                                        name={name}
                                        placeholder={label}
                                        autoComplete="off"
                                        onChange={changeHandler}
                                    />
                                )
                            }) : ''
                        }
                        <div className={Styles.button}>
                            <button
                                type="submit"
                                onClick={e => {e.preventDefault(); postHandler()}}
                                className={loading ? 'loading' : Styles.submit}
                            >
                                Добавить
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
