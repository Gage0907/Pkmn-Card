<script>
export default {
  data() {
    return {
      isHeaderExpanded: false
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollX = window.scrollX || document.documentElement.scrollLeft;
      this.isHeaderExpanded = scrollX > 0;
    }
  }
};
</script>


<template>
    <header>
        <nav>
            <div class="branding">
                <img src="../assets/PkmnLogo.png" alt="" />
                <h1>Pokemon Card Management System</h1>
            </div>
            <ul class="nav-routes">
                <RouterLink to="/">Home</RouterLink>
            </ul>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
header {
    position: fixed;
    left: 0;
    width: 100%;
    background-color: #3b4cca;
    nav {
        display: flex;
        align-items: center;
        padding: 25px 16px;
    }
    .branding {
        display: flex;
        float: left;
        align-items: center;
        gap: 8px;
        img {
            max-width: 150px;
        }
        h1 {
            text-shadow: black 5px 5px 5px;
            color: #ffcb05;
            font-size: 24px;

        }
    }

    .nav-routes {
        display: flex;
        flex: 1;
        justify-content: flex-end;
        gap: 12px;
        list-style: none;
        a {
            text-decoration: none;
            color: inherit;
        }
    }
}
</style>