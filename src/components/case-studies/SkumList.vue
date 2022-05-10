<template>
    <div class="row justify-content-md-center g-3">
    <case-item
    v-for="skum in skumCaseStudy" :key="skum"
    :title="skum.title"
    :description="skum.description"
    :img="skum.image"
    :titleClass="skum.titleClass"
    :pClass="skum.pClass"
    :pathLink="skum.path"
    >
    </case-item>
    </div>
</template>

<script>
import CaseItem from './CaseItem.vue'
export default {
  components: { CaseItem },
    setup(){

        const skumCaseStudy= [
            {
                title: 'SKUM',
                description: 'An app where beer enthusiasts can discover new beer and share their discoveries with friends.',
                image: 'skum-landing-image.png',
                titleClass: 'skum-title',
                pClass: 'skum-des',
                path: '/skumcase'
            }
        ]

        return { skumCaseStudy }
    }
}
</script>