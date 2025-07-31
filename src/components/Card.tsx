import { ShoppingCartIcon } from "lucide-react";
import type { ProductsType } from "../types/Menu";
import { Image } from "./";
import "./styles/card.css";
import MenuController from "../controllers/MenuController";

type CardProps = {
  product: ProductsType;
};

export default function Card({ product }: CardProps) {
  const wppLink = MenuController.getWppUrl(product.linkText);
  return (
    <div className="cardContainer">
      <Image size={"120px"} src={product.productImageUrl} className="cardImg" />
      <div className="cardInfoContainer">
        <div className="cardProductInfo">
          <p className="cardProductName">{product.productName}</p>
          <p>{product.productDescription}</p>
        </div>
      </div>
      <div className="cardProductAdd">
        <a href={wppLink}>
          <ShoppingCartIcon className="cardIcon" />
        </a>
      </div>
    </div>
  );
}
