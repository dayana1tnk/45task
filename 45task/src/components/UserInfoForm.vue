<template>
  <div>
    <input v-model="formData.name" type="text" placeholder="Имя">
    <input v-model="formData.surname" type="text" placeholder="Фамилия">
    <input v-model="formData.email" type="email" placeholder="Email">
    <input v-model="formData.address" type="text" placeholder="Адрес">
    <input v-model="formData.phone" type="tel" placeholder="Телефон">
    <button @click="submitForm">Сохранить</button>
  </div>
</template>

<script>
export default {
  emits: ['form-submitted'],
  data() {
    return {
      formData: {
        name: '',
        surname: '',
        email: '',
        address: '',
        phone: '',
      },
    };
  },
  methods: {
    submitForm() {
      this.$emit('form-submitted', { ...this.formData });
      this.formData = {
        name: '',
        surname: '',
        email: '',
        address: '',
        phone: '',
      };
    },
  },
};
</script>

<style scoped>
.user-form {
  max-width: 100px;
  margin: 100px;
  padding: 200px;
  background-color: #f0f0f0;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}
.app-container {
  max-width: 800px;
  margin: 100px;
  padding: 200px;
  background-color: #bf9c9c;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}
.form-group {
  margin-bottom: 20px;
  margin: 10px, 10px;
}

label {
  display: block;
  font-size: 16px;
  margin-bottom: 8px;
  color: #333;
}

input {
  padding: 10px;
  width: 100%;
  font-size: 16px;
  border: none;
  border-bottom: 1px solid #ccc;
  background-color: #f9f9f9;
  transition: border-color 0.3s ease;
  margin: 20px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

input:focus {
  outline: none;
  border-color: #007BFF;
}

button {
  margin-top: 20px;
  padding: 12px 20px;
  background-color: #007BFF;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin: 30px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

button:hover {
  background-color: #0056b3;
}

</style>