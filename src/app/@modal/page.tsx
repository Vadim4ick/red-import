import { BidModal } from "@/components/modals/BidModal";
import { BurgerMenuModal } from "@/components/modals/BurgerMenuModal";
import { CatalogBidModal } from "@/components/modals/CatalogBidModal";
import { CatalogModal } from "@/components/modals/CatalogModal";

export default function ModalPage() {
  return (
    <>
      <CatalogModal />
      <BurgerMenuModal />
      <BidModal />
      <CatalogBidModal />
    </>
  );
}
