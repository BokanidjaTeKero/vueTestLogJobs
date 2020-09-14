<template>
    <div>
        <nav
            class="main-nav-bar"
            v-if="imLogedIn" >
                <button 
                    class="main-nav-bar__btn"
                    @click="logout" 
                        >Logout
                </button>
        </nav>
    </div>
</template>

<script>
export default {
    name: "Header",

    computed: {
        imLogedIn(){
            return this.$store.state.imLogedIn
        }
    },

    methods: {
        logout: function(){
            this.$store.dispatch('logout');
        }
    }
}
</script>

<style lang="scss">
    .main-nav-bar {
        padding: 20px;
        text-align: right;
        background-color: rgba(34, 195, 195, 0.712);
        transition: all .5s ease;

        &:hover {
            -webkit-box-shadow: 0px 2px 14px 0px rgba(0,0,0,0.75);
            -moz-box-shadow: 0px 2px 14px 0px rgba(0,0,0,0.75);
            box-shadow: 0px 2px 14px 0px rgba(0,0,0,0.75);
        }

        @media screen and (max-width: 568px){
            padding: 10px;
        }

        &__btn {
            padding: 5px 10px;
            border: none;
            font-size: 18px;
            background-color: rgba(34, 195, 195, 0.712);
            transition: all .5s ease;
            cursor: pointer;

            &:hover {
                color: white;
                background-color: rgba(28, 160, 160, 0.712);
                -webkit-box-shadow: 0px 0px 9px 1px rgba(0,0,0,0.75);
                -moz-box-shadow: 0px 0px 9px 1px rgba(0,0,0,0.75);
                box-shadow: 0px 0px 9px 1px rgba(0,0,0,0.75);
            }

            @media screen and (max-width: 568px){
                padding: 5px;
                font-size: 14px;
            }
        }
    }
</style>