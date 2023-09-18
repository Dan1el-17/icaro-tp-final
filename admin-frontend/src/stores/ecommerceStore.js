import axios from "axios"
import { create } from "zustand"
import { base_url } from "../utils/baseUrl"

const auth = JSON.parse(localStorage.getItem('auth'));

const useEcommerceStore = create((set) => ({
    categories: [],
    category: null,
    products: [],
    cart: [],
    orders: [],
    getCategories: async () => {
        await axios.get(`${base_url}categories`, {
            headers: {
                'Authorization': `Bearer ${auth.state.token}`
            }
        })
            .then(res => {
                set({ categories: res.data })
            })
            .catch(err => {
                console.log(err)
            })
    },
    getCategory: async (id) => {
        await axios.get(`${base_url}categories/${id}`, {
            headers: {
                'Authorization': `Bearer ${auth.state.token}`
            }
        })
            .then(res => {
                set({ category: res.data })
            })
            .catch(err => {
                console.log(err)
            })
    },
    createCategory: async (values) => {
        await axios.post(`${base_url}categories`, values, {
            headers: {
                'Authorization': `Bearer ${auth.state.token}`
            }
        })
            .then(res => {
                set(state => ({
                    categories: [...state.categories, res.data.category
                    ]
                }))
            })
            .catch(err => {
                console.log(err)
            })
    },
    updateCategory: async (values) => {
        await axios.put(`${base_url
            }categories/${values.id}`, values,
            {
                headers: {
                    'Authorization': `Bearer ${auth.state.token}
                    `
                }
            })
            .then(res => {
                set(state => ({
                    categories: state.categories.map(category => {
                        if (category.id === res.data.category.id) {
                            return res.data.category
                        }
                        return category
                    })
                }))
            })
            .catch(err => {
                console.log(err)
            }
            )
    },
    deleteCategory: async (id) => {
        await axios.delete(`${base_url
            }categories/${id}`, {
            headers: {
                'Authorization': `Bearer ${auth.state.token}
                `
            }
        })
            .then(res => {
                set(state => ({
                    categories: state.categories.filter(category => category.id !== id)
                }))
            })
            .catch(err => {
                console.log(err)
            }
            )
    },
}))

export default useEcommerceStore;