import { ShoppingCartIcon } from "lucide-react";
import type { ProductsType } from "../types/Menu";
import Formatter from "../util/Formatter";
import { Image } from "./";
import "./styles/card.css";

type CardProps = {
    color: string;
  // imgSrc: string;
  product: ProductsType;
};

export default function Card({ color, product }: CardProps) {
  return (
    <div className="cardContainer">
      <Image src={product.productImageUrl} className="cardImg" />
      <div className="cardInfoContainer">
        <div className="cardProductInfo">
          <p className="cardProductName">{product.productName}</p>
          <p>{product.productDescription}</p>
        </div>
        <div className="cardProductPrice">
          <p>{Formatter.formatCurrency(product.productPrice)}</p>
          <div style={{backgroundColor: `${color}`}} className="cardProductAdd">
            <ShoppingCartIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
