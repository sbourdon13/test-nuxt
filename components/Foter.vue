<template>
  <div class="row text-rigth p-5 bg-light">
    © Test - {{ getdate }}
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {
    getdate() {
      return 2018
    }
  }
}
</script>
