<template>
        <div class=" col-12 col-sm-12 col-m-6 col-lg-6">
            <h1 :class="titleClass">{{title}}</h1>
            <p :class="pClass">{{description}}</p>
            <router-link :to="pathLink" class="nav-link">
                <p class="case-study-link h6">
                CASE STUDY  <i class="bi bi-arrow-right"></i>
            </p>
            </router-link>
        </div>
        <div class="col-12 col-sm-12 col-m-6 col-lg-6 ">
            <img :src="require(`@/assets/images/${img}`)" alt="Case study image" class="img-fluid" >
        </div>
</template>

<script>
export default {
    props: {
        title: String,
        description: String,
        img: String,
        titleClass: String,
        pClass: String,
        pathLink: String
    }
}
</script>

<style scoped>
.nav-link{
    color: #0D0D0D;
    margin-left: -1rem;
    -webkit-transition: margin 0.5s ease-out;
    -moz-transition: margin 1s ease-out;
    -o-transition: margin 1s ease-out;
}
.bi-arrow-right{
    font-size: 20px;
}
.case-study-link{
    margin: 0;
    font-size: 16px;
    font-weight: 600;
}

.nav-link:hover{
    color: #B11E61;
}

.case-study-link:hover{
    color: #B11E61;
    cursor:pointer;
    margin-top: -5px;
}
</style>