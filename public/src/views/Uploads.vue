<template>
    <div class="container">
        <Sidebar />
        <main>
            <h1>Upload your images and videos here</h1>
            <div class="table">
                <div class="tile" v-for="(img, index) of images" :key="index">
                    <ion-icon @click="deleteImage(img.src)" name="trash-outline"></ion-icon>
                    <img :src="img.pre" :key="index" alt="image" />
                </div>
            </div>
            <button @click="upload">Upload</button>
        </main>
    </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'

export default {
    name: 'Uploads',
    components: {
        Sidebar,
    },
    computed: {
        images() {
            return this.$store.getters.media
        },
    },
    methods: {
        deleteImage(data) {
            this.$store.dispatch('removeMedia', data)
        },
        upload() {
            const rand = Math.floor(Math.random() * 9);
            this.$store.dispatch('addMedia', {pre: `https://unsplash.it/500/50${rand}`, src: `https://unsplash.it/500/50${rand}`} );
        },
    },
}
</script>

<style lang="scss" scoped>
.container {
    display: flex;
}
main {
    height: 100vh;
    width: calc(100vw - 200px);
    padding: 30px;
    display: flex;
    flex-direction: column;
}
.table {
    height: 80%;
    padding: 20px;
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    grid-auto-rows: 150px;
    overflow: auto;
    // background: rgb(250, 250, 250);
    border-radius: 20px;
    img {
        width: 150px;
        height: 150px;
        border-radius: 10px;
        object-fit: fill;
        object-position: center;
    }
    .tile {
        position: relative;
        ion-icon {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 30px;
            cursor: pointer;
            background: rgba(255, 255, 255, 0.486);
            padding: 10px;
            border-radius: 50%;
        }
    }
}

button {
    background: #34ffb6;
    border-radius: 10px;
    border: none;
    outline: none;
    font-size: 20px;
    padding: 15px 25px;
    font-weight: 600;
    cursor: pointer;
    margin: 10px;
    align-self: center;
}
</style>
