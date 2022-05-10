<template>
    <header class="header-container container-fluid h-100">
        <div class="row align-items-center">
            <div class="col-12 col-md-6 text-center mb-5">
                <h1 class="skum-heading">SKUM</h1>
                <p class="about-skum-heading mb-5 mt-5">An app where beer enthusiasts can discover new <br>
                    beer and share their discoveries with friends.</p>
            </div>
            <div class="col-12 col-md-6">
                <img class="img-fluid" src="../../assets/images/header-img.png" alt="skum-case-study">
            </div>
        </div>
    </header>
</template>

<style scoped>
.header-container{
    background-color: #F0F1E9;
    background-size: cover;
    font-family: Montserrat, sans-serif;
}

.skum-heading{
    color: #153136;
    font-size: 128px;
    font-weight: bolder;
}

.about-skum-heading{
    font-size: 24px;
    font-weight: 200;
    color: rgba(13, 13, 13, .87);
}

.row{
height: 100vh;
}

@media screen and (max-width:768px){
    .skum-heading{
        font-size: 80px;
    }
}
</style>