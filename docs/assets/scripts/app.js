import MobileMenu from "./modules/MobileMenu";
import RevealOnScroll from "./modules/RevealOnScroll";
import StickyHeader from "./modules/StickyHeader";
import Modal from "./modules/Modal";
import $ from "jquery";

var mobileMenu = new MobileMenu();
new RevealOnScroll($(".feature-item"),"85%");
new RevealOnScroll($(".testimonial"),"70%");
var stickyHeader = new StickyHeader();
var modal = new Modal();
