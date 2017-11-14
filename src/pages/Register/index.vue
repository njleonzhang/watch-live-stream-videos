<style lang='scss'>
  .login-page {
    background-color: black;
    height: 100%;
    min-width: 500px;

    p {
      color: $label-color;
      text-align: center;
    }

    .login-form-wrapper {
      position: absolute;
      width: 380px;
      margin: auto;
      top: 20%;
      left: 0;
      right: 0;
      background-color: rgba(50,50,50,0.6);
    }

    .login-form {
      margin: auto;
      width: 300px;
    }

    .logo-wrapper {
      text-align: center;
    }

    .logo {
      width: 260px;
      margin-top: 30px;
    }

    .login-button{
      margin-top: 20px;
      width: 100%;
    }

    .captcha {
      height: 30px;
      vertical-align: middle;
    }

    #particles-container {
      height: 100%;
      background: url('./images/bg.jpg') no-repeat;
      background-size: cover;
    }

    .jump-to-login{
      color: #8a94a2;
      cursor: pointer;
    }
  }
</style>

<template lang='pug'>
  .login-page
    #particles-container
    .login-form-wrapper
      .logo-wrapper
        //- img.logo(src='~assets/images/loginLogo.png')
      p 直播导航
      el-form.login-form(:model='registerData', label-position='top', :rules='rules', ref='form')
        el-form-item(label='用户名', prop='username')
          el-input(v-model='registerData.username')
        el-form-item(label='密码', prop='password')
          el-input(v-model='registerData.password', type='password')
        el-form-item(label='确认密码', prop='confirmPassword')
          el-input(v-model='registerData.confirmPassword', type='password', @keyup.enter.native='register')
        //- el-form-item(label='验证码', prop='captcha_code')
        //-   el-row
        //-     el-col(:span=14)
        //-       el-input(v-model='registerData.captcha_code', @keyup.enter.native='login')
        //-     el-col(:span=8, :offset='2')
        //-       img.captcha(:src='captchaUrl' @click='refreshCaptcha')
        el-form-item
          el-button.login-button(type='success' @click='register') 注册

      p.jump-to-login(@click='$router.push("/login")') 还没账号, 去注册
</template>

<script>
import particles from 'exports-loader?particlesJS=window.particlesJS,window.pJSDom!particles.js'
import config from '@/services/particlesConfig'
import api from '@/api'
import {CachedCsrf} from '@/services/CachedCookies'
// import types from 'store/types'

export default {
  data() {
    return {
      registerData: {
        username: '',
        password: '',
        captcha_code: ''
      },
      captchaUrl: '',
      isLogin: true,

      rules: {
        userName: [{
          required: true, message: '请输入用户名', trigger: 'change'
        }],
        password: [{
          required: true, message: '请输入密码', trigger: 'change'
        }],
        confirmPassword: [{
          required: true, message: '请确认密码', trigger: 'change'
        }],

        // captcha_code: [{
        //   required: true, message: '请输入验证码', trigger: 'change'
        // }]
      }
    }
  },

  // beforeRouteEnter(to, from, next) {
    // HttpService.SCCommonGet('common/refresh-captcha').then(data => {
    //   next(vm => {
    //     vm.initCaptchaData(data)
    //   })
    // })
  // },

  mounted() {
    particles.particlesJS('particles-container', config)
  },

  methods: {
    register() {
      this.$refs.form.validate(valid => {
        if (valid) {
          if (this.registerData.password === this.registerData.confirmPassword) {
            api.Auth.register(this.registerData.username, this.registerData.password).then(data => {
              this.$router.push('/mgmt/dota')
            }, _ => {
              // this.refreshCaptcha()
            })
          } else {
            this.$message('两次输入的密码不一样')
          }
        }
      })
    },

    // initCaptchaData(data) {
    //   this.registerData.captcha_key = data.captcha_key
    //   this.captchaUrl = data.captcha_img_url
    // },

    // refreshCaptcha() {
    //   HttpService.SCCommonGet('common/refresh-captcha').then(data => {
    //     this.initCaptchaData(data)
    //   })
    // }
  }
}
</script>
