<template>
    <div class="container">
        <Sidebar />
        <main>
            <div @click="show = false" v-if="show" class="story">
                <img @click.stop :src="imgs" alt="dp" />
                <div class="controls">
                    <button @click.stop="prev">PREVIOUS</button>
                    <button @click.stop="next">NEXT</button>
                </div>
            </div>
            <h1>See all the stories your customers are sharing</h1>
            <div class="table">
                <div class="tile" v-for="(img, index) of stories" :key="index">
                    <img @click="select(index)" :src="img" :key="index" alt="image" />
                </div>
            </div>
        </main>
    </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'

export default {
    name: 'Story',
    components: {
        Sidebar,
    },
    data() {
        return {
            stories: ['https://unsplash.it/200/200', 'https://unsplash.it/200/201', 'https://unsplash.it/200/202'],
            show: false,
            count: 0,
        }
    },
    computed: {
        imgs() {
            return this.stories[this.count]
        }
    },
    methods: {
        select(e) {
            this.count = e
            this.show = true;
        },
        prev() {
            if (this.count - 1 >= 0) {
                this.count--
            }
        },
        next() {
            if (this.count + 1 < this.stories.length) {
                this.count++
            }
        }
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
    position: relative;
}
.table {
    height: 80%;
    padding: 20px;
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    grid-auto-rows: 150px;
    overflow: auto;
    border-radius: 20px;
    img {
        width: 150px;
        height: 150px;
        object-fit: fill;
        object-position: center;
        background: rgb(240, 240, 240);
        cursor: pointer;
        border-radius: 50%;
        padding: 2px;
        border: 5px solid rgb(255, 95, 55);
    }
}

.story {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
        height: 70vh;
        aspect-ratio: 9 / 16;
        border-radius: 1rem;
    }
    button {
        padding: 10px 15px;
        width: 100px;
        border-radius: 0.7rem;
        margin: 10px;
        border: none;
        outline: none;
        font-weight: 500;
        cursor: pointer;
        background: linear-gradient(180deg, #ff416b 0%, #ff4a31 100%);
        color: white;
    }
}
</style>
