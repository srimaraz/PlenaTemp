
import { create } from "zustand";

interface IFavouriteState {
  favouriteProducts: Array<string>;
  addFavProduct: Function;
  removeFavProduct: Function;
}

const useFavourite = create<IFavouriteState>((set) => ({
  favouriteProducts: [],
  addFavProduct: (itemId: string) =>
    set((state:any) => {
      const hasProduct = state.favouriteProducts.includes(itemId);
      if (!hasProduct) {
        return {
          favouriteProducts: [...state.favouriteProducts, itemId],
        };
      }
      return itemId;
    }),
  removeFavProduct: (itemId: any) =>
    set((state: any) => {
      return {
        favouriteProducts: state.favouriteProducts
          .filter((p: any) => p !== itemId),
      };
    }),
}));

export default useFavourite;