<template>
  <div id="search" class="search container">
    <section class="search-filters section">
      <div class="control has-icons-left has-icons-right">
        <input
          class="input is-rounded"
          type="search"
          v-model="searchValue"
          placeholder="Search for a place..."
        />
        <span class="icon is-medium is-left">
          <i class="fas fa-search"></i>
        </span>
      </div>
      <div class="select is-rounded">
        <select>
          <option selected disabled>Category</option>
          <option>BBQ</option>
          <option>Fries</option>
          <option>Sauces</option>
          <option>Drinks</option>
        </select>
      </div>
      <div class="select is-rounded">
        <select>
          <option selected disabled>Rating</option>
          <option>5</option>
          <option>4</option>
          <option>3</option>
          <option>2</option>
          <option>1</option>
        </select>
      </div>

      <div class="dropdown">
        <div class="dropdown-trigger">
          <button
            class="button is-rounded"
            aria-haspopup="true"
            aria-controls="dropdown-menu"
          >
            <span>Filter Results</span>
            <span class="icon is-small">
              <i class="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </button>
        </div>
        <div class="dropdown-menu" id="dropdown-menu" role="menu">
          <div class="dropdown-content">
            <a href="#" class="dropdown-item">
              Dropdown item
            </a>
            <a class="dropdown-item">
              Other dropdown item
            </a>
            <a href="#" class="dropdown-item is-active">
              Active dropdown item
            </a>
            <a href="#" class="dropdown-item">
              Other dropdown item
            </a>
            <hr class="dropdown-divider" />
            <a href="#" class="dropdown-item">
              With a divider
            </a>
          </div>
        </div>
      </div>
    </section>
    <section class="search-results section">
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchValue: null
    };
  },
  created() {
    this.searchValue = this.$route.query["keyword"];
  }
};
</script>

<style lang="scss">
.search {
  min-height: 100vh;
  width: 100%;
  &-filters {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 10px 0;
    height: 50px;
    & > div {
      margin-right: 20px;
      margin-bottom: 20px;
      &:first-child {
        width: 50%;
      }
    }
  }
  &-results {
    padding-left: 0;
  }
}
</style>
