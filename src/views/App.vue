<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h1>Chris Generator</h1>
        <hr>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <h2>Input</h2>
        <form>
          <div class="form-group">
            <label for="routeName">Route Name</label>
            <input type="text" class="form-control" id="routeName" aria-describedby="routeNameHelp" v-model="routeName">
            <small id="routeNameHelp" class="form-text text-muted">Enter the route name.</small>
          </div>
          <div class="form-group">
            <label for="network">Network</label>
            <input type="text" class="form-control" id="network" aria-describedby="networkHelp" v-model="network">
            <small id="networkHelp" class="form-text text-muted">Enter the network here in X.X.X.X/N format.</small>
          </div>
        </form>
      </div>
      <div class="col">
        <label for="output">Generated Content</label>
        <textarea name="output" id="output">
          This is some generated text.
          The Route Name is: {{ routeName }}
          And the Network is: {{ network }}
        </textarea>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    routeName: "",
    network: ""
  })
}
</script>

<style scoped>

</style>
