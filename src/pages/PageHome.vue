<template>
  <q-page class="constrain q-pa-md">
    <div class="row q-col-gutter-lg">
      <div class="col-12 col-sm-8">
        <q-card
          v-for="post in posts"
          :key="post.id"
          class="card-post q-mb-md"
          flat
          bordered
        >
          <q-item>
            <q-item-section avatar>
              <q-avatar>
                <img src="https://cdn.quasar.dev/img/boy-avatar.png">
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label class="text-bold">@busybee</q-item-label>
              <q-item-label caption>
                {{ post.location }}
              </q-item-label>
            </q-item-section>
          </q-item>

          <q-separator />
          <q-img :src="post.imgUrl" />
          <q-card-section>
            <div>{{ post.caption }}</div>
            <div class="text-caption text-grey">{{ post.date | niceDate }}</div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-4 larger-screens-only">
        <q-item>
          <q-item-section avatar>
            <q-avatar
              size="48px"
              class="fixed"
            >
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label class="text-bold">@busybee</q-item-label>
            <q-item-label caption>
              "Brasília, DF, Brazil"
            </q-item-label>
          </q-item-section>
        </q-item>
      </div>
    </div>
  </q-page>
</template>

<script>
import { date, uid } from 'quasar'

export default {
  name: 'PageHome',
  data () {
    return {
      posts: [
        {
          id: uid(),
          caption: "Golden Gate Bridge",
          date: 1598986127164,
          location: "Brasília, DF, Brazil",
          imgUrl: "https://cdn.quasar.dev/img/parallax2.jpg"
        },
        {
          id: uid(),
          caption: "Golden Gate Bridge",
          date: 1598986127164,
          location: "Brasília, DF, Brazil",
          imgUrl: "https://cdn.quasar.dev/img/parallax2.jpg"
        },
        {
          id: uid(),
          caption: "Golden Gate Bridge",
          date: 1598986127164,
          location: "Brasília, DF, Brazil",
          imgUrl: "https://cdn.quasar.dev/img/parallax2.jpg"
        },
        {
          id: uid(),
          caption: "Golden Gate Bridge",
          date: 1598986127164,
          location: "Brasília, DF, Brazil",
          imgUrl: "https://cdn.quasar.dev/img/parallax2.jpg"
        },
      ]
    }
  },
  filters: {
    niceDate (value) {
      return date.formatDate(value, 'MMMM D h:mm A')
    }
  }
}
</script>

<style lang="sass">
.card-post
  .q-img
    min-height: 200px
</style>