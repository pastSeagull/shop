Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: [
        {
          pagePath: "/pages/home/home",
          iconPath: "/image/home.png",
          selectedIconPath: "/image/home-hl.png",
          text: "首页"
        },
        {
          pagePath: "/pages/sort/index",
          iconPath: "/image/sort.png",
          selectedIconPath: "/image/sort-hl.png",
          text: "分类"
        },
        {
          pagePath: "/pages/cart/index",
          iconPath: "/image/cart.png",
          selectedIconPath: "/image/cart-hl.png",
          text: "购物车"
        },
        {
          pagePath: "/pages/person/index",
          iconPath: "/image/person.png",
          selectedIconPath: "/image/person-hl.png",
          text: "购物车"
        }
    ]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    }
  }
})