import { BidModal } from "@/components/modals/BidModal";
import { BurgerMenuModal } from "@/components/modals/BurgerMenuModal";
import { CatalogModal } from "@/components/modals/CatalogModal";

export default function ModalPage() {
  return (
    <>
      <CatalogModal />
      <BurgerMenuModal />
      <BidModal />
    </>
  );
}
