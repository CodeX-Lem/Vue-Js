<template>
  <body>
    <div class="container shadow-sm p-3 mt-3" style="height: 100vh; background-color: ">
      <div class="container d-flex flex-column align-items-center">
        <h1 class="fw-bold mb-2">Multistep Form</h1>

        <h5>Step {{ currentStep }} of 4</h5>
      </div>
      <hr />
      <div class="container p-3">
        <form v-if="currentStep === 1" @submit.prevent="nextStep">
          <!-- Step 1: Form fields -->
          <h4 class="border-bottom mb-2">Personal Information</h4>
          <div class="inform-group">
            <label class="mp">Firstname: </label>
            <input type="text" class="input form-control" v-model="Firstname" required />
          </div>
          <div class="inform-group">
            <label class="mp">Middlename: </label>
            <input type="text" class="input form-control" v-model="Middlename" required />
          </div>
          <div class="inform-group">
            <label class="mp">Lastname: </label>
            <input type="text" class="input form-control" v-model="Lastname" required />
          </div>
          <div class="inform-group">
            <label class="mp">Date of birth: </label>
            <input type="date" class="input form-control" v-model="dob" required />
          </div>
          <div class="inform-group">
            <label class="mp">Email: </label>
            <input type="email" class="input form-control" v-model="email" required />
          </div>
          <div class="inform-group">
            <label class="mp">Contact #: </label>
            <input type="text" class="input form-control" v-model="contact" required />
          </div>
          <hr />
          <!-- Add more fields for step 1 -->
          <button type="submit" class="btn btn-primary w-100">Next</button>
        </form>
      </div>
      <form v-if="currentStep === 2" @submit.prevent="nextStep">
        <!-- Step 2: Form fields -->
        <h4 class="border-bottom mb-2">Address Information</h4>
        <div class="inform-group">
          <label class="mp">Street: <span>(Optional)</span> </label>
          <input type="text" class="input form-control" v-model="street" />
        </div>
        <div class="inform-group">
          <label class="mp">Barangay: </label>
          <input type="text" class="input form-control" v-model="brgy" required />
        </div>
        <div class="inform-group">
          <label class="mp">City/Municipality: </label>
          <input type="text" class="input form-control" v-model="city" required />
        </div>
        <div class="inform-group">
          <label class="mp">Province: </label>
          <input type="text" class="input form-control" v-model="province" required />
        </div>
        <hr />

        <!-- Add more fields for step 2 -->
        <div class="container d-flex justify-content-end w-100">
          <button
            @click.prevent="previousStep"
            class="back1 btn btn-link"
            style="text-decoration: none; color: black; transition: all 0.3s ease-out"
          >
            Back
          </button>
          <button type="submit" class="btn btn-primary">Next</button>
        </div>
      </form>

      <form v-if="currentStep === 3" @submit.prevent="nextStep">
        <!-- Step 3: Form fields -->
        <h4 class="border-bottom mb-2">Payment Information</h4>
        <div class="inform-group">
          <label class="mp">Name on Card: </label>
          <input type="text" class="input form-control" v-model="cardName" required />
        </div>
        <div class="inform-group">
          <label class="mp">Credit Card: </label>
          <input type="text" class="input form-control" v-model="cardNum" required />
        </div>

        <!-- Add more fields for step 3 -->

        <div class="container d-flex justify-content-end w-100">
          <button
            @click.prevent="previousStep"
            class="back1 btn btn-link"
            style="text-decoration: none; color: black; transition: all 0.3s ease-out"
          >
            Back
          </button>
          <button type="submit" class="btn btn-primary">Next</button>
        </div>
      </form>

      <form v-if="currentStep === 4">
        <h4 class="border-bottom mb-2">Summary Overview</h4>
        <div class="container">
          <div class="upper container p-3 border">
            <p class="fw-bold fs-4">Personal Information</p>

            <div class="row">
              <div class="upper-left col border-end">
                <div><b class="mp">First Name: </b> {{ Firstname }}</div>
                <div><b class="mp">Middle Name: </b> {{ Middlename }}</div>
                <div><b class="mp">Last Name: </b> {{ Lastname }}</div>
              </div>
              <div class="upper-right col">
                <div><b class="mp">Date of Birth: </b> {{ dob }}</div>
                <br />
                <div><b class="mp">Email: </b> {{ email }}</div>
              </div>
            </div>
          </div>
          <div class="mid container mt-3 p-3 border">
            <p class="fw-bold fs-4">Address Information</p>
            <div class="row">
              <div class="col">
                <div><b class="mp">Street: </b> {{ street }}</div>
                <div><b class="mp">Barangay: </b> {{ brgy }}</div>
                <div><b class="mp">City/Municipality: </b> {{ city }}</div>
                <div><b class="mp">Province: </b> {{ province }}</div>
              </div>
            </div>
          </div>
          <div class="bot container mt-3 p-3 border">
            <p class="fw-bold fs-4">Payment Information</p>
            <div class="container d-flex justify-content-around"></div>
            <div><b class="mp">Name on Card: </b> {{ cardName }}</div>
            <div><b class="mp">Credit Card: </b> {{ cardNum }}</div>
          </div>
        </div>
        <!--  -->
        <div class="container d-flex justify-content-center w-100">
          <button @click.prevent="previousStep" class="btn btn-primary">Back</button>
        </div>
      </form>
    </div>
  </body>
</template>

<script>
export default {
  data() {
    return {
      currentStep: 1,
      Firstname: '',
      Middlename: '',
      Lastname: '',
      dob: '',
      email: '',
      contact: '',
      street: '',
      brgy: '',
      city: '',
      province: '',
      cardName: '',
      cardNum: ''
    }
  },
  methods: {
    nextStep() {
      // Move to the next step
      this.currentStep++
    },
    previousStep() {
      // Move to the previous step
      this.currentStep--
    }
  }
}
</script>
<style scoped>
.back1:hover {
  background-color: blue;
  color: white !important;
}
label {
  display: block;
}
.mp {
  margin: 5px;
  padding: 5px;
}
.input {
  margin: 10px;
  padding: 15px;
}
button {
  margin: 10px;
  padding: 15px;
}
</style>
