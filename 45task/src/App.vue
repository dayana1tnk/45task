<template>
  <div id="app">
    <UserInfoForm @form-submitted="updateUser" />
    <UserInfoDisplay :user="user" />
  </div>
</template>

<script>
import UserInfoForm from '@/components/UserInfoForm.vue';
import UserInfoDisplay from '@/components/UserInfoDisplay.vue';

export default {
  components: {
    UserInfoForm,
    UserInfoDisplay,
  },
  data() {
    return {
      user: "",
    };
  },
  methods: {
    updateUser(data) {
      this.user = data;
    },
  },
};
</script>

<style>
/* Ваши стили здесь */
</style>
