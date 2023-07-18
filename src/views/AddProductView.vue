<template>
  <div class="card mb-5">
    <div class="card-header">
      <h2>Add Product</h2>
    </div>
    <form @submit.prevent="onSubmit">
      <div class="card-body">
        <div class="row d-flex justify-content-center">
          <div class="col-md-6">
            <div class="form-group">
              <label>Name</label>
              <input type="text" v-model="form.name" class="form-control" required />
            </div>
            <div class="form-group">
              <label>Description</label>
              <textarea v-model="form.description" class="form-control" required></textarea>
            </div>
            <div class="form-group">
              <label>Category</label>
              <input type="text" v-model="form.category" class="form-control" required />
            </div>
            <div class="form-group">
              <label>Price</label>
              <input type="number" v-model="form.price" class="form-control" required />
            </div>
            <div class="form-group">
              <label>Quantity</label>
              <input type="number" v-model="form.quantity" class="form-control" required />
            </div>
            <div class="form-group">
              <label>Is Active</label>
              <input type="checkbox" v-model="form.is_active" class="form-control fs-5" />
            </div>
          </div>
        </div>
      </div>
      <div class="card-footer d-flex justify-content-center gap-3">
        <RouterLink class="btn btn-secondary mb-3 me-2" to="/products">Back</RouterLink>
        <button type="submit" :disabled="loading" class="btn btn-success mb-3 ms-4">Submit</button>
      </div>
    </form>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      form: {
        name: '',
        description: '',
        category: '',
        price: 0,
        quantity: 0,
        is_active: false
      },
      loading: false
    }
  },
  mounted() {},
  methods: {
    async onSubmit() {
      this.loading = true
      try {
        const { status, data } = await axios.post('http://127.0.0.1:8000/api/products', this.form)
        console.log('status', status)
        console.log('data', data)
        alert('Product Successfully Added!')
        this.$router.push({ name: 'products' })
      } catch (error) {
        alert('Something Went Wrong.')
        console.log('error', error)
      }
      this.loading = false
    }
  }
}
</script>
<style></style>
