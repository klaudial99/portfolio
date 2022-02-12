<template>
    <div class="layout">
        <nav-bar/>
        <slot/>
    </div>
</template>

<script>
import NavBar from "@/components/NavBar";
export default {
    name: "Layout",
    components: {
        NavBar
    }
}
</script>

<style scoped>

</style>