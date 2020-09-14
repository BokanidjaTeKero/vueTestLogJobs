<template>
    <div v-if="imLogedIn" class="job-page-main-container">
        <h4 v-if='loading' class="job-page-main-container__loader" >
            Loading...
        </h4>
        <div v-else class="job-page-main-container__main-data">
            <table 
                class="main-table"
                v-if="jobs != null || jobs != ''" 
            >
                <tr>
                    <th>User name</th>
                    <th>Job name</th>
                    <th>Client Name</th>
                    <th>Start time</th>
                    <th>End time</th>
                </tr>
                <tr :key="job.id" v-for="job in jobs" >
                    <td>{{ job.user && job.user.first_name}} {{ job.user && job.user.last_name}}</td>
                    <td>{{job.jobRequest.jobType.name}}</td>
                    <td>{{job.client.name}}</td>
                    <td>{{job.start_time}}</td>
                    <td>{{job.end_time}}</td>
                </tr>
            </table>
            <Pagination />
        </div>
    </div>
</template>

<script>
import Pagination from './Pagination.vue';

export default {
    name: "Jobs",
    components: {
        Pagination
    },

    beforeMount() {
        this.fetchData()
    },

    computed: {
        loading(){
            return this.$store.state.loading
        },
        jobs(){
            return this.$store.state.jobs
        },
        imLogedIn(){
            return this.$store.state.imLogedIn
        }
    },

    methods: {
        fetchData: function(pageNum){
            this.$store.dispatch('fetchData', pageNum)
        },
    }
}
</script>

<style lang="scss">
    .job-page-main-container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding: 50px 10%;
        width: 100%;
        transition: all .5s ease;

        @media screen and (max-width: 768px){
            padding: 20px 10px;
        }

        &__loader {
            margin-top: 100px;
            color: black;
            font-size: 40px;

            @media screen and (max-width: 768px){
                font-size: 30px;
            }
        }

        &__main-data {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
        }

        .main-table {
            background-color: white;
            width: 100%;
            text-align: center;
            margin-bottom: 20px;

            tr {
                background-color: rgba(134, 189, 189, 0.712);

                &:nth-child(odd) {
                    background-color: rgba(34, 195, 195, 0.712);
                }

                &:hover {
                    background-color: rgba(14, 85, 85, 0.712);
                    color: white;
                }
            }

            th {
                font-size: 20px;
                padding: 5px;

                @media screen and (max-width: 768px){
                    font-size: 15px;
                }
            }

            td {
                font-size: 18px;
                padding: 5px;

                @media screen and (max-width: 768px){
                    font-size: 14px;
                }
            }
        }
    }
</style>