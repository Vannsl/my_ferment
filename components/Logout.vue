te<template>
  <div>
    <p>Du bist als {{ email }} eingeloggt.</p>
    <p>Ausloggen?</p>
    <button @click.prevent="$emit('logout')">Logout</button>
  </div>
</template>

<script>
export default {
  name: 'Logout',
  props: {
    email: {
      type: String,
      required: true
    }
  }
}
</script>
