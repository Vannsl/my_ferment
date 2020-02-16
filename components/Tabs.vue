<template>
  <div class="border-b" role="tabs">
    <ul class="table table-fixed w-full justify-around" role="tablist">
      <slot />
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Tabs'
}
</script>
