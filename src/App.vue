<script setup lang="ts">
import useSearch from "./hooks/useSearch";

const {artistList, searchArtist, artistQuery} = useSearch()
</script>

<template>
  <div class="text-center">
    <form @submit.prevent="searchArtist">
      <label for="artist-input" class="form-label">Nombre del artista</label>
      <input
          name="artist-input"
          class="form-control"
          v-model="artistQuery"
          type="text"
          required
      />
      <button class="btn btn-primary mt-2" type="submit">Buscar</button>
    </form>
  </div>
  <template v-if="artistList.length">
    <div class="artist-wrapper">
      <div v-for="artist in artistList" class="d-flex align-items-center mb-3">
        <img
            :src="artist.images.length ? artist.images[0].url : ''"
            class="artist-image"
            width="120"
            height="120"
        />
        <div>
          <p class="artist-name">{{ artist.name }}</p>
          <div>
        <span class="artist-genres" v-for="(genre,index) in artist.genres">
          {{ genre }} {{ index !== artist.genres.length - 1 ? '/ ' : '' }}
        </span>
          </div>
        </div>
      </div>
    </div>
  </template>
</template>

<style scoped>
.artist-wrapper {

}
.artist-image {
  margin-right: 20px;
  border-radius: 50%;
  border: 3px solid #dbdbdb;
}

.artist-name {
  font-size: 23px;
  font-weight: bold;
  text-transform: uppercase;
}

.artist-genres {
  font-size: 12px;
  text-transform: lowercase;
  font-style: italic;
}
</style>
