<template>
    <div class="card">
        <h2 v-if="title">{{ title }}</h2>
        <ion-icon :style="colors" :name="icon"></ion-icon>
        <h1>{{ kcon(data) }}</h1>
    </div>
</template>

<script>
export default {
    name: 'Card',
    props: ['title', 'icon', 'data', 'colors'],
    methods: {
        kcon: (num) => {
        num = parseInt(num)
        if (num < 1000) return num
        if (num >= 1000000) return num / 1000000 + 'M'
        return num / 1000 + 'k'
        },
    }
}
</script>

<style lang="scss" scoped>
.card {
    width: 90%;
    height: 80%;
    border-radius: 20px;
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    cursor: pointer;
}
ion-icon {
    font-size: 36px;
}
h1 {
    font-size: 3rem;
}
h2 {
    font-size: 1.8rem;
    font-weight: 500;
}
</style>
