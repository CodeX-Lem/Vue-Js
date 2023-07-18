<template>
  <div class="card mb-5">
    <div class="card-header">
      <h2>Edit Product</h2>
    </div>
    <form v-if="loading">
      <h4 class="text-center">Loading Data...</h4>
    </form>
    <form v-else @submit.prevent="onSubmit">
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
              <input type="checkbox" v-model="form.is_active" class="form-control" />
            </div>
          </div>
        </div>
      </div>
      <div class="card-footer d-flex justify-content-center gap-3">
        <RouterLink class="btn btn-secondary mb-3 me-2" to="/products">Back</RouterLink>

        <button type="submit" :disabled="btnLoading" class="btn btn-primary mb-3">
          Update Product
        </button>
      </div>
    </form>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      id: this.$route.params.id,
      form: {
        name: '',
        description: '',
        category: '',
        price: 0,
        quantity: 0,
        is_active: false
      },
      btnLoading: false,
      loading: false
    }
  },
  mounted() {
    this.getProduct()
  },
  methods: {
    async getProduct() {
      this.loading = true
      try {
        const { status, data } = await axios.get(`http://127.0.0.1:8000/api/products/${this.id}`)
        console.log('status', status)
        console.log('data', data)
        this.form.name = data.name
        this.form.description = data.description
        this.form.category = data.category
        this.form.price = data.price
        this.form.quantity = data.quantity
        this.form.is_active = data.is_active == 1 ? true : false
      } catch (error) {
        alert('Something Went Wrong.')
        console.log('error', error)
      }
      this.loading = false
    },
    async onSubmit() {
      this.btnLoading = true
      try {
        const { status, data } = await axios.put(
          `http://127.0.0.1:8000/api/products/${this.id}`,
          this.form
        )
        console.log('status', status)
        console.log('data', data)
        alert('Product Successfully Updated!')
        this.$router.push({ name: 'products' })
      } catch (error) {
        alert('Something Went Wrong.')
        console.log('error', error)
      }
      this.btnLoading = false
    }
  }
}
</script>
<style></style>
