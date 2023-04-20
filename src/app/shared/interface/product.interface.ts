import {ProductPromoTypeEnum} from '../enum';

export interface ProductInterface {
  name: string;
  id: number;
  price: number;
  category: string;
  promo_value: null | number;
  promo_value_unit: null | ProductPromoTypeEnum;
  description: string;
  image_url: string;
  image_type: number;
  image_alt: string;
  tags: number[];
}
