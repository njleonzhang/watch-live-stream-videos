<style lang="scss">
  .mgmt {
    $header-height: 66px;
    $main-min-width: 1280px;

    .header {
      background-color: #373d41;
      height: $header-height;
      min-width: $main-min-width;

      i {
        display: inline-block;
        color: white;
        line-height: $header-height;
        font-size: 30px;
        vertical-align: middle;

        &.hover {
          font-size: 32px;
        }
      }

      .title-logo {
        width: 140px;
        margin: 0 10px 0 20px;
        vertical-align: middle;
        cursor: pointer;
      }

      .right {
        float: right;
        margin-right: 20px;
        .el-dropdown-link {
          color: #fff;
        }

        .user-info {
          margin-right: 10px;
        }
      }
    }

    .main {
      position: absolute;
      top: $header-height;
      right: 0;
      bottom: 0;
      left: 0;
      min-width: $main-min-width;
    }
  }
</style>

<template lang="pug">
  .mgmt
    .header
      // img.title-logo(src='~assets/images/titleLogo.png' @click='gotoHome')
      i.el-icon-my.el-icon-my-toggle.toggle(
        @click="toggleSlide")
      .right
        i.add-video-room.el-icon-my.el-icon-my-add(@click='showAddDialog')
        el-dropdown(@command='dropDownItemClick')
          span.el-dropdown-link
            span.user-info {{userInfo}}
            i.el-icon-my.el-icon-my-user
          el-dropdown-menu(slot='dropdown')
            el-dropdown-item(command='gotoMy') 个人信息
            el-dropdown-item(command='logout') 退出登录
    .main
      side-bar
      main-content

    el-dialog(title='添加直播间',
      :visible.sync="showAddVideoRoomDialog",
      width='40%'
      center)
      el-form(:model='addRoomData' label-width="120px")
        el-form-item(label='直播平台')
          el-select(v-model='addRoomData.platform')
            el-option(v-for='platform in platforms'
            :key='platform.code',
            :label='platform.name',
            :value='platform.code')

        el-form-item(label='房间号')
          el-input(v-model='addRoomData.roomId')

        el-form-item
          el-button(type='primary', @click='addRoom') 添加
          el-button(@click='showAddVideoRoomDialog = false') 取消

</template>

<script>
  import SideBar from '@/components/SideBar'
  import MainContent from '@/components/MainContent'
  import types from '@/store/types'
  import api from '@/api'
  import { platforms } from '@/services/Constants'

  export default {
    components: {
      SideBar,
      MainContent
    },
    computed: {
      sideClose() {
        return this.$store.state.sideBar.close
      },
      userInfo() {
        return this.$store.state.userInfo.content
      }
    },
    data() {
      return {
        platforms,
        isHover: false,
        showAddVideoRoomDialog: false,
        addRoomData: {
          platform: '',
          roomId: ''
        }
      }
    },
    methods: {
      toggleSlide() {
        this.$store.dispatch(types.sideBar.TOGGLE)
      },

      dropDownItemClick(command) {
        switch (command) {
          case 'gotoMy':
            this.$router.push('/mgmt/my')
            break

          case 'logout':
           api.Auth.logout().then(_ => {
             this.$message({
               type: 'success',
               message: '登出成功'
             })
            //  this.$store.dispatch(types.userInfo.DELETE)
             this.$router.push('/login')
           })
            break

          default:
            // 不会到这里
        }
      },

      gotoHome() {
        this.$router.push('/mgmt/home')
      },
      showAddDialog() {
        this.showAddVideoRoomDialog = true
      },
      async addRoom() {
        let result = await api.User.addVideoRoom(this.addRoomData.platform, this.addRoomData.roomId)
        this.$message('添加成功')
        this.showAddVideoRoomDialog = false
      }
    },

    // created() {
//      this.$store.dispatch(types.userInfo.UPDATE)
    // },

    directives: {
      hover: {
        bind(el) {
          let hoverClass = ' hover'

          el.addEventListener('mouseover', _ => {
            el.className += hoverClass
          })

          el.addEventListener('mouseout', _ => {
            let name = el.className
            el.className = name.replace(hoverClass, '')
          })
        }
      }
    }
  }
</script>
