
import { IoLogoFacebook } from "react-icons/io";
import { SlSocialInstagram, SlSocialYoutube } from "react-icons/sl";
import { TiSocialTwitter } from "react-icons/ti";
import { Link } from "react-router";



const Footer = () => {
  return (
    <footer className="border-t bg-card bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              ToyTopia
            </h3>
            <p className="text-sm text-muted-foreground">
              Your local marketplace for amazing toys. Supporting local sellers and bringing joy to families.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-2xl mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  All Toys
                </Link>
              </li>
              <li>
                <Link to="/profile" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  My Profile
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-2xl mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-2xl mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <IoLogoFacebook className=" text-blue-600 text-2xl h-8 w-8" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <TiSocialTwitter className="text-blue-400 text-2xl h-8 w-8" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
               <SlSocialInstagram className=" text-red-400 h-8 w-8" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Youtube"
              >
              <SlSocialYoutube className=" text-red-500 h-8 w-8" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} ToyTopia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;