<template>
<Layout>
  <List
    v-if="users.length"
    v-model="users"
  />
  <EmptyContent v-else />
</Layout>
</template>

<script>
import EmptyContent from '@/components/UserEmpty'
import Layout from '@/layouts/Main'
import List from '@/components/UserList'

export default {
  components: {
    EmptyContent,
    Layout,
    List,
  },

  data () {
    return {
      users: [
        {} // not empty
      ]
    }
  },
}
</script>