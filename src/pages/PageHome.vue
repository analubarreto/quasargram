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
      <div class="col-4">
        <q-item class="fixed larger-screen-only">
          <q-item-section avatar>
            <q-avatar size="48px">
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
import { date } from 'quasar'

export default {
  name: 'PageHome',
  data () {
    return {
      posts: [
        {
          id: "84d1efbae13044bb99dbc77bb193f3b3",
          caption: "Golden Gate Bridge",
          date: 1598986127164,
          location: "Brasília, DF, Brazil",
          imgUrl: "https://cdn.quasar.dev/img/parallax2.jpg"
        },
        {
          id: "d2ac75eb510745d2b47c1a188569c81c",
          caption: "Golden Gate Bridge",
          date: 1598986127164,
          location: "Brasília, DF, Brazil",
          imgUrl: "https://cdn.quasar.dev/img/parallax2.jpg"
        },
        {
          id: "a2475e7661714e01bdcc39e5431c3f69",
          caption: "Golden Gate Bridge",
          date: 1598986127164,
          location: "Brasília, DF, Brazil",
          imgUrl: "https://cdn.quasar.dev/img/parallax2.jpg"
        },
        {
          id: "8383be4d7ea34ea2b0ad2a9947eef4d0",
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