import { proxy } from "valtio";

type ContactPrefill = {
  packageName: string;
  price: string;
};

export const contactStore = proxy<ContactPrefill>({
  packageName: "",
  price: "",
});
