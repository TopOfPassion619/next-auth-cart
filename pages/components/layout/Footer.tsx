import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="bg-gray-100 mt-16 py-12 border-t border-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
            <h6 className="text-xl font-bold mb-2">BuzzyCart</h6>
            <p className="text-sm text-gray-600">
              Discover premium furniture crafted with comfort and design in mind. Shop exclusive deals today.
            </p>
          </div>

          <div className="w-1/2 md:w-1/6 px-4 mb-8 md:mb-0">
            <h6 className="text-base font-semibold mb-2">Shop</h6>
            <div className="space-y-1">
              <Link href="#" className="text-sm text-gray-600 hover:underline">Living Room</Link>
              <Link href="#" className="text-sm text-gray-600 hover:underline">Bedroom</Link>
              <Link href="#" className="text-sm text-gray-600 hover:underline">Dining</Link>
              <Link href="#" className="text-sm text-gray-600 hover:underline">Office</Link>
            </div>
          </div>

          <div className="w-1/2 md:w-1/6 px-4 mb-8 md:mb-0">
            <h6 className="text-base font-semibold mb-2">Support</h6>
            <div className="space-y-1">
              <Link href="#" className="text-sm text-gray-600 hover:underline">FAQs</Link>
              <Link href="#" className="text-sm text-gray-600 hover:underline">Shipping & Returns</Link>
              <Link href="#" className="text-sm text-gray-600 hover:underline">Privacy Policy</Link>
              <Link href="#" className="text-sm text-gray-600 hover:underline">Terms</Link>
            </div>
          </div>

          <div className="w-full md:w-1/3 px-4">
            <h6 className="text-base font-semibold mb-2">Stay Connected</h6>
            <p className="text-sm text-gray-600">support@buzzycart.com</p>
            <p className="text-sm text-gray-600">1-800-BUZZY-FURNI</p>
            <div className="flex space-x-4 mt-4">
              <Link href="#" className="text-gray-600 hover:text-gray-900"><i className="fab fa-facebook"></i></Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900"><i className="fab fa-instagram"></i></Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900"><i className="fab fa-twitter"></i></Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900"><i className="fab fa-youtube"></i></Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 mb-4 md:mb-0">
            © {new Date().getFullYear()} BuzzyCart. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Image src="/assets/img/visa.png" alt="Visa" width={80} height={28} />
            <Image src="/assets/img/mastercard.png" alt="Mastercard" width={80} height={28} />
            <Image src="/assets/img/paypal.png" alt="PayPal" width={80} height={28} />
            <Image src="/assets/img/apple.png" alt="Apple Pay" width={86} height={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
