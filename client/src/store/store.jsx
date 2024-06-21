import { create } from "zustand";
import { persist } from "zustand/middleware";
import { useAuthStore } from "./auth";

const useStore = create(
  persist(
    (set) => ({
      cart: [],
      inventory: [],
      favorites: [], 
      userFavorites: {},

      addToFavorites: (product) =>
        set((state) => {
          const user = useAuthStore.getState().user;
          const token = useAuthStore.getState().token;         

          if (!token && !user) {
            return state;
          } else {
            const existingFavorites = state.favorites.find((item) => item.name === product.name);
            if (!existingFavorites) {
              return {
                favorites: [...state.favorites, product],
                userFavorites: user._id
              };
            } else {
              return state;
            }
          }
        }),

      removeFromFavorites: (product) =>
        set((state) => ({
          favorites: state.favorites.filter((item) => item.name !== product.name),
        })),
      
      clearCart: () => set({ cart: [] }),
      clearFavorites: () => set({ favorites: [] }),
      
      addToCart: (product) =>
        set((state) => {
          const existingProduct = state.cart.find(
            (item) => item.product.name === product.name
          );

          if (existingProduct) {
            return {
              cart: state.cart.map((item) =>
                item.product.name === product.name
                  ? {
                      ...item,
                      quantity: item.quantity + 1,
                      product: {
                        ...item.product,
                        stock: item.product.stock - 1,
                      },
                    }
                  : item
              ),
            };
          } else {
            if (product.stock > 0) {
              return {
                cart: [
                  ...state.cart,
                  {
                    product: { ...product, stock: product.stock - 1 },
                    quantity: 1,
                  },
                ],
              };
            } else {
              console.log("Not enough stock");
              return state;
            }
          }
        }),

      removeItemFromCart: (product) =>
        set((state) => {
          const existingProduct = state.cart.find(
            (item) => item.product.name === product.name
          );
          if (existingProduct) {
            return {
              cart: state.cart.filter(
                (item) => item.product.name !== product.name
              ),
              inventory: state.inventory.map((item) =>
                item.name === product.name
                  ? { ...item, stock: item.stock + existingProduct.quantity }
                  : item
              ),
            };
          } else {
            return state;
          }
        }),

      getTotalSum: () => {
        const cart = useStore.getState().cart;
        return cart.reduce(
          (sum, item) => sum + item.product.price * item.quantity,
          0
        );
      },

      removeFromCart: (product) =>
        set((state) => {
          const existingProduct = state.cart.find(
            (item) => item.product.name === product.name
          );
          if (existingProduct && existingProduct.quantity > 1) {
            return {
              cart: state.cart.map((item) =>
                item.product.name === product.name
                  ? {
                      ...item,
                      quantity: item.quantity - 1,
                      product: {
                        ...item.product,
                        stock: item.product.stock + 1,
                      },
                    }
                  : item
              ),
            };
          } else {
            return {
              cart: state.cart.filter(
                (item) => item.product.name !== product.name
              ),
              inventory: state.inventory.map((item) =>
                item.name === product.name
                  ? { ...item, stock: item.stock + 1 }
                  : item
              ),
            };
          }
        }),

      setFavorites: (favorites) =>
        set(() => ({
          favorites: favorites
        }))
    }),
    {
      name: "cart-storage",
    }
  )
);

export default useStore;
