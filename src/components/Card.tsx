import { ShoppingCartIcon } from "lucide-react";
import type { ProductsType } from "../types/Menu";
import Formatter from "../util/Formatter";
import { Image } from "./";
import "./styles/card.css";

type CardProps = {
  product: ProductsType;
};

export default function Card({ product }: CardProps) {
  return (
    <div className="cardContainer">
      <Image size={'120px'} src={product.productImageUrl} className="cardImg" />
      <div className="cardInfoContainer">
        <div className="cardProductInfo">
          <p className="cardProductName">{product.productName}</p>
          <p>{product.productDescription}</p>
        </div>
      </div>
          <div
            className="cardProductAdd"
          >
            <ShoppingCartIcon />
          </div>
    </div>
  );
}
