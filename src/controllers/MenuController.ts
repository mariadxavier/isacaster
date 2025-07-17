import dataJson from "../../products.json";
import type {
  GetProductsResponse,
  MenuType,
  ProductsType,
} from "../types/Menu";

class MenuController {
  private getRemoteData() {
    const completeData = dataJson;
    return completeData;
  }

  private getAllProducts(): ProductsType[] {
    const allSections = this.getSections();
    const allProducts: ProductsType[] = [];

    for (const section of allSections) {
      section.sectionProducts.forEach((prod) => allProducts.push(prod));
    }

    return allProducts;
  }

  private getCompleteSection(): MenuType {
    const allProducts = this.getAllProducts();
    const completeSection: MenuType = {
      sectionCode: "1111",
      sectionName: "Todos",
      sectionColor: "#95A574",
      sectionProducts: allProducts,
    };
    return completeSection;
  }

  public getSections(): MenuType[] {
    const sections = this.getRemoteData().sections;
    return sections;
  }

  public getSectionProducts(sectionCode: string): GetProductsResponse {
    const sections = this.getSections();
    const section = sections.find(
      (section) => section.sectionCode === sectionCode
    );
    const products = section?.sectionProducts;

    if (!products) {
      return { error: true, products: [] };
    }
    return { error: false, products: products };
  }

  public getSectionsWithGeneral(): MenuType[] {
    const allSections = this.getSections();
    const completeSection = this.getCompleteSection();

    const finalContent: MenuType[] = [...allSections, completeSection];

    return finalContent;
  }
}

export default new MenuController();
