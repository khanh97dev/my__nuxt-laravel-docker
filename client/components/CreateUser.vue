<template>
  <div
    class="relative flex flex-col items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0"
  >
    <form class="w-full max-w-lg" @submit.prevent="submit()">
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="input__name"
          >
            Name
          </label>
          <input
            autocomplete="off"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="input__name"
            type="text"
            placeholder=""
            v-model="form.name"
          />
          <p class="text-red-500 text-xs italic">Please fill out this field.</p>
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="input__email"
          >
            Email
          </label>
          <input
            autocomplete="off"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="input__email"
            type="email"
            placeholder=""
            v-model="form.email"
          />
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="input__password"
          >
            Password
          </label>
          <input
            autocomplete="off"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="input__password"
            type="password"
            placeholder=""
            v-model="form.password"
          />
          <p class="text-gray-600 text-xs italic">
            Make it as long and as crazy as you'd like
          </p>
        </div>
      </div>
      <div class="flex justify-center">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded w-full inline-flex items-center justify-center"
          type="submit"
          :disabled="loading"
        >
          <template v-if="loading">
            <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Submit
          </template>
          <template v-else>
            Submit
          </template>
        </button>
      </div>
    </form>
    <code class="block whitespace-pre overflow-x-scroll" v-text="response">
    </code>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { gql } from '@apollo/client/core'
const CREATE_USER = gql`
  mutation createUser ($input: SendMessageInput) {
    createUser(
      input: $input
    ) {
      name
      email
    }
  }
`

export default Vue.extend({
  name: 'CreateUser',
  data() {
    return {
      response: null,
      loading: false,
      form: {
        email: null,
        name: null,
        password: null,
      },
    }
  },
  mounted() {},

  methods: {
    async submit() {
      try {
        this.loading = true
        const res = await this.$apollo
          .mutate({
            mutation: CREATE_USER,
            variables: {
              input: this.form,
            },
          })
          .then((res) => {
            this.loading = false
            console.log(res.data)
            return res.data
          })
        console.log(await res)
      } catch (e) {
        this.loading = false
        console.error(e)
      }
    },
  },
})
</script>
