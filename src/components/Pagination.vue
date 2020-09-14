<template>
    <div class="pagination">
        <button 
            class="pagination__btn"
            v-if="currentPage > 1" 
            @click.prevent="fetchData(currentPage - 1)" >
                Prev Page
        </button>
        <p>{{currentPage}}</p>
        <button 
            class="pagination__btn"
            v-if="currentPage < totalPages" 
            @click.prevent="fetchData(currentPage + 1)" >
                Next Page
        </button>
    </div>
</template>

<script>
export default {
    name: 'Pagination',

    computed: {
        currentPage(){
            return this.$store.state.currentPage
        },

        totalPages(){
            return this.$store.state.totalPages
        },
    },

    methods: {
        fetchData: function(pageNum){
            this.$store.dispatch('fetchData', pageNum)
        },
    }
}
</script>

<style lang="scss">
    .pagination {
        display: flex;
        width: 40%;
        justify-content: space-evenly;
        align-items: center;

        p {
            font-size: 30px;
            font-weight: bolder;
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
