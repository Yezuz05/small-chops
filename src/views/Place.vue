<template>
  <div class="place container">
    <div class="columns">
      <div class="column is-half">
        <div>
          <h3 class="title">
            Sege's Puff Puff
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis quis porro cumque eaque amet pariatur voluptas eos!
            Culpa reiciendis recusandae pariatur mollitia perferendis, sapiente
            voluptatem cupiditate sequi porro dolor doloremque.
          </p>
        </div>
        <div class="place-images">
          <h4 class="title is-4">Images</h4>
          <div class="columns">
            <div class="column is-one-thirds">
              <figure class="image is-256x256">
                <img src="https://bulma.io/images/placeholders/256x256.png" />
              </figure>
            </div>
            <div class="column is-one-thirds">
              <figure class="image is-256x256">
                <img src="https://bulma.io/images/placeholders/256x256.png" />
              </figure>
            </div>
            <div class="column is-one-thirds">
              <figure class="image is-256x256">
                <img src="https://bulma.io/images/placeholders/256x256.png" />
              </figure>
            </div>
          </div>
        </div>
      </div>
      <div class="place-location column is-half">
        <div id="map"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
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
    setMarker() {}
  },
  mounted() {
    this.initMap();
  }
};
</script>

<style lang="scss">
.place {
  &-images {
    margin-top: 30px;
  }
}
div#map {
  width: 100%;
  height: 300px;
}
</style>
