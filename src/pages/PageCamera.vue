<template>
  <q-page class="constrain-more q-pa-md">
    <div class="camera-frame q-pa-md">
      <video
        v-show="!imageCaptured"
        ref="video"
        class="full-width"
        autoplay
      />
      <canvas
        v-show="imageCaptured"
        ref="canvas"
        class="full-width"
        height="240"
      />
    </div>
    <div class="text-center q-pa-md">
      <q-btn
        v-if="hasCameraSupport"
        @click="captureImage"
        color="grey-10"
        icon="eva-camera"
        size="lg"
        round
      />
      <q-file
        v-else
        outlined
        @input="captureImageFallback"
        v-model="imageUpload"
        accept="image/*"
        label="Choose and image"
      >
        <template v-slot:prepend>
          <q-icon name="eva-attach-outline" />
        </template>
      </q-file>

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
import { uid } from "quasar";
require("md-gum-polyfill");
export default {
  name: "PagaCamera",
  data () {
    return {
      post: {
        id: uid(),
        caption: "",
        location: "",
        photo: null,
        date: Date.now()
      },
      imageCaptured: false,
      imageUpload: [],
      hasCameraSupport: true
    };
  },
  methods: {
    initCamera () {
      navigator.mediaDevices
        .getUserMedia({
          video: true
        })
        .then(stream => {
          this.$refs.video.srcObject = stream;
        })
        .catch(error => {
          this.hasCameraSupport = false;
        });
    },
    captureImage () {
      const video = this.$refs.video;
      const canvas = this.$refs.canvas;
      canvas.width = video.getBoundingClientRect().width;
      canvas.height = video.getBoundingClientRect().height;

      const context = canvas.getContext("2d");
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      this.imageCaptured = true;
      this.post.photo = this.dataURItoBlob(canvas.toDataURL());
      this.disabelCamera();
    },
    captureImageFallback (file) {
      this.post.photo = file

      const canvas = this.$refs.canvas
      const context = canvas.getContext('2d')

      const reader = new FileReader()
      reader.onload = event => {
        const img = new Image()
        img.onload = () => {
          canvas.width = img.width
          canvas.height = img.height
          context.drawImage(img, 0, 0)
          this.imageCaptured = true
        }
        img.src = event.target.result
      }
      reader.readAsDataURL(file)
    },
    disabelCamera () {
      const video = this.$refs.video;
      const videoTracks = video.srcObject.getVideoTracks();

      videoTracks.forEach(track => {
        track.stop()
      });
    },
    dataURItoBlob (dataURI) {
      // convert base64 to raw binary data held in a string
      // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
      let byteString = atob(dataURI.split(",")[1]);

      // separate out the mime component
      const mimeString = dataURI
        .split(",")[0]
        .split(":")[1]
        .split(";")[0];

      // write the bytes of the string to an ArrayBuffer
      const ab = new ArrayBuffer(byteString.length);

      // create a view into the buffer
      let ia = new Uint8Array(ab);

      // set the bytes of the buffer to the correct values
      for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
      }

      // write the ArrayBuffer to a blob, and you're done
      const blob = new Blob([ab], { type: mimeString });
      return blob;
    }
  },
  mounted () {
    this.initCamera();
  },
  beforeDestroy () {
    if (this.hasCameraSupport) {
      this.disabelCamera();
    }
  }
};
</script>

<style lang="sass">
.camera-frame
  border: 2px solid $grey-10
  border-radius: 10px
</style>
