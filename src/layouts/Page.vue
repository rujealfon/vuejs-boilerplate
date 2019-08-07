<template>
  <section>
    <page-header></page-header>
    <main>
      <slot />
    </main>
    <page-footer></page-footer>
  </section>
</template>

<script>
import PageHeader from "@/components/PageHeader";
import PageFooter from "@/components/PageFooter";

export default {
  components: {
    "page-header": PageHeader,
    "page-footer": PageFooter
  }
};
</script>
