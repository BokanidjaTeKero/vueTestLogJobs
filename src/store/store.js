import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        jobs : [],
        loading: false,
        currentPage: 1,
        totalPages: '',
        email: '',
        password: '',
        imLogedIn: localStorage.getItem('access_token'),
        msg : ''
    },

    mutations: {
        updateEmail(state, email) {
            state.email = email
        },

        updatePassword(state, password) {
            state.password = password
        },

        pageNumber: state =>{
            state.currentPage += 1;
        },

        post: state => {
            axios.post('https://dvapi.tempest.app/api/v1/auth/login', {
                email: state.email,
                password: state.password
            })
            .then(response => {
                state.email = '';
                state.password = '';
                localStorage.setItem('access_token', response.data.token);
                state.imLogedIn = localStorage.getItem('access_token');
            })
            .catch((error) => {
                state.email = '';
                state.password = '';
                console.error(error);
                state.msg = 'Unauthorized!!! Try again';
            })
        },

        logout: state => {
            state.imLogedIn = localStorage.setItem('access_token', '');
        },

        fetchData: (state, pageNum) => {
            state.loading = true;
            axios.get('https://dvapi.tempest.app/api/v1/jobs',{
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('access_token')}`
                },
                params: {
                    order_by: 'start_time',
                    include: 'client.jobRequest,jobType.user,jobRequest.jobType,user',
                    page: pageNum
                }
            })
            .then((res) => {
                state.jobs = res.data.data;
                state.currentPage = res.data.meta.pagination.current_page;
                state.totalPages = res.data.meta.pagination.count;
                state.loading = false;
            })
            .catch((error) => {
                console.error(error)
            })
        },
    },
    actions: {
        post: context => {
            context.commit('post');
        },

        logout: context => {
            context.commit('logout');
        },

        fetchData: (context, pageNum) => {
            context.commit('fetchData', pageNum);
        }
    }
})