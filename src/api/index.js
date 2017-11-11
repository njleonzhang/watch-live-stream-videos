import { get, post } from '@/services/Http'

const Auth = {
  register: (userName, password) => {
    return post('auth/register/', {
      userName,
      password
    })
  },

  login: (userName, password) => {
    return post('auth/login/', {
      userName,
      password
    })
  },

  logout: () => {
    return get('auth/logout/')
  }
}

const User = {
  addVideoRoom: (platform, roomId) => {
    return post('user/add_video_room/', {
      platform,
      roomId
    })
  },
  getRooms: () => {
    return get('user/rooms/')
  }
}

export default {
  Auth,
  User
}
