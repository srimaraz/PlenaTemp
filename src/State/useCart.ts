import { create } from "zustand";

interface IcartState {
  cart: Array<any>;
  items: number;
  addToCart: Function;
  removeFromCart: Function;
  clearCart: Function;
}
const useCart = create<IcartState>((set) => ({
  cart: [],
  items: 0,
  addToCart: (product: any) =>
    set((state: any) => {
      state.items += 1;
      const hasProduct = state.cart.find((cartItem: any) => cartItem.id === product.id);
      if (hasProduct) {
        return {
          cart: state.cart.map((cartItem: any) => {
            if (cartItem.id === product.id) {
              return {
                ...cartItem,
                quantity: cartItem.quantity + 1,
              };
            }
            return cartItem;
          }),
        };
      } else {
        return {
          cart: [...state.cart, { ...product, quantity: 1 }],
        };
      }
    }),
  removeFromCart: (product: any) =>
    set((state: any) => {
      return {
        cart: state.cart
          .map((cartItem: any) => {
            if (cartItem.id === product.id) {
              state.items--;
              return {
                ...cartItem,
                quantity: cartItem.quantity - 1,
              };
            }
            return cartItem;
          })
          .filter((p: any) => p.quantity > 0),
      };
    }),
  clearCart: () =>
    set((state: any) => {
      return {
        cart: [],
        items: 0,
      };
    }),
}));

export default useCart;