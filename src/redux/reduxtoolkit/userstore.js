import {configureStore} from '@reduxjs/toolkit'
import userreducer from './userreducer'
const userStore=configureStore({
    reducer:{
        user:userreducer
    }
})

export default userStore;