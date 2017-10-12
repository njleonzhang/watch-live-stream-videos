<style lang="scss">
  .left-side {
    height: 100%;
    width: $side-width;
    float: left;
    overflow: scroll;
    background-color: #4c4743;
    &.side-close{
      width: $side-close-width;
    }

    .el-menu {
      background: #4c4743;

      .el-menu-item {
        color: white;

        &.is-active, &:hover {
          background: #585e73;
        }
      }

    }
  }
</style>

<script>
  import navItems from '@/services/NavItems.js'

  export default {
    data() {
      return {
        navItems
      }
    },
    computed: {
      sideClose() {
        return this.$store.state.sideBar.close
      },
      activeIndex() {
        return this.$store.state.sideBar.active
      }
    },

    render(h) {
      const renderMenuItem = function(item) {
        return (
          <el-menu-item index={item.index}>
            <i class={item.icon}></i>
            {item.name}
          </el-menu-item>
        )
      }

      return (
        <div class={{'left-side': true, 'side-close': this.sideClose}}>
          <el-menu router default-active={this.activeIndex}>
            {
              this._l(this.navItems, (item, index) =>
                item.index
                ? renderMenuItem(item)
                : <el-submenu index={`${index}`}>
                    <template slot="title">
                      <i class={`${item.icon}`}></i>
                      {item.name}
                    </template>
                    {
                      item.children
                      ? this._l(item.children, (childItem, itemPath) =>
                          renderMenuItem(childItem)
                        )
                      : null
                    }
                  </el-submenu>
              )
            }
          </el-menu>
        </div>
      )
    },

    methods: {
      getSideClass() {
        let sideClass = 'left-side'
        if (this.sideClose) {
          return `${sideClass} side-close`
        } else {
          return sideClass
        }
      }
    }
  }
</script>
