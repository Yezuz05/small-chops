<template>
  <div class="home">
    <div class="container">
      <div class="control has-icons-left has-icons-right">
        <input
          @keyup.enter="search"
          class="input is-large is-rounded"
          type="search"
          v-model="searchValue"
          placeholder="Search for a place..."
        />
        <span class="icon is-medium is-left">
          <i class="fas fa-search"></i>
        </span>
      </div>
    </div>
    <div class="container is-fluid">
      <section class="nearby-places section">
        <h3 class="title">Nearby Places</h3>
        <div class="columns">
          <div class="column is-one-quarter is-one-third-tablet">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img
                    src="https://bulma.io/images/placeholders/1280x960.png"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4">Sege's Puff Puff</p>
                  </div>
                </div>
                <div class="content">
                  Willi's house address in Asokoro
                </div>
              </div>
            </div>
          </div>
          <div class="column is-one-quarter is-one-third-tablet">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img
                    src="https://bulma.io/images/placeholders/1280x960.png"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4">Sege's Puff Puff</p>
                    <p class="subtitle is-6">
                      <!-- <fa-rating
                        :glyph="'star'"
                        :spacing="0"
                        :inactive-color="'#cfcfcf'"
                        :active-color="'#fde665'"
                        :increment="0.5"
                        :fixed-points="2"
                      >
                      </fa-rating> -->
                    </p>
                  </div>
                </div>
                <div class="content">
                  Willi's house address in Asokoro
                </div>
              </div>
            </div>
          </div>
          <div class="column is-one-quarter is-one-third-tablet">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img
                    src="https://bulma.io/images/placeholders/1280x960.png"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4">Sege's Puff Puff</p>
                    <p class="subtitle is-6">
                      <!-- <fa-rating
                        :glyph="'star'"
                        :spacing="0"
                        :inactive-color="'#cfcfcf'"
                        :active-color="'#fde665'"
                        :increment="0.5"
                        :fixed-points="2"
                      >
                      </fa-rating> -->
                    </p>
                  </div>
                </div>
                <div class="content">
                  Willi's house address in Asokoro
                </div>
              </div>
            </div>
          </div>
          <div class="column is-one-quarter is-one-third-tablet">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img
                    src="https://bulma.io/images/placeholders/1280x960.png"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4">Sege's Puff Puff</p>
                    <p class="subtitle is-6">
                      <!-- <fa-rating
                        :glyph="'star'"
                        :spacing="0"
                        :inactive-color="'#cfcfcf'"
                        :active-color="'#fde665'"
                        :increment="0.5"
                        :fixed-points="2"
                      >
                      </fa-rating> -->
                    </p>
                  </div>
                </div>
                <div class="content">
                  Willi's house address in Asokoro
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="editor-picks section">
        <h3 class="title">Editor Picks</h3>
        <div class="columns">
          <div class="column is-one-quarter">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img
                    src="https://bulma.io/images/placeholders/1280x960.png"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4">Sege's Puff Puff</p>
                    <p class="subtitle is-6">
                      <!-- <fa-rating
                        :glyph="'star'"
                        :spacing="0"
                        :inactive-color="'#cfcfcf'"
                        :active-color="'#fde665'"
                        :increment="0.5"
                        :fixed-points="2"
                      >
                      </fa-rating> -->
                    </p>
                  </div>
                </div>
                <div class="content">
                  Willi's house address in Asokoro
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import { FaRating } from "vue-rate-it";
import { Star } from "vue-rate-it/glyphs/star";

export default {
  name: "home",
  components: {
    // FaRating
  },
  data() {
    return {
      star: "",
      searchValue: null
    };
  },
  created() {
    this.star = Star;
  },
  methods: {
    search() {
      this.$router.push({
        path: "search",
        query: { keyword: this.searchValue }
      });
    }
  }
};
</script>

<style lang="scss">
.container {
  padding-top: 30px;
  // section {
  //   margin-bottom: 50px;
  // }
}
</style>
