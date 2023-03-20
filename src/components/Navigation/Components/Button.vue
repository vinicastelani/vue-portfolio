<template>
  <button>
    <slot name="icon"></slot>
    <span>{{ title }}</span>
  </button>
</template>

<script>
export default {
  name: "navigationButton",
  props: {
    title: {
      type: String,
      required: true,
      default: () => "",
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  position: relative;
  transition: ease-in-out 0.6s;
  border-radius: 50em;
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
  padding: 8px 16px;
  border-radius: 50px;
  cursor: pointer;
  :after {
    content: "";
    transition: ease 0.5s;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 1px;
    background: #fff;
  }
}
button:hover {
  transition: ease-in-out 0.6s;
  background: transparent;
  border: none;
  :after {
    content: "";
    transition: ease 0.5s;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: #fff;
  }
}
</style>
