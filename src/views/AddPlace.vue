<template>
  <div id="add-place" class="container">
    <h3 class="title">Add Place</h3>
    <section class="columns">
      <div class="column is-5 is-full-mobile">
        <form>
          <div class="field">
            <label class="label">Name</label>
            <div class="control">
              <input class="input" type="text" />
            </div>
          </div>
          <div class="field">
            <label class="label">Address</label>
            <div class="control">
              <input class="input" type="text" />
            </div>
          </div>

          <!-- <div class="field">
            <label class="label">Username</label>
            <div class="control has-icons-left has-icons-right">
              <input
                class="input is-success"
                type="text"
                placeholder="Text input"
                value="bulma"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
              </span>
              <span class="icon is-small is-right">
                <i class="fas fa-check"></i>
              </span>
            </div>
            <p class="help is-success">This username is available</p>
          </div> -->
          <div class="field">
            <label class="label">Category</label>
            <div class="control">
              <v-select
                multiple
                :searchable="false"
                v-model="category"
                :options="['BBQ', 'Puff Puff']"
              />
            </div>
          </div>

          <div class="field">
            <label class="label">Description</label>
            <div class="control">
              <textarea class="textarea" placeholder="Textarea"></textarea>
            </div>
          </div>

          <div class="field">
            <div class="control">
              <label class="checkbox">
                <input type="checkbox" />
                I own this place
              </label>
            </div>
          </div>
          <div class="field is-grouped">
            <div class="control">
              <button class="button is-success">Submit</button>
            </div>
            <!-- <div class="control">
              <button class="button is-link is-light">Cancel</button>
            </div> -->
          </div>
        </form>
      </div>
      <div class="column is-5 is-offset-2 is-full-mobile map-wrapper">
        <input
          class="input"
          id="place-search"
          type="text"
          placeholder="Search area..."
        />
        <div id="map"></div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      category: null,
      map: null,
      autocomplete: null,
      placeChangedListener: null
    };
  },
  mounted() {
    this.initMap();
    this.initAutoComplete();
  },
  methods: {
    initMap() {
      // eslint-disable-next-line no-undef
      this.map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: { lat: 6.6018, lng: 3.3515 }
      });
      this.map.addListener("click", this.handleMapClick);
    },
    initAutoComplete() {
      // eslint-disable-next-line no-undef
      this.autocomplete = new google.maps.places.Autocomplete(
        document.getElementById("place-search"),
        { componentRestrictions: { country: "ng" } }
      );
      this.placeChangedListener = this.autocomplete.addListener(
        "place_changed",
        this.showPlaceOnMap
      );
    },
    showPlaceOnMap() {
      const place = this.autocomplete.getPlace();
      this.map.fitBounds(place.geometry.viewport);
    },
    handleMapClick(event) {
      console.log(event);
    },
    destroyed() {
      // eslint-disable-next-line no-undef
      google.maps.event.removeListener(this.placeChangedListener);
    }
  }
};
</script>

<style lang="scss">
@import "vue-select/src/scss/vue-select.scss";

.v-select {
  height: 2.5em;
  .vs__dropdown-toggle {
    height: 100%;
  }
}

.map-wrapper {
  padding-top: 43px;
  input {
    margin-bottom: 20px;
  }
}

div#map {
  width: 100%;
  height: 300px;
}
</style>
