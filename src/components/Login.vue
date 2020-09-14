<template>
    <div class="login-container">
        <form 
            class="login-container__content"
            @submit.prevent="post" 
            v-if="!imLogedIn">
                <div class="form-msg" v-if="errorMsg">
                    <p>{{errorMsg}}</p>
                </div>
                <input
                    class="form-input form-input--top"
                    type="email"
                    name="email"
                    placeholder="email"
                    :value="email"
                @input="updateEmail"
                >
                <input
                    class="form-input form-input--bottom"
                    type="password"
                    name="password"
                    placeholder="password"
                    :value="password"
                    @input="updatePassword"
                >
                <button 
                    class="form-input form-input--btn"
                    type="submit">
                        submit form
                </button>
        </form>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: "Login",
    
    computed: {
        ...mapState({
            email: state => state.email,
        }),
        ...mapState({
            password: state => state.password,
        }),
        ...mapState({
            statusText: state => state.statusText
        }),
        imLogedIn(){
            return this.$store.state.imLogedIn
        },
        errorMsg(){
            return this.$store.state.msg
        },
    },
    methods: {
        updateEmail(e) {
            this.$store.commit('updateEmail', e.target.value)
        },
        updatePassword(e) {
            this.$store.commit('updatePassword', e.target.value)
        },
        post: function(){
            this.$store.dispatch('post');
        },
    }
}
</script>

<style lang="scss">
    .login-container {
        margin: 0 auto;
        margin-top: 200px;
        width: 320px;
        height: 300px;
        transition: all .5s ease;

        @media screen and (max-width: 568px){
            margin-top: 100px;
            width: 90%;
        }

        &:hover {
            -webkit-box-shadow: 0px 5px 17px -1px rgba(0,0,0,0.75);
            -moz-box-shadow: 0px 5px 17px -1px rgba(0,0,0,0.75);
            box-shadow: 0px 5px 17px -1px rgba(0,0,0,0.75);
            background-color: rgba(98, 200, 200, 0.65);
        }

        &__content {
            width: 100%;
            height: 100%;
            padding: 15px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }

        .form-msg{
            width: 100%;
            padding: 10px 5px;
            border: 2px solid black;
            background-color: red;

            p {
                font-weight: bold;
                text-align: center;
            }
        }

        .form-input {
            width: 100%;
            font-size: 24px;
            padding: 5px 10px;
            text-align: center;
            border: none;
            margin-top: 10px;
            transition: all .5s ease;

            &:hover {
                background-color: rgba(34, 195, 195, 0.712);
                color: black;
            }

            &--top {
                &:hover {
                border-bottom-left-radius: 5px;
                border-bottom-right-radius: 5px;
                border-top-left-radius: 10px;
                border-top-right-radius: 10px;
            }
            }

            &--bottom {
                &:hover {
                border-bottom-left-radius: 10px;
                border-bottom-right-radius: 10px;
                border-top-left-radius: 5px;
                border-top-right-radius: 5px;
            }
            }

            &--btn{
                &:hover {
                    background-color: rgba(29, 167, 167, 0.801);
                    transform: scaleX(1.02);
                    -webkit-box-shadow: 0px 10px 17px -6px rgba(0,0,0,0.75);
                    -moz-box-shadow: 0px 10px 17px -6px rgba(0,0,0,0.75);
                    box-shadow: 0px 10px 17px -6px rgba(0,0,0,0.75);
                    cursor: pointer;
                }
            }

            @media screen and (max-width: 768px) {
                font-size: 16px;
                padding: 5px;
            }
        }
    }
</style>

//email: admin@chord.agency
//password: password