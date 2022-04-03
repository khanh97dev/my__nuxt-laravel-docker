<template>
  <CreateUser />
</template>

<script lang="ts">
import Vue from 'vue'
import { gql } from '@apollo/client/core'
import CreateUser from '../components/CreateUser.vue'

export const GET_USERS = gql`
  query {
    users: users (orderBy: [{
      column: "id"
      order: DESC
    }]) {
      data {
          id
          email
          name
      }
      paginatorInfo {
        total
        lastPage
        currentPage
        perPage
      }
    }
  }
`

export default Vue.extend({
  name: 'IndexPage',
  components: {
    CreateUser
  },
  data() {
    return {
      users: [],
    }
  },
  mounted() {
    console.log(this.users);
  },
  ...{
    apollo: {
      users: {
        query: GET_USERS,
        update: res => res.users.data
      },
    },
  }
})
</script>
