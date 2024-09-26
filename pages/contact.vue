<template>
  <div class="container mx-auto py-10 px-4">
    <h1 class="text-4xl font-bold mb-6 text-center">Contact Us</h1>
    <p class="text-lg text-center mb-10">We'd love to hear from you! Please fill out the form below.</p>

    <!-- Contact Form -->
    <form @submit.prevent="submitForm" class="max-w-lg mx-auto bg-white shadow-md rounded-lg p-8">
      <!-- Name Input -->
      <div class="mb-6">
        <label for="name" class="block text-lg font-semibold mb-2">Name</label>
        <input
          v-model="form.name"
          type="text"
          id="name"
          placeholder="Your Name"
          class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          required
        />
      </div>

      <!-- Email Input -->
      <div class="mb-6">
        <label for="email" class="block text-lg font-semibold mb-2">Email</label>
        <input
          v-model="form.email"
          type="email"
          id="email"
          placeholder="Your Email"
          class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          required
        />
      </div>

      <!-- Subject Input -->
      <div class="mb-6">
        <label for="subject" class="block text-lg font-semibold mb-2">Subject</label>
        <input
          v-model="form.subject"
          type="text"
          id="subject"
          placeholder="Subject"
          class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          required
        />
      </div>

      <!-- Message Input -->
      <div class="mb-6">
        <label for="message" class="block text-lg font-semibold mb-2">Message</label>
        <textarea
          v-model="form.message"
          id="message"
          rows="5"
          placeholder="Your Message"
          class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          required
        ></textarea>
      </div>

      <!-- Submit Button -->
      <button
        type="submit"
        class="w-full bg-blue-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-600 transition">
        Send Message
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

// Reactive form data
const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

// Mock submit function (can be replaced with actual submission logic)
const submitForm = () => {
  console.log('Form submitted:', form)
  alert(`Thank you, ${form.name}! Your message has been sent.`)
  // Reset the form fields after submission
  form.name = ''
  form.email = ''
  form.subject = ''
  form.message = ''
}
</script>

<style scoped>
/* Add any custom styles if needed */
</style>