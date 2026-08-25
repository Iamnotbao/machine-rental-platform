import type { Machine } from '../types';


export const machines: Machine[] = [

  {
    id: 'may-chu-vat-ly-cau-hinh-1',

    name: 'Máy chủ vật lý - Cấu hình 1',

    category: 'Máy chủ vật lý',

    description:
      'Máy chủ vật lý cấu hình ổn định phù hợp chạy website, ứng dụng và hệ thống doanh nghiệp nhỏ.',


    images: [
      '/images/machines/server-1.jpg'
    ],


    status: 'available',


    specs: {
      cpu: '12 Core 24 Thread',

      ram: '64GB',

      gpu: '2GB',

      storage: '256GB SSD',
    },


    pricing: {

      test24h: 80000,

      week: 325000,

      month: 1100000,

    },

  },



  {
    id: 'may-chu-vat-ly-cau-hinh-2',

    name: 'Máy chủ vật lý - Cấu hình 2',

    category: 'Máy chủ vật lý',

    description:
      'Cấu hình nâng cấp với card đồ họa cao hơn, phù hợp hệ thống cần nhiều tài nguyên.',


    images: [
      '/images/machines/server-2.jpg'
    ],


    status: 'available',


    specs: {

      cpu: '12 Core 24 Thread',

      ram: '64GB',

      gpu: '4GB',

      storage: '256GB SSD',

    },


    pricing: {

      test24h: 80000,

      week: 350000,

      month: 1200000,

    },

  },




  {
    id: 'may-chu-vat-ly-cau-hinh-3',

    name: 'Máy chủ vật lý - Cấu hình 3',

    category: 'Máy chủ vật lý',

    description:
      'Máy chủ hiệu năng cao dành cho doanh nghiệp cần xử lý nhiều tác vụ.',


    images:[
      '/images/machines/server-3.jpg'
    ],


    status:'available',


    specs: {

      cpu:'28 Core 56 Thread',

      ram:'128GB',

      gpu:'2GB',

      storage:'512GB SSD',

    },


    pricing:{

      test24h:100000,

      week:525000,

      month:2000000,

    },


  },





  {
    id:'may-chu-vat-ly-cau-hinh-4',

    name:'Máy chủ vật lý - Cấu hình 4',

    category:'Máy chủ vật lý',


    description:
      'Máy chủ cao cấp với RAM lớn và card đồ họa mạnh.',


    images:[

      '/images/machines/server-4.jpg'

    ],


    status:'available',


    specs:{

      cpu:'28 Core 56 Thread',

      ram:'128GB',

      gpu:'8GB',

      storage:'512GB SSD',

    },


    pricing:{

      test24h:100000,

      week:575000,

      month:2200000,

    },


  },





  {
    id:'may-chu-vat-ly-cau-hinh-5',

    name:'Máy chủ vật lý - Cấu hình 5',

    category:'Máy chủ vật lý',


    description:
      'Cấu hình mạnh dành cho các hệ thống cần hiệu năng xử lý cao.',


    images:[

      '/images/machines/server-5.jpg'

    ],


    status:'available',


    specs:{

      cpu:'36 Core 72 Thread',

      ram:'128GB',

      gpu:'2GB',

      storage:'512GB SSD',

    },


    pricing:{

      test24h:100000,

      week:525000,

      month:2000000,

    },


  },





  {
    id:'may-chu-vat-ly-cau-hinh-6',

    name:'Máy chủ vật lý - Cấu hình 6',

    category:'Máy chủ vật lý',


    description:
      'Cấu hình cao nhất dành cho hệ thống doanh nghiệp lớn.',


    images:[

      '/images/machines/server-6.jpg'

    ],


    status:'available',


    specs:{

      cpu:'36 Core 72 Thread',

      ram:'128GB',

      gpu:'8GB',

      storage:'512GB SSD',

    },


    pricing:{

      test24h:100000,

      week:575000,

      month:2200000,

    },


  },

];