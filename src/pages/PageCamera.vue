<template>
  <q-page class="constrain-more q-pa-md">
    <div class="camera-frame q-pa-md">
      <img
        src="https://cdn.quasar.dev/img/parallax2.jpg"
        alt="Golden Bridge"
        class="full-width"
      >
    </div>
    <div class="text-center q-pa-md">
      <q-btn
        color="grey-10"
        icon="eva-camera"
        size="lg"
        round
      />

      <div class="row justify-center q-ma-md">
        <q-input
          v-model="post.caption"
          class="col col-sm-8"
          label="Caption"
          dense
        />
      </div>

      <div class="row justify-center q-ma-md">
        <q-input
          v-model="post.location"
          class="col col-sm-8"
          label="Location"
          dense
        >
          <template v-slot:append>
            <q-btn
              round
              dense
              flat
              icon="eva-navigation-2-outline"
            />
          </template>
        </q-input>
      </div>
      <div class="row justify-center q-mt-lg">
        <q-btn
          color="primary"
          label="Post Image"
          unelevated
          rounded
        />
      </div>
    </div>
  </q-page>
</template>

<script>
import { uid } from "quasar"
export default {
  name: 'PagaCamera',
  data () {
    return {
      post: {
        id: uid(),
        caption: "",
        location: "",
        photo: null,
        date: Date.now()
      }
    }
  }
}
</script>

<style lang="sass">
.camera-frame
  border: 2px solid $grey-10
  border-radius: 10px
</style>