<template>
  <li
    :class="{ 'border-r': !isLast, 'bg-indigo-700': isSelected, 'sm:rounded-tl-lg': isFirst, 'sm:rounded-tr-lg': isLast}"
    class="cursor-pointer hover:underline table-cell py-4 text-center"
    role="tab"
    aria-selected="{isSelected ? 'true' : 'false'}"
    @click="$emit('select')"
  >{{ content | uppercase }}</li>
</template>

<script>
export default {
  name: 'Tab',
  props: {
    content: {
      type: String,
      required: true
    },
    index: {
      type: Number,
      required: true
    },
    length: {
      type: Number,
      required: true
    },
    selectedTabIndex: {
      type: Number,
      required: true
    }
  },
  filters: {
    uppercase(value) {
      if (!value) return ''
      value = value.toString()
      return value.toUpperCase()
    }
  },
  computed: {
    isFirst() {
      return this.index === 0
    },
    isLast() {
      return this.index === this.length - 1
    },
    isSelected() {
      return this.index === this.selectedTabIndex
    }
  }
}
</script>
