<template>
  <div>
    <p>
      Имя: {{ user.name }}
    </p>
    <p>
      Фамилия: {{ user.surname }}
    </p>
    <p>
      Email: {{ user.email }}
    </p>
    <p>
      Адрес: {{ user.address }}
    </p>
    <p>
      Телефон: {{ user.phone }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.user-info {
  padding: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  margin: 100px, 100px, 100px, 100px;
}

p {
  font-size: 22px;
  margin: 20px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

strong {
  font-weight: bold;
  color: #333;
}
</style>
