<template>
  <div class="card">
    <div class="card-header">
      <h2>Products Page</h2>
    </div>
    <div class="card-body container mt-5" style="height: 100vh">
      <div class="btn container d-flex justify-content-end">
        <RouterLink class="btn btn-success mb-3" to="/products/add">Add Product</RouterLink>
      </div>
      <input
        v-model="searchQuery"
        type="search"
        name="search"
        class="form-control mb-3"
        placeholder="Search Product...."
        @input="performSearch"
      />

      <div class="table-responsive">
        <table class="table table-hover table-bordered">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Description</th>
              <th>Category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Active</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody v-if="loading">
            <tr>
              <td colspan="7" class="text-center">Loading Please Wait...</td>
            </tr>
          </tbody>
          <tbody v-else>
            <tr v-for="(product, index) in filteredItems" :key="product.id">
              <td>{{ index + 1 }}</td>
              <td>{{ product.name }}</td>
              <td>{{ product.description }}</td>
              <td>{{ product.category }}</td>
              <td>{{ product.price }}</td>
              <td>{{ product.quantity }}</td>
              <td>{{ !!product.is_active }}</td>
              <td>
                <RouterLink class="btn btn-primary m-1" :to="`/products/${product.id}/edit`"
                  >Edit</RouterLink
                >
                <button @click="onDelete(product.id)" class="btn btn-danger m-1">Delete</button>
              </td>
            </tr>
            <tr v-if="filteredItems.length == 0">
              <td colspan="8" class="text-center">No Data Found.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  data() {
    return {
      products: [],
      loading: true,
      searchQuery: '',
      filteredItems: []
    }
  },
  mounted() {
    this.getProducts()
  },

  methods: {
    async getProducts() {
      this.loading = true
      try {
        const url = this.searchQuery
          ? `http://127.0.0.1:8000/api/products?search=${this.searchQuery}`
          : 'http://127.0.0.1:8000/api/products'

        const { status, data } = await axios.get(url)
        console.log('status', status)
        console.log('data', data)
        this.products = data
        this.filteredItems = [...data]
      } catch (error) {
        alert('Something Went Wrong.')
        console.log('error', error)
      }
      this.loading = false
    },

    async onDelete(id) {
      if (!confirm('Are you sure you want to delete this record?')) {
        return
      }
      try {
        const { status, data } = await axios.delete(`http://127.0.0.1:8000/api/products/${id}`)
        console.log('status', status)
        console.log('data', data)
        alert('Product Deleted Successfully.')
        this.getProducts()
      } catch (error) {
        alert('Something Went Wrong.')
        console.log('error', error)
      }
    },
    performSearch() {
      this.filteredItems.length = 0

      this.products.forEach((item) => {
        const productName = item.name.toLowerCase()
        if (productName.includes(this.searchQuery.toLowerCase())) {
          this.filteredItems.push(item)
        }
      })
      if (this.searchQuery == '') {
        this.filteredItems = [...this.products]
      }
    }
  }
}
</script>
<style></style>
