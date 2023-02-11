import RoseImage from '../../../../../public/images/rose-img.svg';
import VanillaImage from '../../../../../public/images/vanilla-img.svg';
import OudImage from '../../../../../public/images/oud-img.svg';
import ProductImage1 from '../../../../../public/images/product-1.png';
import ProductImage2 from '../../../../../public/images/product-2.png';
import ProductImage3 from '../../../../../public/images/product-3.png';
import ProductImage4 from '../../../../../public/images/product-4.png';

const ProductCardData = [
    {
        id: '1',
        productImage: `${ProductImage1}`,
        productName: 'Jannatul Fridaus',
        discountPrice: '12 AED ',
        actualPrice: '24 AED',
        star: '5',
        totalReview: '32',
        discount: '50%',
        productType: 'oil perfume',
        productWeight: '75ML',
        productForUse: 'WOMEN',
        ingredients: [
            {
                name: 'rose',
                path: `${RoseImage}`
            },
            {
                name: 'Vanilla',
                path: `${VanillaImage}`
            },
            {
                name: 'oud',
                path: `${OudImage}`
            }
        ],
        background: 'color1'
    },
    {
        id: '1',
        productImage: `${ProductImage2}`,
        productName: 'Jannatul Fridaus',
        discountPrice: '12 AED ',
        actualPrice: '24 AED',
        star: '5',
        totalReview: '32',
        discount: '50%',
        productType: 'oil perfume',
        productWeight: '75ML',
        productForUse: 'WOMEN',
        ingredients: [
            {
                name: 'rose',
                path: `${RoseImage}`
            },
            {
                name: 'Vanilla',
                path: `${VanillaImage}`
            },
            {
                name: 'oud',
                path: `${OudImage}`
            }
        ],
        background: 'color2'
    },
    {
        id: '1',
        productImage: `${ProductImage3}`,
        productName: 'Jannatul Fridaus',
        discountPrice: '12 AED ',
        actualPrice: '24 AED',
        star: '5',
        totalReview: '32',
        discount: '50%',
        productType: 'oil perfume',
        productWeight: '75ML',
        productForUse: 'WOMEN',
        ingredients: [
            {
                name: 'rose',
                path: `${RoseImage}`
            },
            {
                name: 'Vanilla',
                path: `${VanillaImage}`
            },
            {
                name: 'oud',
                path: `${OudImage}`
            }
        ],
        background: 'color3'
    },
    {
        id: '1',
        productImage: `${ProductImage4}`,
        productName: 'Jannatul Fridaus',
        discountPrice: '12 AED ',
        actualPrice: '24 AED',
        star: '5',
        totalReview: '32',
        discount: '50%',
        productType: 'oil perfume',
        productWeight: '75ML',
        productForUse: 'WOMEN',
        ingredients: [
            {
                name: 'rose',
                path: `${RoseImage}`
            },
            {
                name: 'Vanilla',
                path: `${VanillaImage}`
            },
            {
                name: 'oud',
                path: `${OudImage}`
            }
        ],
        background: 'color4'
    }
];

export default ProductCardData;
