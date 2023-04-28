import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

const mutations = {
  // Add a product to the basket
  basketItem(state, { name, id, src, price, product }) {
    const existingItem = state.items.find((item) => item.id === id)
    if (existingItem) {
      existingItem.quantity++
    } else {
      state.items.push({
        name: name,
        id: id,
        src: src,
        price: price,
        product: product,
        isClicked: false,
        quantity: 1
      })
    }
    state.totalCost += price
  },

  // Decrease the quantity of an item in the basket
  decreaseQuantity(state, payload) {
    const item = state.items.find((item) => item.id === payload.id)
    if (item && item.quantity > 1) {
      item.quantity--
      state.totalCost -= item.price
    }
  },
  // Remove an item from the basket
  deleteItem(state, payload) {
    const itemIndex = state.items.findIndex((item) => item.id === payload.id)
    if (itemIndex !== -1) {
      const deletedItem = state.items[itemIndex]
      state.totalCost -= deletedItem.price * deletedItem.quantity
      state.items.splice(itemIndex, 1)
    }
  },
  // Lägg till en favoritprodukt
  addFavoriteItem(state, item) {
    state.favoriteItems.push(item)
  },
  // Ta bort en favoritprodukt
  removeFavoriteItem(state, payload) {
    const itemIndex = state.favoriteItems.findIndex(
      (item) => item.id === payload.id
    )
    if (itemIndex !== -1) {
      state.favoriteItems.splice(itemIndex, 1)
    }
  },
  // Set the isClicked property for an item
  setClicked(state, payload) {
    const itemIndex = state.items.findIndex((item) => item.id === payload.id)
    if (itemIndex !== -1) {
      state.items[itemIndex].isClicked = true
    }
  },
  clearTotalCost(state) {
    state.totalCost = 0
  },
  searchedItemsFiltered(state, itmz) {
    state.searchedItems = itmz
  },
  productDescription(state, { name, id, src, price, product }) {
    state.productDescriptionItem.push({
      name: name,
      id: id,
      src: src,
      price: price,
      product: product
    })
  }
}

const state = {
  items: [],
  favoriteItems: [],
  searchedItems: [],
  productDescriptionItem: [],
  // Totalpriset av ens produkter
  totalCost: 0,
  name: ''
}

const getters = {
  shoppingCartItems(state) {
    return state.items
  },

  // used to be able to return the total amount of items from the component of your choise by writing {{ $store.getters.totalQuantity }}
  totalQuantity(state) {
    return state.items.reduce((total, item) => total + item.quantity, 0)
  }
}

export default createStore({
  getters,
  state,
  mutations,
  plugins: [createPersistedState()],
  strict: true
})
